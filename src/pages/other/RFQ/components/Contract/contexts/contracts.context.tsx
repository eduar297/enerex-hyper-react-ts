import { createContext, ReactNode } from 'react';
import { ContractFormValues } from '../types';
import { FormikProps, useFormik } from 'formik';
import { contractValidationSchema } from '../schema';

const contractInitialValues: ContractFormValues = {
    startDate: new Date(),
    commodityType: '',
    country: '',
    state: '',
    minimumBandwidth: 0,
    deliveryPoint: '',
    annualProcurementAmount: '',
    procurementUnit: 0,
    fee: 0,
    renewableContentRequirement: 0,
    term: '',
};

type ContractsState = {
    formik: FormikProps<ContractFormValues>;
};

export const ContractsContext = createContext<ContractsState>({
    formik: {} as FormikProps<ContractFormValues>,
});

const onSubmit = (values: ContractFormValues) => {
    const newContract = values;

    alert(JSON.stringify(newContract, null, 2));
};

export const ContractsProvider = ({ children }: { children: ReactNode }) => {
    const formik = useFormik<ContractFormValues>({
        initialValues: contractInitialValues,
        validationSchema: contractValidationSchema,
        onSubmit: (values) => onSubmit(values),
    });

    return (
        <ContractsContext.Provider
            value={{
                formik,
            }}>
            {children}
        </ContractsContext.Provider>
    );
};
