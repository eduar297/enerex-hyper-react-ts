import * as yup from 'yup';
import { commonPasswords, getPasswordStrength } from '../../utils';

export const customerValidationSchema = yup.object().shape({
    name: yup.string().typeError('Enter a name').required('Name is required'),
    domain: yup
        .string()
        .typeError('Enter a domain')
        .required('Domain is required')
        .matches(/^[a-z0-9]+(\.[a-z0-9]+)*\.[a-z]{2,}$/i, 'Enter a valid domain'),
    logo: yup.mixed().required('Logo is required'),
    address: yup.string().typeError('Enter a address').required('Address is required'),
    city: yup.string().typeError('Enter a city').required('City is required'),
    country: yup.string().required('Country is required'),
    state: yup.string().typeError('Enter a state').required('State is required'),
    zip: yup
        .string()
        .typeError('Enter a zip')
        .required('Zip is required')
        .matches(/^[0-9]{5}(-[0-9]{4})?$/, 'Enter a valid zip code'),
    numberOfEmployees: yup
        .number()
        .typeError('Enter a number of employees')
        .min(0)
        .required('Number of employees is required'),
    founded: yup
        .number()
        .typeError('Enter a founded')
        .required('Founded is required')
        .min(0)
        .max(new Date().getFullYear(), 'Founded cannot be greater than current year'),
    website: yup.string().typeError('Enter a website').required('Website is required').url('Enter a valid website'),
    duns: yup.number().typeError('Enter a DUNS').min(0),
    taxId: yup.number().typeError('Enter a tax Id').required('Tax ID is required'),
    legalBusinessName: yup
        .string()
        .typeError('Enter a legal business name')
        .required('Legal business name is required'),
    about: yup.string().typeError('Enter a about').required('About is required'),
});

export const contractValidationSchema = yup.object().shape({
    firstName: yup.string().typeError('Enter a first name').required('First name is required'),
    lastName: yup.string().typeError('Enter a last name').required('Last name is required'),
    jobTitle: yup.string().typeError('Enter a job title'),
    primaryPhoneNumber: yup.string().typeError('Enter a primary phone number'),
    emailAddress: yup
        .string()
        .typeError('Enter a email address')
        .email('Please enter a valid email address')
        .required('Email address is required'),
    password: yup
        .string()
        .typeError('Enter a password')
        .required('Password is required')
        .test('password-common', 'Password is too common, please choose a different one', (value) => {
            return !commonPasswords.includes(value);
        })
        .test(
            'password-strength',
            'Password must be at least 8 characters and contain at least 3 of the following: uppercase, lowercase, number, special character',
            (value) => {
                return getPasswordStrength(value) >= 3;
            }
        ),

    confirmPassword: yup
        .string()
        .typeError('Enter a confirm password')
        .required('Confirm password is required')
        .oneOf([yup.ref('password')], 'Passwords must match'),
});
