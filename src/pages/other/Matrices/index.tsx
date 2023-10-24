import { Card, Col, Container, Row } from 'react-bootstrap';
import { MatrixProvider } from './contexts';
import useMatrices from './hooks/useMatrices.hook';
import { Table } from 'components';
import { RenderMatriz } from './contracts';

const Matrices = () => {
    const { columns, matricesToRender, sizePerPageListMatrices } = useMatrices();

    return (
        <Container fluid className="my-2">
            <Row className="mt-2">
                <Col>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Matrices List</h4>

                            <Table<RenderMatriz>
                                columns={columns}
                                data={matricesToRender}
                                pageSize={5}
                                sizePerPageList={sizePerPageListMatrices}
                                isSortable={true}
                                pagination={true}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

const MatricesWrapper = () => {
    return (
        <MatrixProvider>
            <Matrices />
        </MatrixProvider>
    );
};

export default MatricesWrapper;
