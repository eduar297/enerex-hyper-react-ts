import { useEffect, useContext } from 'react';
import { CustomersContext } from '../contexts';
import { Customer, CustomerFormValues, CustomerChoice } from '../contracts';
import { FormikProps } from 'formik';
import { customerService } from '../services';

const useCustomers = (): {
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
} => {
    const {
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
    } = useContext(CustomersContext);

    useEffect(() => {
        setLoadingCustomersChoice(true);
        setCustomersChoice([]);
        setErrorCustomersChoice(null);
        customerService
            .getAllCustomersSelect()
            .then((data) => {
                setCustomersChoice(data);
                setLoadingCustomersChoice(false);
            })
            .catch((err) => {
                setErrorCustomersChoice(err);
                setLoadingCustomersChoice(false);
            });
    }, [setCustomersChoice, setErrorCustomersChoice, setLoadingCustomersChoice]);

    useEffect(() => {
        setLoadingCustomerSelected(true);
        setCustomerSelected(null);
        setErrorCustomerSelected(null);

        customerChoiceSelected?.id &&
            customerService
                .getCustomer(customerChoiceSelected?.id || '')
                .then((data) => {
                    setCustomerSelected(data);
                    setLoadingCustomerSelected(false);
                })
                .catch((err:any) => {
                    setErrorCustomerSelected(err);
                    setLoadingCustomerSelected(false);
                });
    }, [customerChoiceSelected, setCustomerSelected, setErrorCustomerSelected, setLoadingCustomerSelected]);

    useEffect(() => {
        formik.validateField('Domain');
        if (!formik.errors.Domain) {
            const logoUrl = `https://logo.clearbit.com/${formik.values.Domain}`;
            fetch(logoUrl)
                .then((response) => {
                    if (response.ok) {
                        formik.setFieldValue('LogoUrl', logoUrl);
                    } else {
                        formik.setFieldValue('LogoUrl', '');
                    }
                })
                .catch(() => {
                    formik.setFieldValue('LogoUrl', '');
                });
        } else {
            formik.setFieldValue('LogoUrl', '');
        }
    }, [formik.values.Domain]);

    return {
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
    };
};

export default useCustomers;
