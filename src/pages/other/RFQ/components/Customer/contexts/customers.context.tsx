import { createContext, useState, ReactNode } from 'react';
import { CustomerFormValues } from '../types';
import { FormikProps, useFormik } from 'formik';
import { customerValidationSchema } from '../schema';

const customerInitialValues: CustomerFormValues = {
    name: '',
    domain: '',
    logo: null,
    address: '',
    city: '',
    country: '',
    state: '',
    zip: undefined,
    numberOfEmployees: undefined,
    founded: undefined,
    website: '',
    duns: undefined,
    taxId: undefined,
    legalBusinessName: '',
    about: '',
};

type CustomersState = {
    customers: CustomerFormValues[];
    setCustomers: React.Dispatch<React.SetStateAction<CustomerFormValues[]>>;
    customerSelected: CustomerFormValues;
    setCustomerSelected: React.Dispatch<React.SetStateAction<CustomerFormValues>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: any;
    setError: React.Dispatch<React.SetStateAction<any>>;
    formik: FormikProps<CustomerFormValues>;
};

export const CustomersContext = createContext<CustomersState>({
    customers: [],
    setCustomers: () => {},
    customerSelected: {} as CustomerFormValues,
    setCustomerSelected: () => {},
    loading: false,
    setLoading: () => {},
    error: null,
    setError: () => {},
    formik: {} as FormikProps<CustomerFormValues>,
});

const onSubmit = (
    values: CustomerFormValues,
    setCustomerSelected: React.Dispatch<React.SetStateAction<CustomerFormValues>>,
    setCustomers: React.Dispatch<React.SetStateAction<CustomerFormValues[]>>,
    customers: CustomerFormValues[]
) => {
    const newCustomer = values;
    setCustomers([...customers, newCustomer]);
    setCustomerSelected(newCustomer);
    alert(JSON.stringify(newCustomer, null, 2));
};

export const CustomersProvider = ({ children }: { children: ReactNode }) => {
    const [customers, setCustomers] = useState<CustomerFormValues[]>([]);
    const [customerSelected, setCustomerSelected] = useState<CustomerFormValues>({} as CustomerFormValues);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const formik = useFormik<CustomerFormValues>({
        initialValues: customerInitialValues,
        validationSchema: customerValidationSchema,
        onSubmit: (values) => onSubmit(values, setCustomerSelected, setCustomers, customers),
    });

    return (
        <CustomersContext.Provider
            value={{
                customers,
                setCustomers,
                customerSelected,
                setCustomerSelected,
                loading,
                setLoading,
                error,
                setError,
                formik,
            }}>
            {children}
        </CustomersContext.Provider>
    );
};
