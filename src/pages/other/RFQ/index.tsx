import { PageTitle } from 'components';

import Customer from './components/Customer';
import Contract from './components/Contract';
import Accounts from './components/Accounts';

import { Accordion } from './components/UI';
import { ItemProps } from './components/UI/Accordion';

import { ContactsProvider, CustomersProvider } from './components/Customer/contexts';
import { ContractsProvider } from './components/Contract/contexts';
import { MeterProvider } from './components/Accounts/contexts';
import Documents from './components/Documents';
import { DocumentsProvider } from './components/Documents/contexts';
import UserPermissions from './components/UserPermissions';
import { UserPermissionsProvider } from './components/UserPermissions/contexts';

const RFQ = () => {
    const items: ItemProps[] = [
        { header: 'Rfq', content: <p>RFQ</p> },
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

            <CustomersProvider>
                <ContactsProvider>
                    <ContractsProvider>
                        <MeterProvider>
                            <DocumentsProvider>
                                <UserPermissionsProvider>
                                    <Accordion defaultActiveKey="6" items={items} />
                                </UserPermissionsProvider>
                            </DocumentsProvider>
                        </MeterProvider>
                    </ContractsProvider>
                </ContactsProvider>
            </CustomersProvider>
        </>
    );
};

export default RFQ;
