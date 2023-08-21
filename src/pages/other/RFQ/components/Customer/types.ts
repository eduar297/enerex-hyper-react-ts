export type CustomerFormValues = {
    name: string;
    domain: string;
    logo?: string;
    address: string;
    city: string;
    country: string;
    state: string;
    zip?: string;
    numberOfEmployees?: number;
    founded?: number;
    website: string;
    duns?: number;
    taxId?: number;
    legalBusinessName: string;
    about?: string;
};

export type ContactFormValues = {
    firstName: string;
    lastName: string;
    emailAddress: string;
    jobTitle?: string;
    primaryPhoneNumber?: string;
    // password?: string;
    // confirmPassword?: string;
};
