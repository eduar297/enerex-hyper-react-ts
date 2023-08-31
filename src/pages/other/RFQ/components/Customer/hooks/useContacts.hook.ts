import { useEffect, useContext } from 'react';
import { ContactsContext } from '../contexts';
import { Contact, ContactFormValues, ContactChoice } from '../contracts';
import { FormikProps } from 'formik';
import { contactService } from '../services';

const useContacts = (
    customerId: string
): {
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
} => {
    const {
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
    } = useContext(ContactsContext);

    useEffect(() => {
        setLoadingContactsChoice(true);
        setContactsChoice([]);
        setErrorContactsChoice(null);
        contactService
            .getAllContactsSelectByCustomerId(customerId)
            .then((data) => {
                setContactsChoice(data);
                setLoadingContactsChoice(false);
            })
            .catch((err) => {
                setErrorContactsChoice(err);
                setLoadingContactsChoice(false);
            });
    }, [customerId, setContactsChoice, setErrorContactsChoice, setLoadingContactsChoice]);

    useEffect(() => {
        setLoadingContactSelected(true);
        setContactSelected(null);
        setErrorContactSelected(null);

        contactChoiceSelected?.id &&
            contactService
                .getContact(contactChoiceSelected?.id || '')
                .then((data) => {
                    setContactSelected(data);
                    setLoadingContactSelected(false);
                })
                .catch((err: any) => {
                    setErrorContactSelected(err);
                    setLoadingContactSelected(false);
                });
    }, [contactChoiceSelected, setContactSelected, setErrorContactSelected, setLoadingContactSelected]);

    return {
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
    };
};

export default useContacts;
