import { apiFetch } from '../api';
import { Country, CountryApi } from '../contracts';

const getAllCountries = async () => {
    const data: CountryApi[] = await apiFetch('GET', 'Countries/select');
    if (!data) {
        throw new Error('Failed to fetch countries');
    }
    const countries: Country[] = data.map((country: CountryApi) => ({
        name: country.text,
        id: country.id,
    }));
    return countries;
};

// const getAllCountries = (): Promise<Country[]> => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([
//                 {
//                     id: '1',
//                     name: 'USA',
//                 },
//                 {
//                     id: '2',
//                     name: 'United Kingdom',
//                 },
//                 {
//                     id: '3',
//                     name: 'Canada',
//                 },
//                 {
//                     id: '5',
//                     name: 'Australia',
//                 },
//                 {
//                     id: '6',
//                     name: 'Germany',
//                 },
//             ]);
//         }, 1000);
//     });
// };

export const countryService = {
    getAllCountries,
};
