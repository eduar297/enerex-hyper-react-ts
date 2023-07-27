import { PageTitle } from 'components';

import Customer from './components/Customer';
import Contract from './components/Contract';
import Accounts from './components/Accounts';
import UserPermissions from './components/UserPermissions';
import Documents from './components/Documents';
// import RFQ from './components/RFQ';

import { Accordion } from './components/UI';
import { ItemProps } from './components/UI/Accordion';

import { ContactsProvider, CustomersProvider } from './components/Customer/contexts';
import { ContractsProvider } from './components/Contract/contexts';
import { MeterProvider } from './components/Accounts/contexts';
import { DocumentsProvider } from './components/Documents/contexts';
import { UserPermissionsProvider } from './components/UserPermissions/contexts';
import { RFQProvider } from './components/RFQ/contexts';
import { Button, Col, Container, Row } from 'react-bootstrap';

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

            <RFQProvider>
                <CustomersProvider>
                    <ContactsProvider>
                        <ContractsProvider>
                            <MeterProvider>
                                <DocumentsProvider>
                                    <UserPermissionsProvider>
                                        <Container>
                                            <Row className="mb-4">
                                                <Col>
                                                    <Accordion defaultActiveKey="0" items={items} />
                                                </Col>
                                            </Row>

                                            <Row xs="auto" className="justify-content-end align-items-center my-2">
                                                <Col>
                                                    <Button variant="success">Save as Draft</Button>
                                                </Col>
                                                <Col>
                                                    <Button variant="success">Save and Publish</Button>
                                                </Col>
                                                <Col>
                                                    <Button variant="danger">Cancel</Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </UserPermissionsProvider>
                                </DocumentsProvider>
                            </MeterProvider>
                        </ContractsProvider>
                    </ContactsProvider>
                </CustomersProvider>
            </RFQProvider>
        </>
    );
};

export default RFQCreate;
