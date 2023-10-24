import { useContext, useEffect, useMemo } from 'react';
import { MatrixContext } from '../contexts';
import { Matrix, RenderMatriz } from '../contracts';
import { MatricesService } from '../services';
import { PageSize } from 'components';
import { Column } from 'react-table';

const prepareMatrixToRender = (matrix: Matrix): RenderMatriz => {
    const renderMatrix: RenderMatriz = {
        id: matrix.id,
        commodity: matrix.Commodity,
        supplierName: matrix.SupplierName,
        stateName: matrix.StateName,
        lDCNAME: matrix.LDCNAME,
        customerType: matrix.CustomerType,
        zone: matrix.Zone,
        loadZone: matrix.LoadZone,
        loadFactorFrom: matrix.LoadFactorFrom,
        loadFactorUpTo: matrix.LoadFactorUpTo,
        demandRangeFrom: matrix.DemandRangeFrom,
        demandRangeUpTo: matrix.DemandRangeUpTo,
        congestion: matrix.Congestion,
        gRT: matrix.GRT,
    };
    return renderMatrix;
};

const useMatrices = () => {
    const { matrices, setMatrices } = useContext(MatrixContext);

    const columns: ReadonlyArray<Column> = [
        {
            Header: 'Commodity',
            accessor: 'commodity',
            defaultCanSort: true,
        },
        {
            Header: 'Supplier Name',
            accessor: 'supplierName',
            defaultCanSort: true,
        },
        {
            Header: 'State Name',
            accessor: 'stateName',
            defaultCanSort: true,
        },
        {
            Header: 'LDC NAME',
            accessor: 'lDCNAME',
            defaultCanSort: true,
        },
        {
            Header: 'Customer Type',
            accessor: 'customerType',
            defaultCanSort: true,
        },
        {
            Header: 'Zone',
            accessor: 'zone',
            defaultCanSort: true,
        },
        {
            Header: 'Load Zone',
            accessor: 'loadZone',
            defaultCanSort: true,
        },
        {
            Header: 'Load Factor From',
            accessor: 'loadFactorFrom',
            defaultCanSort: true,
        },
        {
            Header: 'Load Factor Up To',
            accessor: 'loadFactorUpTo',
            defaultCanSort: true,
        },
        {
            Header: 'Demand Range From',
            accessor: 'demandRangeFrom',
            defaultCanSort: true,
        },
        {
            Header: 'Demand Range Up To',
            accessor: 'demandRangeUpTo',
            defaultCanSort: true,
        },
        {
            Header: 'Congestion',
            accessor: 'congestion',
            defaultCanSort: true,
        },
        {
            Header: 'GRT',
            accessor: 'gRT',
            defaultCanSort: true,
        },
    ];

    useEffect(() => {
        MatricesService.getMatrices()
            .then((data) => setMatrices(data))
            .catch((err) => {
                throw new Error('Failed to fetch matrices');
            });
    }, [setMatrices]);

    const matricesToRender = useMemo(() => {
        const _matrices: RenderMatriz[] = matrices.map((matrix: Matrix) => prepareMatrixToRender(matrix));
        return _matrices;
    }, [matrices]);

    const sizePerPageListMatrices = useMemo(() => {
        const sizePerPageListMatrices: PageSize[] = [
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
                value: matrices.length,
            },
        ];
        return sizePerPageListMatrices;
    }, [matrices.length]);

    return {
        matrices,
        sizePerPageListMatrices,
        columns,
        matricesToRender,
    };
};

export default useMatrices;
