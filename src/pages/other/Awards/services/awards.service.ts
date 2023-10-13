import { Award } from '../contracts';

const getAwards = async () => {
    const awards: Award[] = [
        {
            id: '1',
            Marketplace: 'Marketplace 1',
            RFQNo: 1,
            Customer: 'Customer 1',
            Start: new Date(),
            Term: 'Term 1',
            ProductType: 'ProductType 1',
            AnnualUsage: 1,
            TermUsage: 'TermUsage 1',
            BrokerFee: 'BrokerFee 1',
            Quote: 'Quote 1',
            status: 'pending',
        },
        {
            id: '2',
            Marketplace: 'Marketplace 2',
            RFQNo: 2,
            Customer: 'Customer 2',
            Start: new Date(),
            Term: 'Term 2',
            ProductType: 'ProductType 2',
            AnnualUsage: 2,
            TermUsage: 'TermUsage 2',
            BrokerFee: 'BrokerFee 2',
            Quote: 'Quote 2',
            status: 'confirmed',
        },
        {
            id: '3',
            Marketplace: 'Marketplace 3',
            RFQNo: 3,
            Customer: 'Customer 3',
            Start: new Date(),
            Term: 'Term 3',
            ProductType: 'ProductType 3',
            AnnualUsage: 3,
            TermUsage: 'TermUsage 3',
            BrokerFee: 'BrokerFee 3',
            Quote: 'Quote 3',
            status: 'pending',
        },
        {
            id: '4',
            Marketplace: 'Marketplace 4',
            RFQNo: 4,
            Customer: 'Customer 4',
            Start: new Date(),
            Term: 'Term 4',
            ProductType: 'ProductType 4',
            AnnualUsage: 4,
            TermUsage: 'TermUsage 4',
            BrokerFee: 'BrokerFee 4',
            Quote: 'Quote 4',
            status: 'confirmed',
        },
    ];

    return awards;
};

export const AwardsService = {
    getAwards,
};
