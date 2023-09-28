export type MeterFormValues = {
    utility: string;
    accountNumber?: number;
    meterNumber?: number;
    city?: string;
    state?: string;
    zip?: string;
    addressLine1?: string;
};

export type MeterPost = {
    AccountId: number;
    AccountNumber: string;
    AddressLine1: string;
    City: string;
    CompanyId: number;
    MeterNumber: string;
    PostalCode: string;
    StateID: string;
    UtilityID: string;
    UtilityName: string;
};
