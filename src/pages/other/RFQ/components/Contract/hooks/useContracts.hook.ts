import { useContext } from 'react';
import { ContractsContext } from '../contexts';
import { ContractFormValues } from '../types';
import { FormikProps } from 'formik';

const useContracts = (): {
    formik: FormikProps<ContractFormValues>;
} => {
    const { formik } = useContext(ContractsContext);

    return {
        formik,
    };
};

export default useContracts;
