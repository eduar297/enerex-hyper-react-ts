import { useState, useEffect, useMemo } from 'react';
import { State } from '../contracts';
import { stateService } from '../services';

const useStates = (
    countryId: string
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
        if (cache.has(countryId)) {
            setStates(cache.get(countryId)!);
            setLoading(false);
        } else {
            stateService
                .getStatesByCountry(countryId)
                .then((data) => {
                    setStates(data);
                    cache.set(countryId, data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err);
                    setLoading(false);
                });
        }
    }, [countryId, cache]);

    return { states, loading, error };
};

export default useStates;
