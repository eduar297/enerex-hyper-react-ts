import { apiFetch } from 'pages/other/RFQ/api';
import { Customer, CustomerChoice } from '../contracts';

// const getAllCustomersSelect = async () => {
//     const data: CustomerChoice[] = await apiFetch('GET', 'Accounts/select');
//     if (!data) {
//         throw new Error('Failed to fetch customers');
//     }
//     const customers: CustomerChoice[] = data;
//     return customers;
// };

// const getCustomer = async (customerId: string) => {
//     const data: Customer = await apiFetch('GET', `account/${customerId}`);
//     if (!data) {
//         throw new Error('Failed to fetch customer');
//     }
//     const customer: Customer = data;
//     return customer;
// };

const getCustomer = (customerId: string): Promise<Customer> => {
    const customers: Record<string, Customer> = {
        coIxYoZdS4PalyfgnYYjuSzZT18EZYslJ4s9WfQYfapVbfljanJ_Pw2DtOKrAhu2L54fpQL70GEGWyf80iUFudK0gDqvKb8nIbxJi6c2lyc1: {
            Name: 'Test',
            CompanyId: 277,
            StateId: '121',
            CountryId: '2',
            StateName: 'Bedfordshire',
            CountryName: 'United Kingdom',
            Address: 'test',
            City: 'Test',
            PostalCode: '33101',
            LogoUrl:
                'https://el.local.com//api/account/ehKozvvkNGZDHtvsDl3fQzJ35YUW4x4iqSkXrRVhahhRvUnApaQMVf4DW9htEdC_X5WWHPCTsk3skirX7yFuL0iTdFvCNt-HuHCez2tvsrE1/Logo.png',
            Domain: '',
            NumberOfEmployees: null,
            Founded: null,
            Website: '',
            About: '',
            DUNS: '',
            TaxID: '',
            EncryptedCustomerId:
                'coIxYoZdS4PalyfgnYYjuSzZT18EZYslJ4s9WfQYfapVbfljanJ_Pw2DtOKrAhu2L54fpQL70GEGWyf80iUFudK0gDqvKb8nIbxJi6c2lyc1',
            AccountLegalName: 'test LBN',
            MeterCount: 0,
            AwardedRFQsCount: 0,
            Logo: null,
            Id: 3867,
            EncryptedId:
                'ehKozvvkNGZDHtvsDl3fQzJ35YUW4x4iqSkXrRVhahhRvUnApaQMVf4DW9htEdC_X5WWHPCTsk3skirX7yFuL0iTdFvCNt-HuHCez2tvsrE1',
            ActionUserId: 0,
        },
        'n-fDjK2RiUYwGLklZdVXLEHuqIIGzxX4QzKu378NTkL3PovBhVvBkXQr2mWUS-glShs3MB9mY2zoP3glzEKHFG-vjpVIrv1RV8rMSHkkkSo1':
            {
                Name: 'test1',
                CompanyId: 277,
                StateId: '1',
                CountryId: '1',
                StateName: 'Alabama',
                CountryName: 'USA',
                Address: 'test',
                City: 'Test',
                PostalCode: '33101',
                LogoUrl:
                    'https://el.local.com//api/account/iWbIPXgtuWW60gyCSnQCiRt4dnid0Me7JjDXivTuoLYrdpdKXLVjugT0G5CWS-HWsLAWP8Qv3CfFLLZiE8hVJNhplfvazJfcQ-pwSQNIKgc1/Logo.png',
                Domain: '',
                NumberOfEmployees: null,
                Founded: null,
                Website: '',
                About: '',
                DUNS: '',
                TaxID: '',
                EncryptedCustomerId:
                    'n-fDjK2RiUYwGLklZdVXLEHuqIIGzxX4QzKu378NTkL3PovBhVvBkXQr2mWUS-glShs3MB9mY2zoP3glzEKHFG-vjpVIrv1RV8rMSHkkkSo1',
                AccountLegalName: 'test1 lbn',
                MeterCount: 0,
                AwardedRFQsCount: 0,
                Logo: null,
                Id: 3868,
                EncryptedId:
                    'iWbIPXgtuWW60gyCSnQCiRt4dnid0Me7JjDXivTuoLYrdpdKXLVjugT0G5CWS-HWsLAWP8Qv3CfFLLZiE8hVJNhplfvazJfcQ-pwSQNIKgc1',
                ActionUserId: 0,
            },
        RdbL5zNn5581udsMQFjXe5Zdc5omUDilgXC03NG9aj8pik1VGJJSLrrhvBB4ImqhogkxTND4rwzbIGBjj5OxZxe5DrKKPPsbk5ocnEQtvZg1: {
            Name: 'yfy',
            CompanyId: 277,
            StateId: null,
            CountryId: '1',
            StateName: null,
            CountryName: 'USA',
            Address: '',
            City: '',
            PostalCode: '',
            LogoUrl:
                'https://el.local.com//api/account/XUGKNyyudt9hVesnN-0W91FWQtDD7VDRDwhDiQ-dG8zbywOAPgP0Ju3Ombr1Dq9p9QlfGdxKGAj0EEY1Mkewc-OZbK53mxJD1B8DWX-Fn9M1/Logo.png',
            Domain: '',
            NumberOfEmployees: null,
            Founded: null,
            Website: '',
            About: '',
            DUNS: '',
            TaxID: '',
            EncryptedCustomerId:
                's1gIz7PrKUitbSKcnDibiOjVauuMEWmdDP26o2psPJPKqw3oU46NrJJU2LE26nvxa0F7G4Ea8ByJLEydeRrOtR1f7W6Z3THayvHP5rM_43Q1',
            AccountLegalName: '',
            MeterCount: 0,
            AwardedRFQsCount: 0,
            Logo: null,
            Id: 3862,
            EncryptedId:
                'XUGKNyyudt9hVesnN-0W91FWQtDD7VDRDwhDiQ-dG8zbywOAPgP0Ju3Ombr1Dq9p9QlfGdxKGAj0EEY1Mkewc-OZbK53mxJD1B8DWX-Fn9M1',
            ActionUserId: 0,
        },
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            switch (customerId) {
                case 'coIxYoZdS4PalyfgnYYjuSzZT18EZYslJ4s9WfQYfapVbfljanJ_Pw2DtOKrAhu2L54fpQL70GEGWyf80iUFudK0gDqvKb8nIbxJi6c2lyc1':
                    resolve(
                        customers[
                            'coIxYoZdS4PalyfgnYYjuSzZT18EZYslJ4s9WfQYfapVbfljanJ_Pw2DtOKrAhu2L54fpQL70GEGWyf80iUFudK0gDqvKb8nIbxJi6c2lyc1'
                        ]
                    );
                    break;
                case 'n-fDjK2RiUYwGLklZdVXLEHuqIIGzxX4QzKu378NTkL3PovBhVvBkXQr2mWUS-glShs3MB9mY2zoP3glzEKHFG-vjpVIrv1RV8rMSHkkkSo1':
                    resolve(
                        customers[
                            'n-fDjK2RiUYwGLklZdVXLEHuqIIGzxX4QzKu378NTkL3PovBhVvBkXQr2mWUS-glShs3MB9mY2zoP3glzEKHFG-vjpVIrv1RV8rMSHkkkSo1'
                        ]
                    );
                    break;
                case 'RdbL5zNn5581udsMQFjXe5Zdc5omUDilgXC03NG9aj8pik1VGJJSLrrhvBB4ImqhogkxTND4rwzbIGBjj5OxZxe5DrKKPPsbk5ocnEQtvZg1':
                    resolve(
                        customers[
                            'RdbL5zNn5581udsMQFjXe5Zdc5omUDilgXC03NG9aj8pik1VGJJSLrrhvBB4ImqhogkxTND4rwzbIGBjj5OxZxe5DrKKPPsbk5ocnEQtvZg1'
                        ]
                    );
                    break;
                default:
                    reject(new Error('Invalid customer id'));
            }
        }, 1000);
    });
};

const getAllCustomersSelect = (): Promise<CustomerChoice[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: 'coIxYoZdS4PalyfgnYYjuSzZT18EZYslJ4s9WfQYfapVbfljanJ_Pw2DtOKrAhu2L54fpQL70GEGWyf80iUFudK0gDqvKb8nIbxJi6c2lyc1',
                    text: 'Test',
                },
                {
                    id: 'n-fDjK2RiUYwGLklZdVXLEHuqIIGzxX4QzKu378NTkL3PovBhVvBkXQr2mWUS-glShs3MB9mY2zoP3glzEKHFG-vjpVIrv1RV8rMSHkkkSo1',
                    text: 'test1',
                },
                {
                    id: 'RdbL5zNn5581udsMQFjXe5Zdc5omUDilgXC03NG9aj8pik1VGJJSLrrhvBB4ImqhogkxTND4rwzbIGBjj5OxZxe5DrKKPPsbk5ocnEQtvZg1',
                    text: 'yfy',
                },
            ]);
        }, 1000);
    });
};

export const customerService = {
    getAllCustomersSelect,
    getCustomer,
};
