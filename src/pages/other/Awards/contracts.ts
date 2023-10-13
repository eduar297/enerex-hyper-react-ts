export type Award = {
    id: string;
    Marketplace: string;
    RFQNo: number;
    Customer: string;
    Start: Date;
    Term: string;
    ProductType: string;
    AnnualUsage: number;
    TermUsage: string;
    BrokerFee: string;
    Quote: string;
    status: 'pending' | 'confirmed';
};

export type RenderAward = {
    id: string;
    marketplace: string;
    rfqNo: number;
    customer: string;
    start: string;
    productType: string;
    annualUsage: number;
    termUsage: string;
    brokerFee: string;
    quote: string;
};
