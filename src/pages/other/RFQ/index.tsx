import { PageTitle } from 'components';

import Customer from './components/Customer';
import Contract from './components/Contract';
import Accounts from './components/Accounts';

import { Accordion } from './components/UI';
import { ItemProps } from './components/UI/Accordion';

import { ContactsProvider, CustomersProvider } from './components/Customer/contexts';
import { ContractsProvider } from './components/Contract/contexts';
import { MeterProvider } from './components/Accounts/contexts';

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
                            <Accordion defaultActiveKey="3" items={items} />
                        </MeterProvider>
                    </ContractsProvider>
                </ContactsProvider>
            </CustomersProvider>
        </>
    );
};

export default RFQ;
