import { useState, useEffect, useMemo } from 'react';
import { Utility } from '../contracts';
import { utilityService } from '../services';

const useStates = (
    countryId: string
): {
    utilities: Utility[];
    loading: boolean;
    error: any;
} => {
    const [utilities, setUtilities] = useState<Utility[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const cache = useMemo(() => new Map<string, Utility[]>(), []);

    useEffect(() => {
        setLoading(true);
        setUtilities([]);
        setError(null);
        if (cache.has(countryId)) {
            setUtilities(cache.get(countryId)!);
            setLoading(false);
        } else {
            utilityService
                .getUtilitiesByCountryId(countryId)
                .then((data) => {
                    setUtilities(data);
                    cache.set(countryId, data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err);
                    setLoading(false);
                });
        }
    }, [countryId, cache]);

    return { utilities, loading, error };
};

export default useStates;
