import { apiFetch } from 'pages/other/RFQ/api';
import { Contact, ContactChoice } from '../contracts';

const getAllContactsSelectByCustomerId = async (customerId: string) => {
    const data: ContactChoice[] = await apiFetch('GET', `Contacts/select/${customerId}`);
    if (!data) {
        throw new Error('Failed to fetch contacts');
    }
    const contacts: ContactChoice[] = data;
    return contacts;
};

const getContact = async (contactId: string) => {
    const data: Contact = await apiFetch('GET', `contacts/getById/${contactId}`);
    if (!data) {
        throw new Error('Failed to fetch contact');
    }
    const contact: Contact = data;
    return contact;
};

// const getContact = (contactId: string): Promise<Contact> => {
//     const contacts: Record<string, Contact> = {
//         'IUOXkpnWJisEFw2Rd_twL09uzCkOvmwX9hScjRQRrnj5RmWj-kX3Cq3qktBEDcV6M_ZkwQQOsgHD227afBJpDUCqBAtEEUejDMj1kni9Qr01':
//             {
//                 FirstName: 'Eduardo',
//                 LastName: 'Moreira',
//                 JobTitle: 'software developer',
//                 Phone: '058286995',
//                 Email: 'eduar2.moreira@gmail.com',
//             },
//     };

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             switch (contactId) {
//                 case 'IUOXkpnWJisEFw2Rd_twL09uzCkOvmwX9hScjRQRrnj5RmWj-kX3Cq3qktBEDcV6M_ZkwQQOsgHD227afBJpDUCqBAtEEUejDMj1kni9Qr01':
//                     resolve(
//                         contacts[
//                             'IUOXkpnWJisEFw2Rd_twL09uzCkOvmwX9hScjRQRrnj5RmWj-kX3Cq3qktBEDcV6M_ZkwQQOsgHD227afBJpDUCqBAtEEUejDMj1kni9Qr01'
//                         ]
//                     );
//                     break;

//                 default:
//                     reject(new Error('Invalid contact id'));
//             }
//         }, 1000);
//     });
// };

// const getAllContactsSelect = (): Promise<ContactChoice[]> => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([
//                 {
//                     id: 'IUOXkpnWJisEFw2Rd_twL09uzCkOvmwX9hScjRQRrnj5RmWj-kX3Cq3qktBEDcV6M_ZkwQQOsgHD227afBJpDUCqBAtEEUejDMj1kni9Qr01',
//                     text: 'Eduardo Moreira',
//                 },
//             ]);
//         }, 1000);
//     });
// };

export const contactService = {
    getAllContactsSelectByCustomerId,
    getContact,
};
