import { useEffect, useContext } from 'react';
import { ContractsContext } from '../contexts';
import { ContractFormValues } from '../components/Customer/types';
import { FormikProps } from 'formik';

const fetchContracts = (): Promise<ContractFormValues[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    firstName: 'Eduardo',
                    lastName: 'Moreira',
                    jobTitle: 'software developer',
                    primaryPhoneNumber: '058286995',
                    emailAddress: 'eduar2.moreira@gmail.com',
                    password: 'NeKjp4Ah',
                    confirmPassword: 'NeKjp4Ah',
                },
                {
                    firstName: 'Test',
                    lastName: 'Test',
                    jobTitle: 'software developer',
                    primaryPhoneNumber: '111111111',
                    emailAddress: 'test.test@gmail.com',
                    password: 'test',
                    confirmPassword: 'tests',
                },
            ]);
        }, 1000);
    });
};

const useContracts = (): {
    contracts: ContractFormValues[];
    setContracts: React.Dispatch<React.SetStateAction<ContractFormValues[]>>;
    contractSelected: ContractFormValues[];
    setContractSelected: React.Dispatch<React.SetStateAction<ContractFormValues[]>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: any;
    setError: React.Dispatch<React.SetStateAction<any>>;
    formik: FormikProps<ContractFormValues>;
} => {
    const {
        contracts,
        error,
        loading,
        setContracts,
        setError,
        setLoading,
        contractSelected,
        setContractSelected,
        formik,
    } = useContext(ContractsContext);

    useEffect(() => {
        setLoading(true);
        setContracts([]);
        setError(null);
        fetchContracts()
            .then((data) => {
                setContracts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return {
        contracts,
        setContracts,
        contractSelected,
        setContractSelected,
        loading,
        setLoading,
        error,
        setError,
        formik,
    };
};

export default useContracts;
