import * as yup from 'yup';

export const rfqValidationSchema = yup.object().shape({
    isWholesale: yup.boolean(),
    name: yup.string().required('Name is required'),
    direction: yup.string().required('Direction is required'),
    type: yup.string().required('Type is required'),
    access: yup.string().required('Access is required'),

    reservePrice: yup
        .number()
        .min(0, 'Reserve price must be positive')
        .when('isWholesale', {
            is: (value: boolean) => value === false,
            then: (schema) => schema.required('Reserve price is required when isWholesale is false'),
        }),
    benchmarkPrice: yup
        .number()
        .min(0, 'Benchmark price must be positive')
        .when('isWholesale', {
            is: (value: boolean) => value === false,
            then: (schema) => schema.required('Benchmark price is required when isWholesale is false'),
        }),
    targetPrice: yup
        .number()
        .min(0, 'Target price must be positive')
        .when('isWholesale', {
            is: (value: boolean) => value === false,
            then: (schema) => schema.required('Target price is required when isWholesale is false'),
        }),

    proposedStartTime: yup.string().when('proposedStartTimeScheduled', {
        is: (value: boolean) => value === true,
        then: (schema) => schema.required('Proposed start time is required when proposedStartTimeScheduled is true'),
    }),
    proposedStartTimeScheduled: yup.boolean(),
    proposedStartTimeManual: yup.boolean(),
    proposedStartTimeAuto: yup.boolean(),

    proposedEndTime: yup.string().when('proposedEndTimeScheduled', {
        is: (value: boolean) => value === true,
        then: (schema) => schema.required('Proposed end time is required when proposedEndTimeScheduled is true'),
    }),
    proposedEndTimeScheduled: yup.boolean(),
    proposedEndTimeManual: yup.boolean(),

    chat: yup.boolean(),
    priceComments: yup.boolean(),
    firstBidBlind: yup.boolean(),

    blindDuringBidEntry: yup.boolean().when('isWholesale', {
        is: (value: boolean) => value === true,
        then: (schema) => schema.required('Blind during bid entry is required when isWholesale is true'),
    }),

    bidConfirmationDelay: yup.boolean().when('isWholesale', {
        is: (value: boolean) => value === true,
        then: (schema) => schema.required('Bid confirmation delay is required when isWholesale is true'),
    }),

    bidConfirmationDelaySeconds: yup
        .number()
        .min(0, 'Bid confirmation delay seconds must be positive')
        .when('bidConfirmationDelay', {
            is: (value: boolean) => value === true,
            then: (schema) =>
                schema.required('Bid confirmation delay seconds is required when bidConfirmationDelay is true'),
        }),

    sendCustomerInvite: yup.boolean(),
    hideBrokerFee: yup.boolean(),

    description: yup.string(),
    guidelines: yup.string(),
    qa: yup.string(),
});
