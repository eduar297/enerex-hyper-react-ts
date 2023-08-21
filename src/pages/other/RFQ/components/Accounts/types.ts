export type MeterFormValues = {
    utility: string;
    accountNumber?: number;
    meterNumber?: number;
    city?: string;
    state?: string;
    zip?: string;
    addressLine1?: string;
};

export type Utility = {
    id: string;
    text: string;
};
