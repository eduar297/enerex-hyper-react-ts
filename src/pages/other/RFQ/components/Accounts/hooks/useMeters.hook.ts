import { useContext } from 'react';
import { MeterContext } from '../contexts';
import { MeterFormValues } from '../types';
import { FormikProps } from 'formik';

const useMeters = (): {
    meters: MeterFormValues[];
    setMeters: React.Dispatch<React.SetStateAction<MeterFormValues[]>>;
    metersSelected: MeterFormValues[];
    setMetersSelected: React.Dispatch<React.SetStateAction<MeterFormValues[]>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: any;
    setError: React.Dispatch<React.SetStateAction<any>>;
    formik: FormikProps<MeterFormValues>;
} => {
    const { meters, setMeters, metersSelected, setMetersSelected, loading, setLoading, error, setError, formik } =
        useContext(MeterContext);

    return {
        meters,
        setMeters,
        metersSelected,
        setMetersSelected,
        loading,
        setLoading,
        error,
        setError,
        formik,
    };
};

export default useMeters;
