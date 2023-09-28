import { ReactNode, useEffect, useState } from 'react';

import { Button, Card, Col, Nav, ProgressBar, Row, Tab } from 'react-bootstrap';

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
import { CurrentUserProvider } from './contexts';

import { useCustomers } from './components/Customer/hooks';
import { useContracts } from './components/Contract/hooks';
import { useAccounts } from './components/Accounts/hooks';
import { useRFQs } from './components/RFQ/hooks';
import { useCurrentUser } from './hooks';

import { Item } from './contracts';
import { RFQProvider } from './components/RFQ/contexts';
import RFQ from './components/RFQ';

type RootProps = {
    children: ReactNode;
};

export const RootProvider = ({ children }: RootProps) => {
    return (
        <CurrentUserProvider>
            <RFQProvider>
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
            </RFQProvider>
        </CurrentUserProvider>
    );
};

type THeader = 'rfq' | 'customer' | 'contract' | 'accounts' | 'documents' | 'invitation' | 'userPermissions';

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
    const { selectedUtilities, numberOfAccounts } = useAccounts();
    const { formik: formikRfq } = useRFQs();

    let disableNext = false;

    switch (header) {
        case 'rfq':
            disableNext = !formikRfq.dirty || !formikRfq.isValid;
            break;
        case 'customer':
            disableNext = !customerSelected;
            break;
        case 'accounts':
            disableNext = !Boolean(numberOfAccounts) || selectedUtilities.length === 0;
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

const NavItem = ({ index, header, disabled }: { index: number; header: string; disabled: boolean }) => {
    return (
        <Nav.Item key={index.toString()}>
            <Nav.Link href="#" eventKey={header} disabled={disabled}>
                <span className="d-none d-md-block">{header}</span>
            </Nav.Link>
        </Nav.Item>
    );
};

const NavList = ({ items }: { items: Item[] }) => {
    const { currentUserData } = useCurrentUser();
    const { customerSelected } = useCustomers();
    const { formik: formikContracts } = useContracts();
    const { selectedUtilities, numberOfAccounts } = useAccounts();
    const { formik: formikRfq } = useRFQs();

    // const [enabled, setEnabled] = useState<{ [key: string]: boolean }>({
    //     rfq: true,
    //     customer: true,
    //     contract: true,
    //     accounts: true,
    //     documents: true,
    //     invitation: true,
    //     'user-permissions': true,
    // });
    const [enabled, setEnabled] = useState<{ [key: string]: boolean }>({
        rfq: true,
        customer: false,
        contract: false,
        accounts: true,
        documents: false,
        invitation: false,
        'user-permissions': false,
    });

    // useEffect(() => {
    //     setEnabled((prevEnabled) => ({
    //         rfq: true,
    //         customer:
    //             currentUserData?.IsBrokerInSupplierCompany === false
    //                 ? true
    //                 : prevEnabled['rfq'] && formikRfq.dirty && formikRfq.isValid,
    //         contract: prevEnabled['customer'] && !!customerSelected,
    //         accounts: prevEnabled['contract'] && formikContracts.dirty && formikContracts.isValid,
    //         documents:
    //             prevEnabled['accounts'] &&
    //             selectedUtilities.length > 0 &&
    //             Boolean(numberOfAccounts && numberOfAccounts > 0),
    //         invitation:
    //             prevEnabled['accounts'] &&
    //             selectedUtilities.length > 0 &&
    //             Boolean(numberOfAccounts && numberOfAccounts > 0),
    //         'user-permissions':
    //             prevEnabled['accounts'] &&
    //             selectedUtilities.length > 0 &&
    //             Boolean(numberOfAccounts && numberOfAccounts > 0),
    //     }));
    // }, [
    //     customerSelected,
    //     formikContracts.dirty,
    //     formikContracts.isValid,
    //     selectedUtilities,
    //     numberOfAccounts,
    //     setEnabled,
    //     formikRfq.dirty,
    //     formikRfq.isValid,
    //     currentUserData?.IsBrokerInSupplierCompany,
    // ]);

    return (
        <Nav variant="tabs" justify className="tab-create-rfq-container">
            {items.map((item, index) => (
                <NavItem header={item.header} index={index} disabled={!enabled[item.id]} />
            ))}
        </Nav>
    );
};

const RFQCreate = () => {
    const { currentUserData } = useCurrentUser();

    const [items, setItems] = useState<Item[]>([
        {
            id: 'customer',
            header: 'Customer',
            content: (next: () => void, previous: () => void, index: number, len: number) => (
                <>
                    <Customer />
                    <WizardActions header="customer" next={next} previous={previous} index={index} len={len} />
                </>
            ),
        },
        {
            id: 'contract',
            header: 'Contract',
            content: (next: () => void, previous: () => void, index: number, len: number) => (
                <>
                    <Contracts />
                    <WizardActions header="contract" next={next} previous={previous} index={index} len={len} />
                </>
            ),
        },
        {
            id: 'accounts',
            header: 'Accounts',
            content: (next: () => void, previous: () => void, index: number, len: number) => (
                <>
                    <Accounts />
                    <WizardActions header="accounts" next={next} previous={previous} index={index} len={len} />
                </>
            ),
        },
        {
            id: 'documents',
            header: 'Documents',
            content: (next: () => void, previous: () => void, index: number, len: number) => (
                <>
                    <Documents />,
                    <WizardActions header="documents" next={next} previous={previous} index={index} len={len} />
                </>
            ),
        },
    ]);

    useEffect(() => {
        if (currentUserData?.IsBrokerInSupplierCompany === false) {
            const userPermissionsItem = {
                id: 'user-permissions',
                header: 'User Permissions (Optional)',
                content: (next: () => void, previous: () => void, index: number, len: number) => (
                    <>
                        <UserPermissions />
                        <WizardActions
                            header="userPermissions"
                            next={next}
                            previous={previous}
                            index={index}
                            len={len}
                        />
                    </>
                ),
            };

            const rfqItem = {
                id: 'rfq',
                header: 'RFQ',
                content: (next: () => void, previous: () => void, index: number, len: number) => (
                    <>
                        <RFQ />
                        <WizardActions header="rfq" next={next} previous={previous} index={index} len={len} />
                    </>
                ),
            };

            if (!items.find((item) => item.id === userPermissionsItem.id)) {
                setItems([...items, userPermissionsItem]);
            }

            if (!items.find((item) => item.id === rfqItem.id)) {
                setItems([...items, rfqItem]);
            }
        }
    }, [currentUserData, items]);

    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => {
        if (activeIndex < items.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
    };

    const previous = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    const handleSelect = (eventKey: string | null) => {
        const selectedIndex = items.findIndex((item) => item.header === eventKey);
        setActiveIndex(selectedIndex);
    };

    return (
        <RootProvider>
            <Card>
                <Card.Body className="p-2">
                    <Tab.Container
                        defaultActiveKey="Customer"
                        activeKey={items[activeIndex].header}
                        onSelect={handleSelect}>
                        <NavList items={items} />

                        <ProgressBar
                            animated
                            striped
                            variant="info"
                            now={((activeIndex + 1) / items.length) * 100}
                            className="my-3 progress-sm progress-md"
                        />

                        <Tab.Content>
                            {items.map((item, index) => (
                                <Tab.Pane eventKey={item.header} id={item.id} key={index.toString()}>
                                    <Row>
                                        <Col sm="12">{item.content(next, previous, index, items.length)}</Col>
                                    </Row>
                                </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </Tab.Container>
                </Card.Body>
            </Card>
        </RootProvider>
    );
};

const RFQCreateWrapper = () => {
    return (
        <RootProvider>
            <RFQCreate />
        </RootProvider>
    );
};

export default RFQCreateWrapper;
