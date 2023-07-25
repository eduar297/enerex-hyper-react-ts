import { createContext, useState, ReactNode } from 'react';
import { ContractFormValues } from '../components/Customer/types';
import { FormikProps, useFormik } from 'formik';
import { contractValidationSchema } from '../components/Customer/schema';

const contractInitialValues: ContractFormValues = {
    firstName: '',
    lastName: '',
    jobTitle: '',
    primaryPhoneNumber: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
};

type ContractsState = {
    contracts: ContractFormValues[];
    setContracts: React.Dispatch<React.SetStateAction<ContractFormValues[]>>;
    contractSelected: ContractFormValues[];
    setContractSelected: React.Dispatch<React.SetStateAction<ContractFormValues[]>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: any;
    setError: React.Dispatch<React.SetStateAction<any>>;
    formik: FormikProps<ContractFormValues>;
};

export const ContractsContext = createContext<ContractsState>({
    contracts: [],
    setContracts: () => {},
    contractSelected: [],
    setContractSelected: () => {},
    loading: false,
    setLoading: () => {},
    error: null,
    setError: () => {},
    formik: {} as FormikProps<ContractFormValues>,
});

const onSubmit = (
    values: ContractFormValues,
    setContractSelected: React.Dispatch<React.SetStateAction<ContractFormValues[]>>,
    setContracts: React.Dispatch<React.SetStateAction<ContractFormValues[]>>,
    contracts: ContractFormValues[]
) => {
    const newContract = values;
    setContracts([...contracts, newContract]);
    setContractSelected([newContract]);
    alert(JSON.stringify(values, null, 2));
};

export const ContractsProvider = ({ children }: { children: ReactNode }) => {
    const [contracts, setContracts] = useState<ContractFormValues[]>([]);
    const [contractSelected, setContractSelected] = useState<ContractFormValues[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const formik = useFormik<ContractFormValues>({
        initialValues: contractInitialValues,
        validationSchema: contractValidationSchema,
        onSubmit: (values) => onSubmit(values, setContractSelected, setContracts, contracts),
    });

    return (
        <ContractsContext.Provider
            value={{
                contracts,
                setContracts,
                contractSelected,
                setContractSelected,
                loading,
                setLoading,
                error,
                setError,
                formik,
            }}>
            {children}
        </ContractsContext.Provider>
    );
};
