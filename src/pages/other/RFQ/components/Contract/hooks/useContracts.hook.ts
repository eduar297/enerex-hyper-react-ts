import { useContext } from 'react';
import { ContractsContext } from '../contexts';
import { ContractFormValues, Product } from '../types';
import { FormikProps } from 'formik';

const useContracts = (): {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    formik: FormikProps<ContractFormValues>;
} => {
    const { products, setProducts, formik } = useContext(ContractsContext);

    return {
        products,
        setProducts,
        formik,
    };
};

export default useContracts;
