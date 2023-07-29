import { useEffect, useContext } from 'react';
import { CustomersContext } from '../contexts';
import { CustomerFormValues } from '../types';
import { FormikProps } from 'formik';

const fetchCustomers = (): Promise<CustomerFormValues[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    name: 'Acme Inc.',
                    domain: 'acme.com',
                    logo: 'https://logo.clearbit.com/enerex.com',
                    address: '123 Main Street',
                    city: 'New York',
                    country: 'US',
                    state: 'NY',
                    zip: 10001,
                    numberOfEmployees: 100,
                    founded: 2000,
                    website: 'https://acme.com',
                    duns: 123456789,
                    taxId: 987654321,
                    legalBusinessName: 'Acme Incorporated',
                    about: 'We make the best products in the world.',
                },
                {
                    name: 'Widget Co.',
                    domain: 'widget.co',
                    logo: 'https://logo.clearbit.com/enerex.com',
                    address: '456 High Street',
                    city: 'London',
                    country: 'GB',
                    state: '',
                    zip: 10001,
                    numberOfEmployees: 50,
                    founded: 2010,
                    website: 'https://widget.co',
                    duns: 123456789,
                    taxId: 987654321,
                    legalBusinessName: 'Widget Company Ltd.',
                    about: 'We make the most innovative widgets in the market.',
                },
            ]);
        }, 1000);
    });
};

const useCustomers = (): {
    customers: CustomerFormValues[];
    setCustomers: React.Dispatch<React.SetStateAction<CustomerFormValues[]>>;
    customerSelected: CustomerFormValues;
    setCustomerSelected: React.Dispatch<React.SetStateAction<CustomerFormValues>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: any;
    setError: React.Dispatch<React.SetStateAction<any>>;
    formik: FormikProps<CustomerFormValues>;
} => {
    const {
        customers,
        error,
        loading,
        setCustomers,
        setError,
        setLoading,
        customerSelected,
        setCustomerSelected,
        formik,
    } = useContext(CustomersContext);

    useEffect(() => {
        setLoading(true);
        setCustomers([]);
        setError(null);
        fetchCustomers()
            .then((data) => {
                setCustomers(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        formik.validateField('domain');
        if (!formik.errors.domain) {
            const logoUrl = `https://logo.clearbit.com/${formik.values.domain}`;
            fetch(logoUrl)
                .then((response) => {
                    if (response.ok) {
                        formik.setFieldValue('logo', logoUrl);
                    } else {
                        formik.setFieldValue('logo', '');
                    }
                })
                .catch(() => {
                    formik.setFieldValue('logo', '');
                });
        } else {
            formik.setFieldValue('logo', '');
        }
    }, [formik.values.domain]);

    return {
        customers,
        setCustomers,
        customerSelected,
        setCustomerSelected,
        loading,
        setLoading,
        error,
        setError,
        formik,
    };
};

export default useCustomers;
