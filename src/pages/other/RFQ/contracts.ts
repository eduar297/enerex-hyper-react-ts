import { ReactNode } from 'react';

export type Item = {
    id: string;
    header: string;
    content: (next: () => void, previous: () => void, index: number, len: number) => ReactNode;
};

export interface Country {
    name: string;
    id: string;
}

export interface State {
    name: string;
    id: string;
}

export interface CountryApi {
    text: string;
    id: string;
}

export interface StateApi {
    text: string;
    id: string;
}

export type Utility = {
    id: string;
    text: string;
};

export interface CurrentUserData {
    User: User;
    SupplierId: null;
    IsTokenValid: boolean;
    CanCreateAuction: boolean;
    IsAdmin: boolean;
    NeedsToAcceptTAndCs: boolean;
    EnableWholesale: boolean;
    UserBelongsToWholesaleSupplier: boolean;
    ShouldShowRfqMenu: boolean;
    Company: Company;
    IsBrokerInSupplierCompany: boolean;
}

export interface Company {
    Name: string;
    ShortName: string;
    BrokerageName: null;
    SupplierName: null;
    PlatformName: string;
    Subdomain: string;
    EmailDomain: string;
    FacebookUrl: string;
    TwitterUrl: string;
    LinkedInUrl: string;
    GooglePlusUrl: string;
    Logo: null;
    LoginPageLogo: null;
    BackgroundImage: null;
    DeletedDateTime: null;
    HasValidLicense: boolean;
    LoginTitle: string;
    LoginWelcomeText: string;
    CustomCss: string;
    EmailTemplateCss: null;
    QuoteExpirationTime: null;
    QuoteExpirationTimezone: null;
    QuoteExpirationTimezoneName: string;
    IsPartnerCompany: boolean;
    EmailHeaderTextColor: string;
    EnableWholesale: boolean;
    IsWholesaleSupplierCompany: boolean;
    InviteCustomerUsersByDefault: boolean;
    ShareCustomerInformationByDefault: boolean;
    StripeCustomerID: null;
    DocumentEncryptedId: null;
    BrokerCompanyEncryptedId: null;
    EncryptedCompanyBrokerId: null;
    MembershipType: number;
    MembershipTypeName: string;
    MembershipValidTime: null;
    IdleTimeout: number;
    AutoCompleteAuctionDays: number;
    AutoCompleteAuctionHours: null;
    AutoCompleteAuctionMinutes: null;
    CompanyBrokerId: null;
    AssignedPricingUsers: null;
    AllowOpenBidRfqsToBeRerun: boolean;
    UsersCount: number;
    AuctionsCount: number;
    AuctionBidsCount: number;
    HideBrokerFeeByDefault: boolean;
    IntegratedSystem: number;
    EffectiveBrokerageID: null;
    EffectiveSupplierID: null;
    RFQMonthlyLimit: null;
    RFQMonthlyCount: number;
    IsBPaaSEnabled: boolean;
    Id: number;
    EncryptedId: string;
    ActionUserId: number;
}

export interface User {
    FirstName: string;
    LastName: string;
    FullName: string;
    CompanyID: number;
    Email: string;
    BusinessPhone: string;
    MobilePhone: string;
    StringPassword: null;
    RolesAsString: string;
    DeletedDateTime: null;
    Roles: number[];
    CompanyName: string;
    EncryptedCompanyId: string;
    EncryptedIdFromClient: null;
    PartnerSelectText: string;
    BrokerSelectText: string;
    Bio: string;
    Picture: null;
    WebPushNotificationsChannel: string;
    SubscribedNotifications: null;
    Company: null;
    BrokerConnections: number;
    RFQsInvitations: number;
    RFQsParticipated: number;
    QuotesSubmitted: number;
    Awards: number;
    Confirms: number;
    AverageInviteToQuote: null;
    LastLoginDateTime: null;
    MaskedEmail: string;
    AssociatedREPId: null;
    IsPartnersCompany: boolean;
    HasTAndCAccepted: boolean;
    IsAlreadyForbidden: boolean;
    BrokerageId: null;
    SupplierId: null;
    IsCustomer: boolean;
    Id: number;
    EncryptedId: string;
    ActionUserId: number;
}
