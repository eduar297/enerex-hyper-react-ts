import * as yup from 'yup';

export const meterValidationSchema = yup.object().shape({
    utility: yup.string().typeError('Enter a utility').required('Utility is required'),
    accountNumber: yup.number().typeError('Enter a account number').required('Account number is required'),
    meterNumber: yup.number().typeError('Enter a meter number'),
    city: yup.string().typeError('Enter a city'),
    state: yup.string().typeError('Enter a state'),
    zip: yup
        .string()
        .typeError('Enter a zip')
        .matches(/^[0-9]{5}(-[0-9]{4})?$/, 'Enter a valid zip code'),
    addressLine1: yup.string().typeError('Enter a address line 1'),
});
