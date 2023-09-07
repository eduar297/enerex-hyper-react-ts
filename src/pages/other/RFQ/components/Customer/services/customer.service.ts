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

export const customerService = {
    getAllCustomersSelect,
    getCustomer,
};
