import { PageTitle } from 'components';

import Customer from './components/Customer';
import Contract from './components/Contract';

import { Accordion } from './components/UI';
import { ItemProps } from './components/UI/Accordion';

import { ContactsProvider } from './components/Customer/contexts';
import { CustomersProvider } from './components/Customer/contexts';
import { ContractsProvider } from './components/Contract/contexts';

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
                        <Accordion defaultActiveKey="0" items={items} />
                    </ContractsProvider>
                </ContactsProvider>
            </CustomersProvider>
        </>
    );
};

export default RFQ;
