import { apiFetch } from '../../../api';
import { CommodityType } from '../contracts';

const getAllCommoditiesType = async () => {
    const data: CommodityType[] = await apiFetch('GET', 'commoditytypes/select/false');
    if (!data) {
        throw new Error('Failed to fetch commodities type');
    }
    const commoditiesType: CommodityType[] = data;
    return commoditiesType;
};

// const getAllCommoditiesType = (): Promise<CommodityType[]> => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([
//                 {
//                     id: '1',
//                     text: 'Electricity',
//                 },
//                 {
//                     id: '2',
//                     text: 'Gas',
//                 },
//             ]);
//         }, 1000);
//     });
// };

export const CommodityTypeService = {
    getAllCommoditiesType,
};
