import { createContext, ReactNode, useState } from 'react';
import { RFQFormValues } from '../types';
import { FormikProps, useFormik } from 'formik';
import { rfqValidationSchema } from '../schema';

const rfqInitialValues: RFQFormValues = {
    isWholesale: false,
    name: 'DUMMY',
    direction: '',
    type: '',
    access: 'private',
    reservePrice: 0,
    benchmarkPrice: 0,
    targetPrice: 0,
    proposedStartTime: '',
    proposedStartTimeScheduled: true,
    proposedStartTimeManual: false,
    proposedStartTimeAuto: true,
    proposedEndTime: '',
    proposedEndTimeScheduled: false,
    proposedEndTimeManual: true,
    chat: false,
    priceComments: true,
    firstBidBlind: false,
    blindDuringBidEntry: false,
    bidConfirmationDelay: false,
    bidConfirmationDelaySeconds: 0,
    sendCustomerInvite: false,
    hideBrokerFee: false,
    description: '',
    guidelines: '',
    qa: '',
};

type RFQState = {
    formik: FormikProps<RFQFormValues>;
};

export const RFQContext = createContext<RFQState>({
    formik: {} as FormikProps<RFQFormValues>,
});

const onSubmit = (values: RFQFormValues) => {
    const newContract = values;

    alert(JSON.stringify(newContract, null, 2));
};

export const RFQProvider = ({ children }: { children: ReactNode }) => {
    const formik = useFormik<RFQFormValues>({
        initialValues: rfqInitialValues,
        validationSchema: rfqValidationSchema,
        onSubmit: (values) => onSubmit(values),
    });

    return <RFQContext.Provider value={{ formik }}>{children}</RFQContext.Provider>;
};
