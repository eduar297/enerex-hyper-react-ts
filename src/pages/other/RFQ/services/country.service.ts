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

export const countryService = {
    getAllCountries,
};
