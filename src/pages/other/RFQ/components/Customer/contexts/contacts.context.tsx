import { createContext, useState, ReactNode } from 'react';
import { ContactFormValues } from '../types';
import { FormikProps, useFormik } from 'formik';
import { contactValidationSchema } from '../schema';

const contactInitialValues: ContactFormValues = {
    firstName: '',
    lastName: '',
    jobTitle: '',
    primaryPhoneNumber: '',
    emailAddress: '',
    // password: '',
    // confirmPassword: '',
};

type ContactsState = {
    contacts: ContactFormValues[];
    setContacts: React.Dispatch<React.SetStateAction<ContactFormValues[]>>;
    contactSelected: ContactFormValues | null;
    setContactSelected: React.Dispatch<React.SetStateAction<ContactFormValues | null>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: any;
    setError: React.Dispatch<React.SetStateAction<any>>;
    formik: FormikProps<ContactFormValues>;
};

export const ContactsContext = createContext<ContactsState>({
    contacts: [],
    setContacts: () => {},
    contactSelected: {} as ContactFormValues,
    setContactSelected: () => {},
    loading: false,
    setLoading: () => {},
    error: null,
    setError: () => {},
    formik: {} as FormikProps<ContactFormValues>,
});

const onSubmit = (
    values: ContactFormValues,
    setContactSelected: React.Dispatch<React.SetStateAction<ContactFormValues | null>>,
    setContacts: React.Dispatch<React.SetStateAction<ContactFormValues[]>>,
    contacts: ContactFormValues[],
    resetForm: () => void
) => {
    const newContact = values;
    setContacts([...contacts, newContact]);
    setContactSelected(newContact);
    alert(JSON.stringify(newContact, null, 2));

    resetForm();
};

export const ContactsProvider = ({ children }: { children: ReactNode }) => {
    const [contacts, setContacts] = useState<ContactFormValues[]>([]);
    const [contactSelected, setContactSelected] = useState<ContactFormValues | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const formik = useFormik<ContactFormValues>({
        initialValues: contactInitialValues,
        validationSchema: contactValidationSchema,
        onSubmit: (values, formikBag) =>
            onSubmit(values, setContactSelected, setContacts, contacts, formikBag.resetForm),
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
