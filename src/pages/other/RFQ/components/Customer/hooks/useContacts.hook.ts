import { useEffect, useContext } from 'react';
import { ContactsContext } from '../contexts';
import { ContactFormValues } from '../types';
import { FormikProps } from 'formik';

const fetchContacts = (): Promise<ContactFormValues[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    firstName: 'Eduardo',
                    lastName: 'Moreira',
                    jobTitle: 'software developer',
                    primaryPhoneNumber: '058286995',
                    emailAddress: 'eduar2.moreira@gmail.com',
                    // password: 'NeKjp4Ah',
                    // confirmPassword: 'NeKjp4Ah',
                },
                {
                    firstName: 'Test',
                    lastName: 'Test',
                    jobTitle: 'software developer',
                    primaryPhoneNumber: '111111111',
                    emailAddress: 'test.test@gmail.com',
                    // password: 'test',
                    // confirmPassword: 'tests',
                },
            ]);
        }, 1000);
    });
};

const useContacts = (): {
    contacts: ContactFormValues[];
    setContacts: React.Dispatch<React.SetStateAction<ContactFormValues[]>>;
    contactSelected: ContactFormValues | null;
    setContactSelected: React.Dispatch<React.SetStateAction<ContactFormValues | null>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: any;
    setError: React.Dispatch<React.SetStateAction<any>>;
    formik: FormikProps<ContactFormValues>;
} => {
    const { contacts, error, loading, setContacts, setError, setLoading, contactSelected, setContactSelected, formik } =
        useContext(ContactsContext);

    useEffect(() => {
        setLoading(true);
        setContacts([]);
        setError(null);
        fetchContacts()
            .then((data) => {
                setContacts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return {
        contacts,
        setContacts,
        contactSelected,
        setContactSelected,
        loading,
        setLoading,
        error,
        setError,
        formik,
    };
};

export default useContacts;
