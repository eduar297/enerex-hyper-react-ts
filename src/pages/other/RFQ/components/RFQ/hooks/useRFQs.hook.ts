import { useContext } from 'react';
import { RFQContext } from '../contexts';
import { RFQFormValues } from '../types';
import { FormikProps } from 'formik';

const useRFQs = (): {
    formik: FormikProps<RFQFormValues>;
} => {
    const { formik } = useContext(RFQContext);

    return {
        formik,
    };
};

export default useRFQs;
