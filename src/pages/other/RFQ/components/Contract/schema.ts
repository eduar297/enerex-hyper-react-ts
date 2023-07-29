import * as yup from 'yup';

export const contractValidationSchema = yup.object().shape({
    startDate: yup.date(),
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
    procurementUnit: yup.string().required('Procurement unit is required'),
    fee: yup.number().min(0, 'Fee must be positive').required('Fee is required'),
    renewableContentRequirement: yup
        .number()
        .min(0, 'Renewable content requirement must be positive')
        .max(100, 'Renewable content requirement must be less than or equal to 100')
        .required('Renewable content requirement is required'),
    term: yup.string().matches(/^\d+(,\d+)*$/, 'Term must be a comma-separated list of numbers'),
    // product
    productType: yup.string(),
    productTypeDescription: yup.string(),
    multiplier: yup
        .number()
        .min(0, 'Multiplier must be positive')
        .when('productType', {
            is: (value: string) => value === 'heat-rate',
            then: (schema) => schema.required('Multiplier is required when productType is Head Rate'),
        }),
    adder: yup
        .number()
        .min(0, 'Adder must be positive')
        .when('productType', {
            is: (value: string) => value === 'index' || value === 'head-rate' || value === 'block-index',
            then: (schema) =>
                schema.required('Adder is required when productType is Index or Head Rate or Block & Index'),
        }),
    onPeak: yup
        .number()
        .min(0, 'On Peak must be positive')
        .when('productType', {
            is: (value: string) => value === 'peak',
            then: (schema) => schema.required('On Peak is required when productType is On-peak / Off-peak'),
        }),
    offPeak: yup
        .number()
        .min(0, 'Off Peak must be positive')
        .when('productType', {
            is: (value: string) => value === 'peak',
            then: (schema) => schema.required('Off Peak is required when productType is On-peak / Off-peak'),
        }),
    // billing
    billType: yup.string().required('Bill Type is required'),
    paymentTerm: yup.number().min(0, 'Payment Term must be positive').required('Payment Term is required'),
});
