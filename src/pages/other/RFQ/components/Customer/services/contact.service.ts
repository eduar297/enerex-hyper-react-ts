import { apiFetch } from '../../../api';
import { Contact, ContactChoice } from '../contracts';

const getAllContactsSelectByCustomerId = async (customerId: string) => {
    if (!customerId) {
        throw new Error('CustomerId is required');
    } else {
        const data: ContactChoice[] = await apiFetch('GET', `Contacts/select/${customerId}`);
        if (!data) {
            throw new Error('Failed to fetch contacts');
        }
        const contacts: ContactChoice[] = data;
        return contacts;
    }
};

const getContact = async (contactId: string) => {
    if (!contactId) {
        throw new Error('ContactId is required');
    } else {
        const data: Contact = await apiFetch('GET', `contacts/getById/${contactId}`);
        if (!data) {
            throw new Error('Failed to fetch contact');
        }
        const contact: Contact = data;
        return contact;
    }
};

const createContact = async (contact: Contact) => {
    if (!contact) {
        throw new Error('Contact is required');
    } else {
        const data: Contact = await apiFetch('POST', `contacts`, contact);
        if (!data) {
            throw new Error('Failed to create contact');
        }
        const createdContact: Contact = data;
        return createdContact;
    }
};

export const contactService = {
    getAllContactsSelectByCustomerId,
    getContact,
    createContact,
};
