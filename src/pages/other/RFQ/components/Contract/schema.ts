import * as yup from 'yup';

export const contractValidationSchema = yup.object().shape({
    startDate: yup.date().required('Start date is required'),
    commodityType: yup.string().required('Commodity type is required'),
    country: yup.string().required('Country is required'),
    state: yup.string().required('State is required'),
    minimumBandwidth: yup
        .number()
        .min(0, 'Minimum bandwidth must be positive')
        .required('Minimum bandwidth is required'),
    deliveryPoint: yup.string().required('Delivery point is required'),
    annualProcurementAmount: yup
        .string()
        .matches(/^\d+(,\d+)*$/, 'Annual procurement amount must be a comma-separated list of numbers')
        .required('Annual procurement amount is required'),
    procurementUnit: yup.number().min(0, 'Procurement unit must be positive').required('Procurement unit is required'),
    fee: yup.number().min(0, 'Fee must be positive').required('Fee is required'),
    renewableContentRequirement: yup
        .number()
        .min(0, 'Renewable content requirement must be positive')
        .max(100, 'Renewable content requirement must be less than or equal to 100')
        .required('Renewable content requirement is required'),
    term: yup
        .string()
        .matches(/^\d+(,\d+)*$/, 'Term must be a comma-separated list of numbers')
        .required('Term is required'),
});
