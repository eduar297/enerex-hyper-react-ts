import { createContext, useState, ReactNode } from 'react';
import { Contact, ContactChoice, ContactFormValues } from '../contracts';
import { FormikProps, useFormik } from 'formik';
import { contactValidationSchema } from '../schema';

const contactInitialValues: ContactFormValues = {
    Email: '',
    FirstName: '',
    LastName: '',
    JobTitle: '',
    Phone: '',
};

type ContactsState = {
    contactsChoice: ContactChoice[];
    setContactsChoice: React.Dispatch<React.SetStateAction<ContactChoice[]>>;

    contactChoiceSelected: ContactChoice | null;
    setContactChoiceSelected: React.Dispatch<React.SetStateAction<ContactChoice | null>>;

    contactSelected: Contact | null;
    setContactSelected: React.Dispatch<React.SetStateAction<Contact | null>>;

    loadingContactsChoice: boolean;
    setLoadingContactsChoice: React.Dispatch<React.SetStateAction<boolean>>;

    loadingContactSelected: boolean;
    setLoadingContactSelected: React.Dispatch<React.SetStateAction<boolean>>;

    errorContactsChoice: any;
    setErrorContactsChoice: React.Dispatch<React.SetStateAction<any>>;

    errorContactSelected: any;
    setErrorContactSelected: React.Dispatch<React.SetStateAction<any>>;

    formik: FormikProps<ContactFormValues>;
};

export const ContactsContext = createContext<ContactsState>({
    contactsChoice: [],
    setContactsChoice: () => {},

    contactChoiceSelected: {} as ContactChoice,
    setContactChoiceSelected: () => {},

    contactSelected: {} as Contact,
    setContactSelected: () => {},

    loadingContactsChoice: false,
    setLoadingContactsChoice: () => {},

    loadingContactSelected: false,
    setLoadingContactSelected: () => {},

    errorContactsChoice: null,
    setErrorContactsChoice: () => {},

    errorContactSelected: null,
    setErrorContactSelected: () => {},

    formik: {} as FormikProps<ContactFormValues>,
});

const onSubmit = (
    values: ContactFormValues,
    setContactSelected: React.Dispatch<React.SetStateAction<Contact | null>>,
    setContacts: React.Dispatch<React.SetStateAction<Contact[]>>,
    contacts: Contact[],
    resetForm: () => void
) => {
    const newContact: Contact = { ...values };
    setContacts([...contacts, newContact]);
    setContactSelected(newContact);
    alert(JSON.stringify(newContact, null, 2));

    resetForm();
};

export const ContactsProvider = ({ children }: { children: ReactNode }) => {
    const [contactsChoice, setContactsChoice] = useState<ContactChoice[]>([]);
    const [contactChoiceSelected, setContactChoiceSelected] = useState<ContactChoice | null>(null);
    const [contactSelected, setContactSelected] = useState<Contact | null>(null);
    const [loadingContactsChoice, setLoadingContactsChoice] = useState(false);
    const [loadingContactSelected, setLoadingContactSelected] = useState(false);
    const [errorContactsChoice, setErrorContactsChoice] = useState(null);
    const [errorContactSelected, setErrorContactSelected] = useState(null);

    const formik = useFormik<ContactFormValues>({
        initialValues: contactInitialValues,
        validationSchema: contactValidationSchema,
        onSubmit: (values, formikBag) =>
            // onSubmit(values, setContactSelected, setContacts, contacts, formikBag.resetForm),
            console.log(values),
    });

    return (
        <ContactsContext.Provider
            value={{
                contactsChoice,
                setContactsChoice,

                contactChoiceSelected,
                setContactChoiceSelected,

                contactSelected,
                setContactSelected,

                loadingContactsChoice,
                setLoadingContactsChoice,

                loadingContactSelected,
                setLoadingContactSelected,

                errorContactsChoice,
                setErrorContactsChoice,

                errorContactSelected,
                setErrorContactSelected,

                formik,
            }}>
            {children}
        </ContactsContext.Provider>
    );
};
