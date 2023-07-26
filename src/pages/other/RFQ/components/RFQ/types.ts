export type RFQFormValues = {
    isWholesale?: boolean;
    name: string;
    direction: string;
    type: string;
    access: string;

    reservePrice: number;
    benchmarkPrice: number;
    targetPrice: number;

    proposedStartTime: string;
    proposedStartTimeScheduled?: boolean;
    proposedStartTimeManual?: boolean;
    proposedStartTimeAuto?: boolean;
    proposedEndTime: string;
    proposedEndTimeScheduled?: boolean;
    proposedEndTimeManual?: boolean;

    chat?: boolean;
    priceComments?: boolean;
    firstBidBlind?: boolean;

    blindDuringBidEntry?: boolean;

    bidConfirmationDelay?: boolean;

    bidConfirmationDelaySeconds?: number;

    sendCustomerInvite?: boolean;
    hideBrokerFee?: boolean;

    description?: string;
    guidelines?: string;
    qa?: string;
};
