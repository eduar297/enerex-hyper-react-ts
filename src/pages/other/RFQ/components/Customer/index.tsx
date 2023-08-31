import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

import { useCountries, useStates } from '../../hooks';
import { useContacts, useCustomers } from './hooks';

import { Text, Select, TextArea } from '../UI/Form';
import { useEffect } from 'react';

const Customer = () => {
    const {
        customersChoice,

        customerChoiceSelected,
        setCustomerChoiceSelected,

        customerSelected,
        setCustomerSelected,

        loadingCustomersChoice,

        errorCustomersChoice,

        formik: formikCustomer,
    } = useCustomers();

    const {
        contactsChoice,

        contactChoiceSelected,
        setContactChoiceSelected,

        contactSelected,
        setContactSelected,

        loadingContactsChoice,

        errorContactsChoice,

        formik: formikContact,
    } = useContacts(!!customerSelected ? customerSelected?.Id?.toString() || '' : '');

    const { countries, loading: loadingCountries, error: errorCountries } = useCountries();

    const {
        states,
        loading: loadingStates,
        error: errorStates,
    } = useStates(!!customerSelected ? customerSelected.CountryId || '' : formikCustomer.values.CountryId || '');

    const handleCreateCustomer = () => formikCustomer.handleSubmit();

    const handleClearDataCustomer = () => {
        setCustomerSelected(null);
        setCustomerChoiceSelected(null);
        formikCustomer.resetForm();
    };

    const handleClearDataContact = () => {
        setContactSelected(null);
        setContactChoiceSelected(null);
        formikContact.resetForm();
    };

    const handleCreateContact = () => formikContact.handleSubmit();

    useEffect(() => {
        console.log({ states });
    }, [states]);

    useEffect(() => {
        console.log({ customerSelected });
    }, [customerSelected]);

    useEffect(() => {
        console.log({ formik: formikCustomer.values });
    }, [formikCustomer]);

    return (
        <Container fluid>
            <Card>
                <Card.Header>Customer Info</Card.Header>
                <Card.Body>
                    <Container className="h-100">
                        <Row className="align-items-center mb-2">
                            <Col sm={5} className="existing-customer-select">
                                <Select
                                    name="customer"
                                    value={!!customerChoiceSelected ? customerChoiceSelected?.id : ''}
                                    handleChange={(e) =>
                                        setCustomerChoiceSelected(
                                            customersChoice.find((customer) => customer.id === e.target.value) || null
                                        )
                                    }
                                    placeholder="Select a customer"
                                    inputGroupTextStart="Select an existing customer"
                                    controlId="customer"
                                    loading={loadingCustomersChoice}
                                    fetchError={errorCustomersChoice}
                                    options={customersChoice.map((customer) => ({
                                        value: customer.id,
                                        label: customer.text,
                                    }))}
                                />
                            </Col>

                            {customerSelected?.LogoUrl && (
                                <Col sm={3}>
                                    <Image height={60} src={customerSelected?.LogoUrl} alt="logo" rounded />
                                </Col>
                            )}

                            {formikCustomer.values?.LogoUrl && (
                                <Col sm={3}>
                                    <Image height={60} src={formikCustomer.values.LogoUrl || ''} alt="logo" rounded />
                                </Col>
                            )}
                        </Row>

                        <Row className="align-items-start my-2">
                            <Col sm={4}>
                                <Text
                                    enabled={!customerSelected}
                                    controlId="Name"
                                    name="Name"
                                    label="Customer Name"
                                    value={!!customerSelected ? customerSelected?.Name : formikCustomer.values.Name}
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.Name}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.Name}
                                    placeholder="Name"
                                />
                            </Col>
                            <Col sm={4}>
                                <Text
                                    enabled={!customerSelected}
                                    controlId="AccountLegalName"
                                    name="AccountLegalName"
                                    label="Legal Business Name"
                                    value={
                                        !!customerSelected
                                            ? customerSelected?.AccountLegalName || ''
                                            : formikCustomer.values.AccountLegalName || ''
                                    }
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.AccountLegalName}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.AccountLegalName}
                                    placeholder="Legal Business Name"
                                />
                            </Col>
                            <Col sm={4}>
                                <Text
                                    enabled={!customerSelected}
                                    type="number"
                                    controlId="TaxID"
                                    name="TaxID"
                                    label="Tax Id"
                                    value={
                                        !!customerSelected
                                            ? customerSelected?.TaxID || ''
                                            : formikCustomer.values.TaxID || ''
                                    }
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.TaxID}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.TaxID}
                                    placeholder="Tax Id"
                                />
                            </Col>
                        </Row>

                        <Row className="align-items-start my-2">
                            <Col sm={4}>
                                <Text
                                    enabled={!customerSelected}
                                    controlId="Address"
                                    name="Address"
                                    label="Address"
                                    value={
                                        !!customerSelected
                                            ? customerSelected?.Address || ''
                                            : formikCustomer.values.Address || ''
                                    }
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.Address}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.Address}
                                    placeholder="Address"
                                />
                            </Col>

                            <Col sm={2}>
                                <Text
                                    enabled={!customerSelected}
                                    controlId="City"
                                    name="City"
                                    label="City"
                                    value={
                                        !!customerSelected
                                            ? customerSelected?.City || ''
                                            : formikCustomer.values.City || ''
                                    }
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.City}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.City}
                                    placeholder="City"
                                />
                            </Col>
                            <Col sm={2}>
                                <Select
                                    enabled={!customerSelected && !!formikCustomer.values.CountryId}
                                    controlId="StateId"
                                    name="StateId"
                                    label="State"
                                    value={
                                        !!customerSelected
                                            ? customerSelected?.StateId || ''
                                            : formikCustomer?.values?.StateId || ''
                                    }
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.StateId}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.StateId}
                                    placeholder="Select a state"
                                    options={states.map((state) => ({
                                        value: state.id,
                                        label: state.name,
                                    }))}
                                    loading={!!customerSelected ? undefined : loadingStates}
                                    fetchError={!!customerSelected ? undefined : errorStates}
                                />
                            </Col>
                            <Col sm={2}>
                                <Text
                                    enabled={!customerSelected}
                                    controlId="PostalCode"
                                    name="PostalCode"
                                    label="Postal Code"
                                    value={
                                        !!customerSelected
                                            ? customerSelected?.PostalCode || ''
                                            : formikCustomer.values.PostalCode || ''
                                    }
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.PostalCode}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.PostalCode}
                                    placeholder="Postal"
                                />
                            </Col>
                            <Col sm={2}>
                                <Select
                                    enabled={!customerSelected}
                                    controlId="CountryId"
                                    name="CountryId"
                                    label="Country"
                                    value={
                                        !!customerSelected
                                            ? customerSelected?.CountryId || ''
                                            : formikCustomer?.values?.CountryId || ''
                                    }
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.CountryId}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.CountryId}
                                    placeholder="Select a country"
                                    options={countries.map((country) => ({
                                        value: country.id,
                                        label: country.name,
                                    }))}
                                    loading={!!customerSelected ? undefined : loadingCountries}
                                    fetchError={!!customerSelected ? undefined : errorCountries}
                                />
                            </Col>
                        </Row>

                        <Row className="align-items-start my-2">
                            <Col sm={4}>
                                <Text
                                    enabled={!customerSelected}
                                    controlId="Domain"
                                    name="Domain"
                                    label="Domain"
                                    value={
                                        !!customerSelected
                                            ? customerSelected?.Domain || ''
                                            : formikCustomer.values.Domain || ''
                                    }
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.Domain}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.Domain}
                                    placeholder="Domain"
                                />
                            </Col>
                            <Col sm={4}>
                                <Text
                                    enabled={!customerSelected}
                                    type="number"
                                    controlId="NumberOfEmployees"
                                    name="NumberOfEmployees"
                                    label="Number of Employees"
                                    value={
                                        !!customerSelected
                                            ? customerSelected?.NumberOfEmployees || ''
                                            : formikCustomer.values.NumberOfEmployees || ''
                                    }
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.NumberOfEmployees}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.NumberOfEmployees}
                                    placeholder="Number of Employees"
                                />
                            </Col>

                            <Col sm={4}>
                                <Text
                                    enabled={!customerSelected}
                                    type="number"
                                    controlId="Founded  "
                                    name="Founded"
                                    label="Founded"
                                    value={
                                        !!customerSelected
                                            ? customerSelected?.Founded || ''
                                            : formikCustomer.values.Founded || ''
                                    }
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.Founded}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.Founded}
                                    placeholder="Founding Year"
                                />
                            </Col>
                        </Row>

                        <Row className="align-items-start my-2">
                            <Col sm={4}>
                                <Text
                                    enabled={!customerSelected}
                                    controlId="Website"
                                    name="Website"
                                    label="Website"
                                    value={
                                        !!customerSelected
                                            ? customerSelected?.Website || ''
                                            : formikCustomer.values.Website || ''
                                    }
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.Website}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.Website}
                                    placeholder="Website"
                                />
                            </Col>
                            <Col sm={4}>
                                <Text
                                    enabled={!customerSelected}
                                    type="number"
                                    controlId="DUNS"
                                    name="DUNS"
                                    label="DUNS"
                                    value={
                                        !!customerSelected
                                            ? customerSelected?.DUNS || ''
                                            : formikCustomer.values.DUNS || ''
                                    }
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.DUNS}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.DUNS}
                                    placeholder="DUNS"
                                />
                            </Col>
                        </Row>

                        <Row className="align-items-start mt-2">
                            <Col sm={12}>
                                <TextArea
                                    enabled={!customerSelected}
                                    controlId="About"
                                    name="About"
                                    label="About"
                                    value={
                                        !!customerSelected
                                            ? customerSelected?.About || ''
                                            : formikCustomer.values.About || ''
                                    }
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.About}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.About}
                                    placeholder="About"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <Col className="text-end">
                            {customerSelected ? (
                                <Button variant="danger" type="button" onClick={handleClearDataCustomer}>
                                    Clear Data
                                </Button>
                            ) : (
                                <Button variant="primary" type="button" onClick={handleCreateCustomer}>
                                    <i className="mdi mdi-plus me-1"></i> <span>Create new customer</span>
                                </Button>
                            )}
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>

            <Card className="mt-3">
                <Card.Header>Contacts Info</Card.Header>
                <Card.Body>
                    <Container className="h-100">
                        <Row className="align-items-center mb-2">
                            <Col sm={5} className="contact-customer-select">
                                <Select
                                    enabled={!contactSelected && !!customerSelected}
                                    name="contact"
                                    value={!!contactChoiceSelected ? contactChoiceSelected?.id : ''}
                                    handleChange={(e) =>
                                        setContactChoiceSelected(
                                            contactsChoice.find((contact) => contact.id === e.target.value) || null
                                        )
                                    }
                                    placeholder="Select a contact"
                                    inputGroupTextStart="Select an existing contact"
                                    controlId="contact"
                                    loading={loadingContactsChoice}
                                    fetchError={errorContactsChoice}
                                    options={contactsChoice.map((contact) => ({
                                        value: contact.id,
                                        label: contact.text,
                                    }))}
                                />
                            </Col>
                        </Row>

                        <Row className="align-items-start my-2">
                            <Col sm={4}>
                                <Text
                                    enabled={!contactSelected && !!customerSelected}
                                    controlId="FirstName"
                                    name="FirstName"
                                    label="First Name"
                                    value={
                                        !!contactSelected
                                            ? contactSelected?.FirstName || ''
                                            : formikContact.values.FirstName || ''
                                    }
                                    handleChange={!!contactSelected ? undefined : formikContact.handleChange}
                                    handleBlur={!!contactSelected ? undefined : formikContact.handleBlur}
                                    touched={!!contactSelected ? undefined : formikContact.touched.FirstName}
                                    error={!!contactSelected ? undefined : formikContact.errors.FirstName}
                                    placeholder="First Name"
                                />
                            </Col>

                            <Col sm={4}>
                                <Text
                                    enabled={!contactSelected && !!customerSelected}
                                    controlId="LastName"
                                    name="LastName"
                                    label="Last Name"
                                    value={
                                        !!contactSelected
                                            ? contactSelected?.LastName || ''
                                            : formikContact.values.LastName || ''
                                    }
                                    handleChange={!!contactSelected ? undefined : formikContact.handleChange}
                                    handleBlur={!!contactSelected ? undefined : formikContact.handleBlur}
                                    touched={!!contactSelected ? undefined : formikContact.touched.LastName}
                                    error={!!contactSelected ? undefined : formikContact.errors.LastName}
                                    placeholder="Last Name"
                                />
                            </Col>

                            <Col sm={4}>
                                <Text
                                    enabled={!contactSelected && !!customerSelected}
                                    controlId="JobTitle"
                                    name="JobTitle"
                                    label="Job Title"
                                    value={
                                        !!contactSelected
                                            ? contactSelected?.JobTitle || ''
                                            : formikContact.values.JobTitle || ''
                                    }
                                    handleChange={!!contactSelected ? undefined : formikContact.handleChange}
                                    handleBlur={!!contactSelected ? undefined : formikContact.handleBlur}
                                    touched={!!contactSelected ? undefined : formikContact.touched.JobTitle}
                                    error={!!contactSelected ? undefined : formikContact.errors.JobTitle}
                                    placeholder="Job Title"
                                />
                            </Col>
                        </Row>

                        <Row className="align-items-start my-2">
                            <Col sm={4}>
                                <Text
                                    enabled={!contactSelected && !!customerSelected}
                                    controlId="Phone"
                                    name="Phone"
                                    label="Primary Phone Number"
                                    value={
                                        !!contactSelected
                                            ? contactSelected?.Phone || ''
                                            : formikContact.values.Phone || ''
                                    }
                                    handleChange={!!contactSelected ? undefined : formikContact.handleChange}
                                    handleBlur={!!contactSelected ? undefined : formikContact.handleBlur}
                                    touched={!!contactSelected ? undefined : formikContact.touched.Phone}
                                    error={!!contactSelected ? undefined : formikContact.errors.Phone}
                                    placeholder="(555) 555-5555"
                                />
                            </Col>

                            <Col sm={4}>
                                <Text
                                    enabled={!contactSelected && !!customerSelected}
                                    controlId="Email"
                                    name="Email"
                                    label="Email Address"
                                    value={
                                        !!contactSelected
                                            ? contactSelected?.Email || ''
                                            : formikContact.values.Email || ''
                                    }
                                    handleChange={!!contactSelected ? undefined : formikContact.handleChange}
                                    handleBlur={!!contactSelected ? undefined : formikContact.handleBlur}
                                    touched={!!contactSelected ? undefined : formikContact.touched.Email}
                                    error={!!contactSelected ? undefined : formikContact.errors.Email}
                                    placeholder="johndoe@company.com"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <Col className="text-end">
                            {contactSelected ? (
                                <Button variant="danger" type="button" onClick={handleClearDataContact}>
                                    Clear Data
                                </Button>
                            ) : (
                                <Button variant="primary" type="button" onClick={handleCreateContact}>
                                    <i className="mdi mdi-plus me-1"></i> <span>Create new contact</span>
                                </Button>
                            )}
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </Container>
    );
};

export default Customer;
