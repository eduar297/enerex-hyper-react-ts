import { useState, useEffect } from 'react';
import { Country } from '../contracts';

import { countryService } from '../services';

const useCountries = (): {
    countries: Country[];
    loading: boolean;
    error: any;
} => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        setLoading(true);
        setCountries([]);
        setError(null);
        countryService
            .getAllCountries()
            .then((data) => {
                setCountries(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return { countries, loading, error };
};

export default useCountries;
