import { createContext, useState, ReactNode } from 'react';
import { MeterFormValues } from '../contracts';
import { FormikProps, useFormik } from 'formik';
import { meterValidationSchema } from '../schema';
import { meterService } from '../services';

const meterInitialValues: MeterFormValues = {
    utility: '',
    accountNumber: undefined,
    meterNumber: undefined,
    city: '',
    state: '',
    zip: undefined,
    addressLine1: '',
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

const onSubmit = async (
    values: MeterFormValues,
    meters: MeterFormValues[],
    setMeters: React.Dispatch<React.SetStateAction<MeterFormValues[]>>,
    resetForm: () => void
) => {
    // fix values
    // const _newMeter = await meterService.createMeter({values});
    // const newMeter: MeterFormValues = {
    //     utility: _newMeter.UtilityName,
    //     accountNumber: parseInt(_newMeter.AccountNumber),
    //     meterNumber: parseInt(_newMeter.MeterNumber),
    //     city: _newMeter.City,
    //     addressLine1: _newMeter.AddressLine1,
    //     state: _newMeter.StateID,
    //     zip: _newMeter.PostalCode,
    // };
    // setMeters([...meters, newMeter]);
    // alert(JSON.stringify(newMeter, null, 2));
    resetForm();
};

export const MeterProvider = ({ children }: { children: ReactNode }) => {
    const [meters, setMeters] = useState<MeterFormValues[]>([]);
    const [metersSelected, setMetersSelected] = useState<MeterFormValues[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const formik = useFormik<MeterFormValues>({
        initialValues: meterInitialValues,
        validationSchema: meterValidationSchema,
        onSubmit: (values, formikBag) => onSubmit(values, meters, setMeters, formikBag.resetForm),
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
