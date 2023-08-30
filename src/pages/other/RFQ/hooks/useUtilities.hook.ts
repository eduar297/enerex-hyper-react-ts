import { useState, useEffect } from 'react';
import { Utility } from '../contracts';
import { utilityService } from '../services/utility.service';

const useUtilities = (): {
    utilities: Utility[];
    loading: boolean;
    error: any;
} => {
    const [utilities, setUtilities] = useState<Utility[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        setLoading(true);
        setUtilities([]);
        setError(null);
        utilityService
            .getAllUtilities()
            .then((data) => {
                setUtilities(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return { utilities, loading, error };
};

export default useUtilities;
