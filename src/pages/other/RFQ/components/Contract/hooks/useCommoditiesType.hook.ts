import { useState, useEffect } from 'react';
import { CommodityType } from '../contracts';

import { CommodityTypeService } from '../services';

const useCommoditiesType = (): {
    commoditiesType: CommodityType[];
    loading: boolean;
    error: any;
} => {
    const [commoditiesType, setCommoditiesType] = useState<CommodityType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        setLoading(true);
        setCommoditiesType([]);
        setError(null);
        CommodityTypeService.getAllCommoditiesType()
            .then((data) => {
                setCommoditiesType(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return { commoditiesType, loading, error };
};

export default useCommoditiesType;
