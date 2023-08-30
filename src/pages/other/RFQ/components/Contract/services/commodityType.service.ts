import { apiFetch } from 'pages/other/RFQ/api';
import { CommodityType } from '../types';

// const getAllCommoditiesType = async () => {
//     const data: CommodityType[] = await apiFetch('GET', 'CommoditiesType/select');
//     if (!data) {
//         throw new Error('Failed to fetch countries');
//     }
//     const commoditiesType: CommodityType[] = data;
//     return commoditiesType;
// };

const getAllCommoditiesType = (): Promise<CommodityType[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: '1',
                    text: 'Electricity',
                },
                {
                    id: '2',
                    text: 'Gas',
                },
            ]);
        }, 1000);
    });
};

export const CommodityTypeService = {
    getAllCommoditiesType,
};
