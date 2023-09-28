import { createContext, useState, ReactNode } from 'react';
import { Contact, ContactChoice, ContactFormValues } from '../contracts';
import { FormikProps, useFormik } from 'formik';
import { contactValidationSchema } from '../schema';
import { contactService } from '../services';
import useCustomers from '../hooks/useCustomers.hook';

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

const onSubmit = async (
    values: ContactFormValues,
    setContactSelected: React.Dispatch<React.SetStateAction<Contact | null>>,
    setContactsChoice: React.Dispatch<React.SetStateAction<ContactChoice[]>>,
    contactsChoice: ContactChoice[],
    resetForm: () => void,
    customerId: string
) => {
    const newContact = await contactService.createContact(values, customerId);
    setContactsChoice([...contactsChoice, { id: newContact.Id + '', text: newContact.FullName + '' }]);
    setContactSelected(newContact);
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

    const { customerChoiceSelected } = useCustomers();

    const formik = useFormik<ContactFormValues>({
        initialValues: contactInitialValues,
        validationSchema: contactValidationSchema,
        onSubmit: (values, formikBag) =>
            onSubmit(
                values,
                setContactSelected,
                setContactsChoice,
                contactsChoice,
                formikBag.resetForm,
                customerChoiceSelected?.id ?? ''
            ),
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
