import { apiFetch } from '../../../api';
import { ProcurementUnit } from '../contracts';

const getProcurementUnitByCommodityType = async (commodityTypeId: string) => {
    const data: ProcurementUnit[] = await apiFetch('GET', `ProcurementUnits/select/${commodityTypeId}`);
    if (!data) {
        throw new Error('Failed to fetch procurement unities');
    }
    const procurementUnities: ProcurementUnit[] = data;
    return procurementUnities;
};

// const getProcurementUnitByCommodityType = (commodityTypeId: string): Promise<ProcurementUnit[]> => {
//     const procurementUnities = {
//         '1': [
//             { id: '1', text: 'kWh' },
//             { id: '2', text: 'MWh' },
//             { id: '3', text: 'MW' },
//         ],
//         '2': [
//             { id: '4', text: 'thm' },
//             { id: '5', text: 'DTH' },
//             { id: '6', text: 'MMBTU' },
//             { id: '7', text: 'MCF' },
//         ],
//     };

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             switch (commodityTypeId) {
//                 case '1':
//                     resolve(procurementUnities['1']);
//                     break;
//                 case '2':
//                     resolve(procurementUnities['2']);
//                     break;
//                 default:
//                     reject(new Error('Invalid commodity type id'));
//             }
//         }, 1000);
//     });
// };

export const procurementUnitService = {
    getProcurementUnitByCommodityType,
};
