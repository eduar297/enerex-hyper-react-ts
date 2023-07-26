import { createContext, useState, ReactNode } from 'react';
import { MeterFormValues } from '../types';
import { FormikProps, useFormik } from 'formik';
import { meterValidationSchema } from '../schema';

const meterInitialValues: MeterFormValues = {
    utility: '',
    accountNumber: 0,
    meterNumber: 0,
    city: '',
    state: '',
    zip: 0,
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
};

type MeterState = {
    meters: MeterFormValues[];
    setMeters: React.Dispatch<React.SetStateAction<MeterFormValues[]>>;
    metersSelected: MeterFormValues[];
    setMetersSelected: React.Dispatch<React.SetStateAction<MeterFormValues[]>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: any;
    setError: React.Dispatch<React.SetStateAction<any>>;
    formik: FormikProps<MeterFormValues>;
};

export const MeterContext = createContext<MeterState>({
    meters: [],
    setMeters: () => {},
    metersSelected: [],
    setMetersSelected: () => {},
    loading: false,
    setLoading: () => {},
    error: null,
    setError: () => {},
    formik: {} as FormikProps<MeterFormValues>,
});

const onSubmit = (
    values: MeterFormValues,
    meters: MeterFormValues[],
    setMeters: React.Dispatch<React.SetStateAction<MeterFormValues[]>>
) => {
    const newMeter = values;
    setMeters([...meters, newMeter]);
    alert(JSON.stringify(newMeter, null, 2));
};

export const MeterProvider = ({ children }: { children: ReactNode }) => {
    const [meters, setMeters] = useState<MeterFormValues[]>([]);
    const [metersSelected, setMetersSelected] = useState<MeterFormValues[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const formik = useFormik<MeterFormValues>({
        initialValues: meterInitialValues,
        validationSchema: meterValidationSchema,
        onSubmit: (values) => onSubmit(values, meters, setMeters),
    });

    return (
        <MeterContext.Provider
            value={{
                meters,
                setMeters,
                metersSelected,
                setMetersSelected,
                loading,
                setLoading,
                error,
                setError,
                formik,
            }}>
            {children}
        </MeterContext.Provider>
    );
};
