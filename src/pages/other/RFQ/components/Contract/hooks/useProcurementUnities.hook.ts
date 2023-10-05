import { useState, useEffect, useMemo } from 'react';
import { ProcurementUnit } from '../contracts';
import { procurementUnitService } from '../services';

const useProcurementUnities = (
    commodityTypeId: string
): {
    procurementUnities: ProcurementUnit[];
    loading: boolean;
    error: any;
} => {
    const [procurementUnities, setProcurementUnities] = useState<ProcurementUnit[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const cache = useMemo(() => new Map<string, ProcurementUnit[]>(), []);

    useEffect(() => {
        setLoading(true);
        setProcurementUnities([]);
        setError(null);
        if (cache.has(commodityTypeId)) {
            setProcurementUnities(cache.get(commodityTypeId)!);
            setLoading(false);
        } else {
            procurementUnitService
                .getProcurementUnitByCommodityType(commodityTypeId)
                .then((data) => {
                    setProcurementUnities(data);
                    cache.set(commodityTypeId, data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err);
                    setLoading(false);
                });
        }
    }, [commodityTypeId, cache]);

    return { procurementUnities, loading, error };
};

export default useProcurementUnities;
