import { createContext, ReactNode, useState } from 'react';
import { ContractFormValues, Product } from '../types';
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
    procurementUnit: '',
    fee: 0,
    renewableContentRequirement: 0,
    term: '',
    productType: '',
    productTypeDescription: '',
    adder: 0,
    multiplier: 0,
    offPeak: 0,
    onPeak: 0,
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
