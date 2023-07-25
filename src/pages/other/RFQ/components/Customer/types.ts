import { FormikProps } from 'formik';

export interface CustomerFormValues {
    name: string;
    domain: string;
    logo: File | null;
    address: string;
    city: string;
    country: string;
    state: string;
    zip?: number;
    numberOfEmployees?: number;
    founded?: number;
    website: string;
    duns?: number;
    taxId?: number;
    legalBusinessName: string;
    about: string;
}

export interface ContactFormValues {
    firstName: string;
    lastName: string;
    jobTitle: string;
    primaryPhoneNumber: string;
    emailAddress: string;
    password: string;
    confirmPassword: string;
}
