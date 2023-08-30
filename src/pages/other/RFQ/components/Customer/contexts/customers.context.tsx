import { createContext, useState, ReactNode } from 'react';
import { Customer, CustomerChoice, CustomerFormValues } from '../contracts';
import { FormikProps, useFormik } from 'formik';
import { customerValidationSchema } from '../schema';

const customerInitialValues: CustomerFormValues = {
    Name: '',
    StateId: '1',
    CountryId: '1',
    Address: '',
    City: '',
    PostalCode: '',
    LogoUrl: '',
    Domain: '',
    NumberOfEmployees: 0,
    Founded: 0,
    Website: '',
    About: '',
    DUNS: '',
    TaxID: '',
    AccountLegalName: '',
};

type CustomersState = {
    customersChoice: CustomerChoice[];
    setCustomersChoice: React.Dispatch<React.SetStateAction<CustomerChoice[]>>;

    customerChoiceSelected: CustomerChoice | null;
    setCustomerChoiceSelected: React.Dispatch<React.SetStateAction<CustomerChoice | null>>;

    customerSelected: Customer | null;
    setCustomerSelected: React.Dispatch<React.SetStateAction<Customer | null>>;

    loadingCustomersChoice: boolean;
    setLoadingCustomersChoice: React.Dispatch<React.SetStateAction<boolean>>;

    loadingCustomerSelected: boolean;
    setLoadingCustomerSelected: React.Dispatch<React.SetStateAction<boolean>>;

    errorCustomersChoice: any;
    setErrorCustomersChoice: React.Dispatch<React.SetStateAction<any>>;

    errorCustomerSelected: any;
    setErrorCustomerSelected: React.Dispatch<React.SetStateAction<any>>;

    formik: FormikProps<CustomerFormValues>;
};

export const CustomersContext = createContext<CustomersState>({
    customersChoice: [],
    setCustomersChoice: () => {},

    customerChoiceSelected: {} as CustomerChoice,
    setCustomerChoiceSelected: () => {},

    customerSelected: {} as Customer,
    setCustomerSelected: () => {},

    loadingCustomersChoice: false,
    setLoadingCustomersChoice: () => {},

    loadingCustomerSelected: false,
    setLoadingCustomerSelected: () => {},

    errorCustomersChoice: null,
    setErrorCustomersChoice: () => {},

    errorCustomerSelected: null,
    setErrorCustomerSelected: () => {},

    formik: {} as FormikProps<CustomerFormValues>,
});

const onSubmit = (
    values: CustomerFormValues,
    setCustomerSelected: React.Dispatch<React.SetStateAction<Customer | null>>,
    setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>,
    customers: Customer[],
    resetForm: () => void
) => {
    const newCustomer: Customer = { ...values };
    setCustomers([...customers, newCustomer]);
    setCustomerSelected(newCustomer);
    alert(JSON.stringify(newCustomer, null, 2));

    resetForm();
};

export const CustomersProvider = ({ children }: { children: ReactNode }) => {
    const [customersChoice, setCustomersChoice] = useState<CustomerChoice[]>([]);
    const [customerChoiceSelected, setCustomerChoiceSelected] = useState<CustomerChoice | null>(null);
    const [customerSelected, setCustomerSelected] = useState<Customer | null>(null);
    const [loadingCustomersChoice, setLoadingCustomersChoice] = useState(false);
    const [loadingCustomerSelected, setLoadingCustomerSelected] = useState(false);
    const [errorCustomersChoice, setErrorCustomersChoice] = useState(null);
    const [errorCustomerSelected, setErrorCustomerSelected] = useState(null);

    const formik = useFormik<CustomerFormValues>({
        initialValues: customerInitialValues,
        validationSchema: customerValidationSchema,
        onSubmit: (values, formikBag) =>
            // onSubmit(values, setCustomerSelected, setCustomers, customers, formikBag.resetForm),
            console.log(values),
    });

    return (
        <CustomersContext.Provider
            value={{
                customersChoice,
                setCustomersChoice,

                customerChoiceSelected,
                setCustomerChoiceSelected,

                customerSelected,
                setCustomerSelected,

                loadingCustomersChoice,
                setLoadingCustomersChoice,

                loadingCustomerSelected,
                setLoadingCustomerSelected,

                errorCustomersChoice,
                setErrorCustomersChoice,

                errorCustomerSelected,
                setErrorCustomerSelected,

                formik,
            }}>
            {children}
        </CustomersContext.Provider>
    );
};
