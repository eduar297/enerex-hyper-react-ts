import { createContext, ReactNode, useState } from 'react';
import { ContractFormValues, Product } from '../types';
import { FormikProps, useFormik } from 'formik';
import { contractValidationSchema } from '../schema';

const contractInitialValues: ContractFormValues = {
    startDate: null,
    commodityType: '',
    country: '',
    state: '',
    minimumBandwidth: undefined,
    deliveryPoint: '',
    annualProcurementAmount: '',
    procurementUnit: '',
    fee: undefined,
    renewableContentRequirement: undefined,
    term: '',
    productType: '',
    productTypeDescription: '',
    adder: undefined,
    multiplier: undefined,
    offPeak: undefined,
    onPeak: undefined,
};

type ContractsState = {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    formik: FormikProps<ContractFormValues>;
};

export const ContractsContext = createContext<ContractsState>({
    products: [],
    setProducts: () => {},
    formik: {} as FormikProps<ContractFormValues>,
});

const onSubmit = (values: ContractFormValues) => {
    const newContract = values;

    alert(JSON.stringify(newContract, null, 2));
};

export const ContractsProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([]);

    const formik = useFormik<ContractFormValues>({
        initialValues: contractInitialValues,
        validationSchema: contractValidationSchema,
        onSubmit: (values) => onSubmit(values),
    });

    return <ContractsContext.Provider value={{ products, setProducts, formik }}>{children}</ContractsContext.Provider>;
};
