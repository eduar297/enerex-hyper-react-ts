import { apiFetch } from '../../../api';
import { Customer, CustomerChoice } from '../contracts';

const getAllCustomersSelect = async () => {
    const data: CustomerChoice[] = await apiFetch('GET', 'Accounts/select');
    if (!data) {
        throw new Error('Failed to fetch customers');
    }
    const customers: CustomerChoice[] = data;
    return customers;
};

const getCustomer = async (customerId: string) => {
    if (!customerId) {
        throw new Error('CustomerId is required');
    } else {
        const data: Customer = await apiFetch('GET', `account/${customerId}`);
        if (!data) {
            throw new Error('Failed to fetch customer');
        }
        const customer: Customer = data;
        return customer;
    }
};

const createCustomer = async (customer: Customer) => {
    if (!customer) {
        throw new Error('Customer is required');
    } else {
        const data: Customer = await apiFetch('POST', `account`, customer);
        if (!data) {
            throw new Error('Failed to create customer');
        }
        const createdCustomer: Customer = data;
        return createdCustomer;
    }
};

const getLogo = async (domain: string) => {
    const logoUrl = `https://logo.clearbit.com/${domain}`;
    return fetch(logoUrl).then((response) => {
        if (response.ok) {
            return logoUrl;
        } else {
            throw new Error('Failed to get logo');
        }
    });
};

export const customerService = {
    getAllCustomersSelect,
    getCustomer,
    createCustomer,
    getLogo,
};
