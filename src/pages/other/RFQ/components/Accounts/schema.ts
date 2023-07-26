import * as yup from 'yup';

export const meterValidationSchema = yup.object().shape({
    utility: yup.string().typeError('Enter a utility').required('Utility is required'),
    accountNumber: yup.number().typeError('Enter a account number').required('Account number is required'),
    meterNumber: yup.number().typeError('Enter a meter number').required('Meter number is required'),
    city: yup.string().typeError('Enter a city').required('City is required'),
    state: yup.string().typeError('Enter a state').required('State is required'),
    zip: yup
        .string()
        .typeError('Enter a zip')
        .required('Zip is required')
        .matches(/^[0-9]{5}(-[0-9]{4})?$/, 'Enter a valid zip code'),
    addressLine1: yup.string().typeError('Enter a address line 1'),
    addressLine2: yup.string().typeError('Enter a address line 2'),
    addressLine3: yup.string().typeError('Enter a address line 3'),
});
