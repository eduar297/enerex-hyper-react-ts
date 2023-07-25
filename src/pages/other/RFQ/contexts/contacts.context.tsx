import { createContext, useState, ReactNode } from 'react';
import { ContactFormValues } from '../components/Customer/types';
import { FormikProps, useFormik } from 'formik';
import { contactValidationSchema } from '../components/Customer/schema';

const contactInitialValues: ContactFormValues = {
    firstName: '',
    lastName: '',
    jobTitle: '',
    primaryPhoneNumber: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
};

type ContactsState = {
    contacts: ContactFormValues[];
    setContacts: React.Dispatch<React.SetStateAction<ContactFormValues[]>>;
    contactSelected: ContactFormValues[];
    setContactSelected: React.Dispatch<React.SetStateAction<ContactFormValues[]>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: any;
    setError: React.Dispatch<React.SetStateAction<any>>;
    formik: FormikProps<ContactFormValues>;
};

export const ContactsContext = createContext<ContactsState>({
    contacts: [],
    setContacts: () => {},
    contactSelected: [],
    setContactSelected: () => {},
    loading: false,
    setLoading: () => {},
    error: null,
    setError: () => {},
    formik: {} as FormikProps<ContactFormValues>,
});

const onSubmit = (
    values: ContactFormValues,
    setContactSelected: React.Dispatch<React.SetStateAction<ContactFormValues[]>>,
    setContacts: React.Dispatch<React.SetStateAction<ContactFormValues[]>>,
    contacts: ContactFormValues[]
) => {
    const newContact = values;
    setContacts([...contacts, newContact]);
    setContactSelected([newContact]);
    alert(JSON.stringify(values, null, 2));
};

export const ContactsProvider = ({ children }: { children: ReactNode }) => {
    const [contacts, setContacts] = useState<ContactFormValues[]>([]);
    const [contactSelected, setContactSelected] = useState<ContactFormValues[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const formik = useFormik<ContactFormValues>({
        initialValues: contactInitialValues,
        validationSchema: contactValidationSchema,
        onSubmit: (values) => onSubmit(values, setContactSelected, setContacts, contacts),
    });

    return (
        <ContactsContext.Provider
            value={{
                contacts,
                setContacts,
                contactSelected,
                setContactSelected,
                loading,
                setLoading,
                error,
                setError,
                formik,
            }}>
            {children}
        </ContactsContext.Provider>
    );
};
