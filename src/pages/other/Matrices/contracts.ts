export type Matrix = {
    id: string;
    Commodity: string;
    SupplierName: number;
    StateName: string;
    LDCNAME: string;
    CustomerType: string;
    Zone: string;
    LoadZone: number;
    LoadFactorFrom: string;
    LoadFactorUpTo: string;
    DemandRangeFrom: string;
    DemandRangeUpTo: string;
    Congestion: string;
    GRT: string;
};

export type RenderMatriz = {
    id: string;
    commodity: string;
    supplierName: number;
    stateName: string;
    lDCNAME: string;
    customerType: string;
    zone: string;
    loadZone: number;
    loadFactorFrom: string;
    loadFactorUpTo: string;
    demandRangeFrom: string;
    demandRangeUpTo: string;
    congestion: string;
    gRT: string;
};
