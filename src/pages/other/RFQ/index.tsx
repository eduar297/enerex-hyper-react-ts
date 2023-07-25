import { PageTitle } from 'components';

import Customer from './components/Customer';
import { Accordion } from './components/UI';
import { ItemProps } from './components/UI/Accordion';
import { ContactsProvider, CustomersProvider } from './contexts';

const RFQ = () => {
    const items: ItemProps[] = [
        { header: 'Rfq', content: <p>RFQ</p> },
        {
            header: 'Customer',
            content: <Customer />,
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
                    <Accordion defaultActiveKey="1" items={items} />
                </ContactsProvider>
            </CustomersProvider>
        </>
    );
};

export default RFQ;
