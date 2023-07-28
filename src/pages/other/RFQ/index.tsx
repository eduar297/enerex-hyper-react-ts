import { PageTitle } from 'components';

import Customer from './components/Customer';
import Contract from './components/Contract';
import Accounts from './components/Accounts';
import UserPermissions from './components/UserPermissions';
import Documents from './components/Documents';
// import RFQ from './components/RFQ';

import { ItemProps } from './components/UI/Accordion';

import { ContactsProvider, CustomersProvider } from './components/Customer/contexts';
import { ContractsProvider } from './components/Contract/contexts';
import { MeterProvider } from './components/Accounts/contexts';
import { DocumentsProvider } from './components/Documents/contexts';
import { UserPermissionsProvider } from './components/UserPermissions/contexts';
import { RFQProvider } from './components/RFQ/contexts';
import { Badge, Button, Card, Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { Step, Steps, Wizard } from 'react-albus';
import { ReactNode } from 'react';

export const RootProvider = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <RFQProvider>
                <CustomersProvider>
                    <ContactsProvider>
                        <ContractsProvider>
                            <MeterProvider>
                                <DocumentsProvider>
                                    <UserPermissionsProvider>{children}</UserPermissionsProvider>
                                </DocumentsProvider>
                            </MeterProvider>
                        </ContractsProvider>
                    </ContactsProvider>
                </CustomersProvider>
            </RFQProvider>
        </>
    );
};

const RFQCreate = () => {
    const items: ItemProps[] = [
        // { header: 'Rfq', content: <RFQ /> },
        {
            header: 'Customer',
            content: <Customer />,
        },
        {
            header: 'Contract',
            content: <Contract />,
        },
        {
            header: 'Accounts',
            content: <Accounts />,
        },
        {
            header: 'Documents',
            content: <Documents />,
        },
        {
            header: 'Invitation',
            content: <p>Invitation</p>,
        },
        {
            header: 'User Permissions',
            content: <UserPermissions />,
        },
    ];

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Pages', path: '/pages/rfq' },
                    { label: 'RFQ', path: '/pages/rfq', active: true },
                ]}
                title={'RFQ'}
            />

            <RootProvider>
                <Container fluid>
                    <Row className="mb-2">
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Wizard
                                        render={({ step, steps }) => (
                                            <>
                                                <Row className="justify-content-md-center">
                                                    <Col className="text-center">
                                                        {steps.indexOf(step) >= 0 &&
                                                            steps.indexOf(step) < items.length && (
                                                                <Badge bg="info" style={{ marginTop: -70 }}>
                                                                    <h5 className="">
                                                                        {items[steps.indexOf(step)].header}
                                                                    </h5>
                                                                </Badge>
                                                            )}
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col>
                                                        <ProgressBar
                                                            animated
                                                            striped
                                                            variant="info"
                                                            now={((steps.indexOf(step) + 1) / steps.length) * 100}
                                                            className="mb-3 progress-sm"
                                                        />
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col>
                                                        <Steps>
                                                            {items.map((item, index) => (
                                                                <Step
                                                                    id={item.header}
                                                                    render={({ next, previous }) => (
                                                                        <>
                                                                            <Row>
                                                                                <Col>{item.content}</Col>
                                                                            </Row>
                                                                            <ul className="list-inline wizard mb-0">
                                                                                {index > 0 && (
                                                                                    <li className="previous list-inline-item">
                                                                                        <Button
                                                                                            onClick={previous}
                                                                                            variant="info">
                                                                                            Previous
                                                                                        </Button>
                                                                                    </li>
                                                                                )}
                                                                                {index < items.length - 1 && (
                                                                                    <li className="next list-inline-item float-end">
                                                                                        <Button
                                                                                            variant="primary"
                                                                                            onClick={next}>
                                                                                            Next
                                                                                        </Button>
                                                                                    </li>
                                                                                )}
                                                                                {index === items.length - 1 && (
                                                                                    <li className="next list-inline-item float-end">
                                                                                        <Button
                                                                                            variant="success"
                                                                                            onClick={() =>
                                                                                                alert('finish')
                                                                                            }>
                                                                                            Save
                                                                                        </Button>
                                                                                    </li>
                                                                                )}
                                                                            </ul>
                                                                        </>
                                                                    )}
                                                                />
                                                            ))}
                                                        </Steps>
                                                    </Col>
                                                </Row>
                                            </>
                                        )}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </RootProvider>
        </>
    );
};

export default RFQCreate;
