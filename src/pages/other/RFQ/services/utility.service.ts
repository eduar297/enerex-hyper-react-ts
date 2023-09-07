import { apiFetch } from '../api';
import { Utility } from '../contracts';

const getUtilitiesByCountryId = async (countryId: string) => {
    if (!countryId) {
        throw new Error('CountryId is required');
    } else {
        const data: Utility[] = await apiFetch('GET', `Utilities/selectForCountry/${countryId}`);
        if (!data) {
            throw new Error('Failed to fetch utilities');
        }
        const utilities: Utility[] = data;
        return utilities;
    }
};

const getUtilitiesByStateId = async (stateId: string) => {
    if (!stateId) {
        throw new Error('StateId is required');
    } else {
        const data: Utility[] = await apiFetch('GET', `Utilities/selectForCountry/${stateId}`);
        if (!data) {
            throw new Error('Failed to fetch utilities');
        }
        const utilities: Utility[] = data;
        return utilities;
    }
};

export const utilityService = {
    getUtilitiesByCountryId,
    getUtilitiesByStateId,
};
