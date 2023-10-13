import { useContext, useEffect, useMemo } from 'react';
import { AwardContext } from '../contexts';
import { Award, RenderAward } from '../contracts';
import { AwardsService } from '../services';
import { PageSize } from 'components';
import { Column } from 'react-table';

const prepareAwardToRender = (award: Award): RenderAward => {
    const renderAward: RenderAward = {
        marketplace: award.Marketplace,
        rfqNo: award.RFQNo,
        customer: award.Customer,
        start: award.Start.toDateString(),
        productType: award.ProductType,
        annualUsage: award.AnnualUsage,
        termUsage: award.TermUsage,
        brokerFee: award.BrokerFee,
        quote: award.Quote,
        id: award.id,
    };
    return renderAward;
};

const useAwards = () => {
    const { awards, setAwards } = useContext(AwardContext);

    const columns: ReadonlyArray<Column> = [
        {
            Header: 'Marketplace',
            accessor: 'marketplace',
            defaultCanSort: true,
        },
        {
            Header: 'RFQ #',
            accessor: 'rfqNo',
            defaultCanSort: true,
        },
        {
            Header: 'Customer',
            accessor: 'customer',
            defaultCanSort: false,
        },
        {
            Header: 'Start',
            accessor: 'start',
            defaultCanSort: true,
        },
        {
            Header: 'Product Type',
            accessor: 'productType',
            defaultCanSort: false,
        },
        {
            Header: 'Annual Usage',
            accessor: 'annualUsage',
            defaultCanSort: true,
        },
        {
            Header: 'Term Usage',
            accessor: 'termUsage',
            defaultCanSort: true,
        },
        {
            Header: 'Broker Fee',
            accessor: 'brokerFee',
            defaultCanSort: true,
        },
        {
            Header: 'Quote',
            accessor: 'quote',
            defaultCanSort: false,
        },
    ];

    useEffect(() => {
        AwardsService.getAwards()
            .then((data) => setAwards(data))
            .catch((err) => {
                throw new Error('Failed to fetch awards');
            });
    }, [setAwards]);

    const awardsConfirmed = useMemo(() => {
        const confirmed: Award[] = awards.filter((award: Award) => award.status === 'confirmed');
        return confirmed;
    }, [awards]);

    const pendingAwards = useMemo(() => {
        const pending: Award[] = awards.filter((award: Award) => award.status === 'pending');
        return pending;
    }, [awards]);

    const awardsConfirmedToRender = useMemo(() => {
        const confirmed: RenderAward[] = awardsConfirmed.map((award: Award) => prepareAwardToRender(award));
        return confirmed;
    }, [awardsConfirmed]);

    const pendingAwardsToRender = useMemo(() => {
        const pending: RenderAward[] = pendingAwards.map((award: Award) => prepareAwardToRender(award));
        return pending;
    }, [pendingAwards]);

    const sizePerPageListAwardsConfirmed = useMemo(() => {
        const sizePerPageListAwardsConfirmed: PageSize[] = [
            {
                text: '5',
                value: 5,
            },
            {
                text: '10',
                value: 10,
            },
            {
                text: '25',
                value: 25,
            },
            {
                text: 'All',
                value: awardsConfirmed.length,
            },
        ];
        return sizePerPageListAwardsConfirmed;
    }, [awardsConfirmed]);

    const sizePerPageListPendingAwards = useMemo(() => {
        const sizePerPageListPendingAwards: PageSize[] = [
            {
                text: '5',
                value: 5,
            },
            {
                text: '10',
                value: 10,
            },
            {
                text: '25',
                value: 25,
            },
            {
                text: 'All',
                value: pendingAwards.length,
            },
        ];
        return sizePerPageListPendingAwards;
    }, [pendingAwards]);

    return {
        awards,
        awardsConfirmed,
        pendingAwards,
        sizePerPageListAwardsConfirmed,
        sizePerPageListPendingAwards,
        columns,
        awardsConfirmedToRender,
        pendingAwardsToRender,
    };
};

export default useAwards;
