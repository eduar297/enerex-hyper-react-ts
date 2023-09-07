import { apiFetch } from '../api';
import { State, StateApi } from '../contracts';

const getStatesByCountry = async (countryId: string) => {
    if (!countryId) {
        throw new Error('CountryId is required');
    } else {
        const data: StateApi[] = await apiFetch('GET', `States/select/${countryId}`);
        if (!data) {
            throw new Error('Failed to fetch states');
        }
        const states: State[] = data.map((state: StateApi) => ({
            name: state.text,
            id: state.id,
        }));
        return states;
    }
};

export const stateService = {
    getStatesByCountry,
};
