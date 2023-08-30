import { apiFetch } from '../api';
import { State, StateApi } from '../contracts';

// const getStatesByCountry = async (countryId: string) => {
//     const data: StateApi[] = await apiFetch('GET', `States/select${countryId}`);
//     if (!data) {
//         throw new Error('Failed to fetch states');
//     }
//     const states: State[] = data.map((state: StateApi) => ({
//         name: state.text,
//         id: state.id,
//     }));
//     return states;
// };

const getStatesByCountry = (countryId: string): Promise<State[]> => {
    const states = {
        '1': [
            { name: 'Alabama', id: '1' },
            { name: 'Alaska', id: '2' },
            { name: 'Arizona', id: '3' },
        ],
        '2': [
            { name: 'England', id: '10' },
            { name: 'Northern Ireland', id: '11' },
            { name: 'Scotland', id: '12' },
            { name: 'Wales', id: '13' },
        ],
        '3': [
            { name: 'Alberta', id: '4' },
            { name: 'British Columbia', id: '5' },
            { name: 'Manitoba', id: '6' },
        ],
        '5': [
            { name: 'New South Wales', id: '7' },
            { name: 'Queensland', id: '8' },
            { name: 'South Australia', id: '9' },
        ],
        '6': [
            { name: 'Baden-Württemberg', id: '14' },
            { name: 'Bavaria', id: '15' },
            { name: 'Berlin', id: '16' },
            { name: 'Brandenburg', id: '17' },
        ],
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            switch (countryId) {
                case '1':
                    resolve(states['1']);
                    break;
                case '2':
                    resolve(states['2']);
                    break;
                case '3':
                    resolve(states['3']);
                    break;
                case '5':
                    resolve(states['5']);
                    break;
                case '6':
                    resolve(states['6']);
                    break;
                case 'ALL':
                    resolve([...states['1'], ...states['2'], ...states['3'], ...states['5'], ...states['6']]);
                    break;
                default:
                    reject(new Error('Invalid country code'));
            }
        }, 1000);
    });
};

export const stateService = {
    getStatesByCountry,
};
