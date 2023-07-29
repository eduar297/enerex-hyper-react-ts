export type ContractFormValues = {
    startDate?: Date | null;
    commodityType: string;
    country: string;
    state: string;
    minimumBandwidth?: number;
    deliveryPoint: string;
    annualProcurementAmount: string;
    procurementUnit: string;
    fee?: number;
    renewableContentRequirement?: number;
    term?: string;
    // product
    productType?: string;
    productTypeDescription?: string;
    multiplier?: number;
    adder?: number;
    onPeak?: number;
    offPeak?: number;
    paymentTerm?: number;
    billType?: string;
};

export type Product = {
    type: string;
    description?: string;
    multiplier?: number;
    adder?: number;
    onPeak?: number;
    offPeak?: number;
};
