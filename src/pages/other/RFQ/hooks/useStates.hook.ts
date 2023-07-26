import { useState, useEffect, useMemo } from 'react';

const fetchStates = (countryCode: string): Promise<State[]> => {
    const states = {
        US: [
            { name: 'Alabama', code: 'AL' },
            { name: 'Alaska', code: 'AK' },
            { name: 'Arizona', code: 'AZ' },
        ],
        CA: [
            { name: 'Alberta', code: 'AB' },
            { name: 'British Columbia', code: 'BC' },
            { name: 'Manitoba', code: 'MB' },
        ],
        AU: [
            { name: 'New South Wales', code: 'NSW' },
            { name: 'Queensland', code: 'QLD' },
            { name: 'South Australia', code: 'SA' },
        ],
        GB: [
            { name: 'England', code: 'ENG' },
            { name: 'Northern Ireland', code: 'NIR' },
            { name: 'Scotland', code: 'SCT' },
            { name: 'Wales', code: 'WLS' },
        ],
        DE: [
            { name: 'Baden-Württemberg', code: 'BW' },
            { name: 'Bavaria', code: 'BY' },
            { name: 'Berlin', code: 'BE' },
            { name: 'Brandenburg', code: 'BB' },
        ],
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            switch (countryCode) {
                case 'US':
                    resolve(states['US']);
                    break;
                case 'CA':
                    resolve(states['CA']);
                    break;
                case 'AU':
                    resolve(states['AU']);
                    break;
                case 'GB':
                    resolve(states['GB']);
                    break;
                case 'DE':
                    resolve(states['DE']);
                    break;
                case 'ALL':
                    resolve([...states['US'], ...states['CA'], ...states['AU'], ...states['GB'], ...states['DE']]);
                    break;
                default:
                    reject(new Error('Invalid country code'));
            }
        }, 1000);
    });
};

interface State {
    name: string;
    code: string;
}

const useStates = (
    countryCode: string
): {
    states: State[];
    loading: boolean;
    error: any;
} => {
    const [states, setStates] = useState<State[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const cache = useMemo(() => new Map<string, State[]>(), []);

    useEffect(() => {
        setLoading(true);
        setStates([]);
        setError(null);
        if (cache.has(countryCode)) {
            setStates(cache.get(countryCode)!);
            setLoading(false);
        } else {
            fetchStates(countryCode)
                .then((data) => {
                    setStates(data);
                    cache.set(countryCode, data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err);
                    setLoading(false);
                });
        }
    }, [countryCode, cache]);

    return { states, loading, error };
};

export default useStates;
