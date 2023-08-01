import { Button, Col, Container, ProgressBar, Row } from 'react-bootstrap';

import { PageTitle } from 'components';

import Customer from './components/Customer';
import Contracts from './components/Contract';
import Accounts from './components/Accounts';
import UserPermissions from './components/UserPermissions';
import Documents from './components/Documents';

import { ContactsProvider, CustomersProvider } from './components/Customer/contexts';
import { ContractsProvider } from './components/Contract/contexts';
import { AccountProvider, MeterProvider } from './components/Accounts/contexts';
import { DocumentsProvider } from './components/Documents/contexts';
import { UserPermissionsProvider } from './components/UserPermissions/contexts';

import { Step, Steps, Wizard } from 'react-albus';
import { ReactNode } from 'react';
import { useCustomers } from './components/Customer/hooks';
import { useContracts } from './components/Contract/hooks';
import { Ribbon } from './components/UI';

export const RootProvider = ({ children }: { children: ReactNode }) => {
    return (
        <CustomersProvider>
            <ContactsProvider>
                <ContractsProvider>
                    <AccountProvider>
                        <MeterProvider>
                            <DocumentsProvider>
                                <UserPermissionsProvider>{children}</UserPermissionsProvider>
                            </DocumentsProvider>
                        </MeterProvider>
                    </AccountProvider>
                </ContractsProvider>
            </ContactsProvider>
        </CustomersProvider>
    );
};

type THeader = 'customer' | 'contract' | 'accounts' | 'documents' | 'invitation' | 'userPermissions';

type WizardActionsProps = {
    header: THeader;
    next: () => void;
    previous: () => void;
    index: number;
    len: number;
};

const WizardActions = ({ header, next, previous, index, len }: WizardActionsProps) => {
    const { customerSelected } = useCustomers();
    const { formik: formikContracts } = useContracts();

    let disableNext = false;

    switch (header) {
        case 'customer':
            disableNext = !Boolean(customerSelected.domain);
            break;
        case 'accounts':
            disableNext = false;
            break;
        case 'contract':
            disableNext = !formikContracts.dirty || !formikContracts.isValid;
            break;
        case 'documents':
            disableNext = false;
            break;
        case 'invitation':
            disableNext = false;
            break;
        case 'userPermissions':
            disableNext = false;
            break;
    }

    const canNext = index < len - 1;
    const canPrevious = index > 0;
    const canFinish = index === len - 1;

    const finish = () => alert('Finish');

    return (
        <ul className="list-inline wizard mb-0">
            {canPrevious && (
                <li className="previous list-inline-item">
                    <Button onClick={previous} variant="info">
                        Previous
                    </Button>
                </li>
            )}

            {canNext && (
                <li className="next list-inline-item float-end">
                    <Button onClick={next} variant="primary" disabled={disableNext}>
                        Next
                    </Button>
                </li>
            )}

            {canFinish && (
                <>
                    <li className="next list-inline-item float-end mx-2">
                        <Button variant="danger" onClick={finish}>
                            Cancel
                        </Button>
                    </li>
                    <li className="next list-inline-item float-end">
                        <Button variant="success" onClick={finish}>
                            Submit
                        </Button>
                    </li>
                </>
            )}
        </ul>
    );
};

const RFQCreate = () => {
    const items = [
        {
            header: 'Customer',
            content: (next: () => void, previous: () => void, index: number, len: number) => (
                <>
                    <Customer />
                    <WizardActions header="customer" next={next} previous={previous} index={index} len={len} />
                </>
            ),
        },
        {
            header: 'Contract',
            content: (next: () => void, previous: () => void, index: number, len: number) => (
                <>
                    <Contracts />
                    <WizardActions header="contract" next={next} previous={previous} index={index} len={len} />
                </>
            ),
        },
        {
            header: 'Accounts',
            content: (next: () => void, previous: () => void, index: number, len: number) => (
                <>
                    <Accounts />
                    <WizardActions header="accounts" next={next} previous={previous} index={index} len={len} />
                </>
            ),
        },
        {
            header: 'Documents',
            content: (next: () => void, previous: () => void, index: number, len: number) => (
                <>
                    <Documents />,
                    <WizardActions header="documents" next={next} previous={previous} index={index} len={len} />
                </>
            ),
        },
        {
            header: 'Invitation',
            content: (next: () => void, previous: () => void, index: number, len: number) => (
                <>
                    <p>Invitation</p>
                    <WizardActions header="invitation" next={next} previous={previous} index={index} len={len} />
                </>
            ),
        },
        {
            header: 'User Permissions (Opcional)',
            content: (next: () => void, previous: () => void, index: number, len: number) => (
                <>
                    <UserPermissions />
                    <WizardActions header="userPermissions" next={next} previous={previous} index={index} len={len} />
                </>
            ),
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
                            <Wizard
                                render={({ step, steps }) => (
                                    <>
                                        <Ribbon
                                            color="success"
                                            direction="left"
                                            label={
                                                steps.indexOf(step) >= 0 && steps.indexOf(step) < items.length
                                                    ? items[steps.indexOf(step)].header
                                                    : ''
                                            }>
                                            <Row>
                                                <Col>
                                                    <ProgressBar
                                                        animated
                                                        striped
                                                        variant="success"
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
                                                                render={({ next, previous }) => {
                                                                    const content = item.content(
                                                                        next,
                                                                        previous,
                                                                        index,
                                                                        items.length
                                                                    );

                                                                    return content;
                                                                }}
                                                            />
                                                        ))}
                                                    </Steps>
                                                </Col>
                                            </Row>
                                        </Ribbon>
                                    </>
                                )}
                            />
                        </Col>
                    </Row>
                </Container>
            </RootProvider>
        </>
    );
};

export default RFQCreate;
