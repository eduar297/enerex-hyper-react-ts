import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
    Name: yup.string().typeError('Enter a name').required('Name is required'),
    Domain: yup.string().matches(/^[a-z0-9]+(\.[a-z0-9]+)*\.[a-z]{2,}$/i, 'Enter a valid domain'),
    LogoUrl: yup.string(),
    Address: yup.string(),
    City: yup.string(),
    CountryId: yup.string(),
    StateId: yup.string(),
    PostalCode: yup.string().matches(/^[0-9]{5}(-[0-9]{4})?$/, 'Enter a valid zip code'),
    NumberOfEmployees: yup.number().min(0),
    Founded: yup.number().min(0).max(new Date().getFullYear(), 'Founded cannot be greater than current year'),
    Website: yup.string().url('Enter a valid website'),
    DUNS: yup.number().min(0),
    TaxID: yup.number().test('len', 'Tax Id must be 9 digits exactly', (val) => {
        if (val) {
            return val.toString().length === 9;
        }
        return true;
    }),
    AccountLegalName: yup.string(),
    About: yup.string(),
});

export const contactValidationSchema = yup.object().shape({
    FirstName: yup.string().required('First name is required'),
    LastName: yup.string().required('Last name is required'),
    Email: yup.string().email('Please enter a valid email address').required('Email address is required'),
    JobTitle: yup.string(),
    Phone: yup.string(),
});
