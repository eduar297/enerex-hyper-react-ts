import { Card, Col, Container, Row } from 'react-bootstrap';
import { AwardProvider } from './contexts';
import useAwards from './hooks/useAwards.hook';
import { Table } from 'components';
import { RenderAward } from './contracts';

const Awards = () => {
    const {
        awardsConfirmedToRender,
        pendingAwardsToRender,
        columns,
        sizePerPageListAwardsConfirmed,
        sizePerPageListPendingAwards,
    } = useAwards();

    return (
        <Container fluid className="my-2">
            <Row className="mt-2">
                <Col>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Pending Awards</h4>

                            <Table<RenderAward>
                                columns={columns}
                                data={pendingAwardsToRender}
                                pageSize={5}
                                sizePerPageList={sizePerPageListPendingAwards}
                                isSortable={true}
                                pagination={true}
                            />
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Awards Confirmed</h4>

                            <Table<RenderAward>
                                columns={columns}
                                data={awardsConfirmedToRender}
                                pageSize={5}
                                sizePerPageList={sizePerPageListAwardsConfirmed}
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

const AwardsWrapper = () => {
    return (
        <AwardProvider>
            <Awards />
        </AwardProvider>
    );
};

export default AwardsWrapper;
