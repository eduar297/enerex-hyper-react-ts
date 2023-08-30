export type CustomerFormValues = {
    Name: string;
    StateId?: string | null;
    CountryId?: string | null;
    Address?: string | null;
    City?: string | null;
    PostalCode?: string | null;
    LogoUrl?: string | null;
    Domain?: string | null;
    NumberOfEmployees?: number | null;
    Founded?: number | null;
    Website: string | null;
    About?: string | null;
    DUNS?: string | null;
    TaxID?: string | null;
    AccountLegalName?: string | null;
};

export type Customer = {
    StateName?: string | null;
    CountryName?: string | null;
    CompanyId?: number | null;
    EncryptedCustomerId?: string | null;
    MeterCount?: number | null;
    AwardedRFQsCount?: number | null;
    Logo?: string | null;
    Id?: number | null;
    EncryptedId?: string | null;
    ActionUserId?: number | null;
} & CustomerFormValues;

export type CustomerChoice = {
    id: string;
    text: string;
};

export type ContactChoice = {
    id: string;
    text: string;
};

export type ContactFormValues = {
    FirstName: string;
    LastName?: string | null;
    Email?: string | null;
    JobTitle?: string | null;
    Phone?: string | null;
};

export type Contact = {
    FullName?: string | null;
    Address?: string | null;
    City?: string | null;
    PostalCode?: string | null;
    Active?: boolean | null;
    StringPassword?: string | null;
    ContactAccountID?: string | null;
    EncryptedContactAccountID?: string | null;
    ContactAccountCompanyName?: string | null;
    HasTAndCAccepted?: boolean | null;
    HasEnable?: boolean | null;
    Id?: number | null;
    EncryptedId?: string | null;
    ActionUserId?: string | null;
} & ContactFormValues;
