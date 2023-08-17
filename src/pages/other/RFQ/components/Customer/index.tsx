import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

import { useCountries, useStates } from '../../hooks';
import { useContacts, useCustomers } from './hooks';

import { Text, Select, TextArea } from '../UI/Form';

const Customer = () => {
    const {
        contacts,
        loading: loadingContacts,
        error: errorContact,
        formik: formikContact,
        contactSelected,
        setContactSelected,
    } = useContacts();

    const {
        customers,
        loading: loadingCustomers,
        error: errorCustomers,
        formik: formikCustomer,
        customerSelected,
        setCustomerSelected,
    } = useCustomers();

    const { countries, loading: loadingCountries, error: errorCountries } = useCountries();
    const { states, loading: loadingStates, error: errorStates } = useStates(formikCustomer.values.country);

    const handleCreateCustomer = () => formikCustomer.handleSubmit();

    const handleClearDataCustomer = () => {
        setCustomerSelected(null);
        formikCustomer.resetForm();
    };

    const handleClearDataContact = () => {
        setContactSelected(null);
        formikContact.resetForm();
    };

    const handleCreateContact = () => formikContact.handleSubmit();

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
                                    value={customerSelected?.name}
                                    handleChange={(e) =>
                                        setCustomerSelected(
                                            customers.find((customer) => customer.name === e.target.value) || null
                                        )
                                    }
                                    placeholder="Select a customer"
                                    inputGroupTextStart="Select an existing customer"
                                    controlId="customer"
                                    loading={loadingCustomers}
                                    fetchError={errorCustomers}
                                    options={customers.map((customer) => ({
                                        value: customer.name,
                                        label: customer.name,
                                    }))}
                                />
                            </Col>

                            {customerSelected?.logo && (
                                <Col sm={3}>
                                    <Image height={60} src={customerSelected?.logo} alt="logo" rounded />
                                </Col>
                            )}
                        </Row>

                        <Row className="align-items-start my-2">
                            <Col sm={4}>
                                <Text
                                    enabled={!customerSelected}
                                    controlId="name"
                                    name="name"
                                    label="Customer Name"
                                    value={!!customerSelected ? customerSelected?.name : formikCustomer.values.name}
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.name}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.name}
                                    placeholder="Name"
                                />
                            </Col>
                            <Col sm={4}>
                                <Text
                                    enabled={!customerSelected}
                                    controlId="legalBusinessName"
                                    name="legalBusinessName"
                                    label="Legal Business Name"
                                    value={
                                        !!customerSelected
                                            ? customerSelected?.legalBusinessName
                                            : formikCustomer.values.legalBusinessName
                                    }
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.legalBusinessName}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.legalBusinessName}
                                    placeholder="Legal Business Name"
                                />
                            </Col>
                            <Col sm={4}>
                                <Text
                                    enabled={!customerSelected}
                                    type="number"
                                    controlId="taxId"
                                    name="taxId"
                                    label="Tax Id"
                                    value={!!customerSelected ? customerSelected?.taxId : formikCustomer.values.taxId}
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.taxId}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.taxId}
                                    placeholder="Tax Id"
                                />
                            </Col>
                        </Row>

                        <Row className="align-items-start my-2">
                            <Col sm={4}>
                                <Text
                                    enabled={!customerSelected}
                                    controlId="address"
                                    name="address"
                                    label="Address"
                                    value={
                                        !!customerSelected ? customerSelected?.address : formikCustomer.values.address
                                    }
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.address}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.address}
                                    placeholder="Address"
                                />
                            </Col>

                            <Col sm={2}>
                                <Text
                                    enabled={!customerSelected}
                                    controlId="city"
                                    name="city"
                                    label="City"
                                    value={!!customerSelected ? customerSelected?.city : formikCustomer.values.city}
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.city}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.city}
                                    placeholder="City"
                                />
                            </Col>
                            <Col sm={2}>
                                {!customerSelected ? (
                                    <Select
                                        enabled={!!formikCustomer.values.country}
                                        controlId="state"
                                        name="state"
                                        label="State"
                                        value={formikCustomer.values.state}
                                        handleChange={formikCustomer.handleChange}
                                        handleBlur={formikCustomer.handleBlur}
                                        touched={formikCustomer.touched.state}
                                        error={formikCustomer.errors.state}
                                        placeholder="Select a state"
                                        options={states.map((state) => ({
                                            value: state.code,
                                            label: state.name,
                                        }))}
                                        loading={loadingStates}
                                        fetchError={errorStates}
                                    />
                                ) : (
                                    <Select
                                        enabled={false}
                                        value={customerSelected?.state}
                                        label="State"
                                        options={states.map((state) => ({
                                            value: state.code,
                                            label: state.name,
                                        }))}
                                    />
                                )}
                            </Col>
                            <Col sm={2}>
                                <Text
                                    enabled={!customerSelected}
                                    controlId="zip"
                                    name="zip"
                                    label="Postal Code"
                                    value={!!customerSelected ? customerSelected?.zip : formikCustomer.values.zip}
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.zip}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.zip}
                                    placeholder="Postal"
                                />
                            </Col>
                            <Col sm={2}>
                                {!customerSelected ? (
                                    <Select
                                        controlId="country"
                                        name="country"
                                        label="Country"
                                        value={formikCustomer.values.country}
                                        handleChange={formikCustomer.handleChange}
                                        handleBlur={formikCustomer.handleBlur}
                                        touched={formikCustomer.touched.country}
                                        error={formikCustomer.errors.country}
                                        placeholder="Select a country"
                                        options={countries.map((country) => ({
                                            value: country.code,
                                            label: country.name,
                                        }))}
                                        loading={loadingCountries}
                                        fetchError={errorCountries}
                                    />
                                ) : (
                                    <Select
                                        enabled={false}
                                        value={customerSelected?.country}
                                        label="Country"
                                        options={countries.map((country) => ({
                                            value: country.code,
                                            label: country.name,
                                        }))}
                                    />
                                )}
                            </Col>
                        </Row>

                        <Row className="align-items-start my-2">
                            <Col sm={4}>
                                <Text
                                    enabled={!customerSelected}
                                    controlId="domain"
                                    name="domain"
                                    label="Domain"
                                    value={!!customerSelected ? customerSelected?.domain : formikCustomer.values.domain}
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.domain}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.domain}
                                    placeholder="Domain"
                                />
                            </Col>
                            <Col sm={4}>
                                <Text
                                    enabled={!customerSelected}
                                    type="number"
                                    controlId="numberOfEmployees"
                                    name="numberOfEmployees"
                                    label="Number of Employees"
                                    value={
                                        !!customerSelected
                                            ? customerSelected?.numberOfEmployees
                                            : formikCustomer.values.numberOfEmployees
                                    }
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.numberOfEmployees}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.numberOfEmployees}
                                    placeholder="Number of Employees"
                                />
                            </Col>

                            <Col sm={4}>
                                <Text
                                    enabled={!customerSelected}
                                    type="number"
                                    controlId="founded"
                                    name="founded"
                                    label="Founded"
                                    value={
                                        !!customerSelected ? customerSelected?.founded : formikCustomer.values.founded
                                    }
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.founded}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.founded}
                                    placeholder="Founding Year"
                                />
                            </Col>
                        </Row>

                        <Row className="align-items-start my-2">
                            <Col sm={4}>
                                <Text
                                    enabled={!customerSelected}
                                    controlId="website"
                                    name="website"
                                    label="Website"
                                    value={
                                        !!customerSelected ? customerSelected?.website : formikCustomer.values.website
                                    }
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.website}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.website}
                                    placeholder="Website"
                                />
                            </Col>
                            <Col sm={4}>
                                <Text
                                    enabled={!customerSelected}
                                    type="number"
                                    controlId="duns"
                                    name="duns"
                                    label="DUNS"
                                    value={!!customerSelected ? customerSelected?.duns : formikCustomer.values.duns}
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.duns}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.duns}
                                    placeholder="DUNS"
                                />
                            </Col>
                        </Row>

                        <Row className="align-items-start mt-2">
                            <Col sm={12}>
                                <TextArea
                                    enabled={!customerSelected}
                                    controlId="about"
                                    name="about"
                                    label="About"
                                    value={!!customerSelected ? customerSelected?.about : formikCustomer.values.about}
                                    handleChange={!!customerSelected ? undefined : formikCustomer.handleChange}
                                    handleBlur={!!customerSelected ? undefined : formikCustomer.handleBlur}
                                    touched={!!customerSelected ? undefined : formikCustomer.touched.about}
                                    error={!!customerSelected ? undefined : formikCustomer.errors.about}
                                    placeholder="About"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
                <Card.Footer>
                    {customerSelected ? (
                        <Row>
                            <Col className="text-end">
                                <Button variant="danger" type="button" onClick={handleClearDataCustomer}>
                                    Clear Data
                                </Button>
                            </Col>
                        </Row>
                    ) : (
                        <Row>
                            <Col className="text-end">
                                <Button variant="primary" type="button" onClick={handleCreateCustomer}>
                                    <i className="mdi mdi-plus me-1"></i> <span>Create new customer</span>
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Card.Footer>
            </Card>

            <Card className="mt-3">
                <Card.Header>Contacts Info</Card.Header>
                <Card.Body>
                    <Container className="h-100">
                        <Row className="align-items-center mb-2">
                            <Col sm={5} className="contact-customer-select">
                                <Select
                                    name="contact"
                                    value={contactSelected?.emailAddress}
                                    handleChange={(e) =>
                                        setContactSelected(
                                            contacts.find((contact) => contact.emailAddress === e.target.value) || null
                                        )
                                    }
                                    placeholder="Select a contact"
                                    inputGroupTextStart="Select an existing contact"
                                    controlId="contact"
                                    loading={loadingContacts}
                                    fetchError={errorContact}
                                    options={contacts.map((contact) => ({
                                        value: contact.emailAddress,
                                        label: contact.firstName,
                                    }))}
                                />
                            </Col>
                        </Row>

                        <Row className="align-items-start my-2">
                            <Col sm={4}>
                                <Text
                                    enabled={!contactSelected}
                                    controlId="firstName"
                                    name="firstName"
                                    label="First Name"
                                    value={
                                        !!contactSelected ? contactSelected?.firstName : formikContact.values.firstName
                                    }
                                    handleChange={!!contactSelected ? undefined : formikContact.handleChange}
                                    handleBlur={!!contactSelected ? undefined : formikContact.handleBlur}
                                    touched={!!contactSelected ? undefined : formikContact.touched.firstName}
                                    error={!!contactSelected ? undefined : formikContact.errors.firstName}
                                    placeholder="First Name"
                                />
                            </Col>

                            <Col sm={4}>
                                <Text
                                    enabled={!contactSelected}
                                    controlId="lastName"
                                    name="lastName"
                                    label="Last Name"
                                    value={
                                        !!contactSelected ? contactSelected?.lastName : formikContact.values.lastName
                                    }
                                    handleChange={!!contactSelected ? undefined : formikContact.handleChange}
                                    handleBlur={!!contactSelected ? undefined : formikContact.handleBlur}
                                    touched={!!contactSelected ? undefined : formikContact.touched.lastName}
                                    error={!!contactSelected ? undefined : formikContact.errors.lastName}
                                    placeholder="Last Name"
                                />
                            </Col>

                            <Col sm={4}>
                                <Text
                                    enabled={!contactSelected}
                                    controlId="jobTitle"
                                    name="jobTitle"
                                    label="Job Title"
                                    value={
                                        !!contactSelected ? contactSelected?.jobTitle : formikContact.values.jobTitle
                                    }
                                    handleChange={!!contactSelected ? undefined : formikContact.handleChange}
                                    handleBlur={!!contactSelected ? undefined : formikContact.handleBlur}
                                    touched={!!contactSelected ? undefined : formikContact.touched.jobTitle}
                                    error={!!contactSelected ? undefined : formikContact.errors.jobTitle}
                                    placeholder="Job Title"
                                />
                            </Col>
                        </Row>

                        <Row className="align-items-start my-2">
                            <Col sm={4}>
                                <Text
                                    enabled={!contactSelected}
                                    controlId="primaryPhoneNumber"
                                    name="primaryPhoneNumber"
                                    label="Primary Phone Number"
                                    value={
                                        !!contactSelected
                                            ? contactSelected?.primaryPhoneNumber
                                            : formikContact.values.primaryPhoneNumber
                                    }
                                    handleChange={!!contactSelected ? undefined : formikContact.handleChange}
                                    handleBlur={!!contactSelected ? undefined : formikContact.handleBlur}
                                    touched={!!contactSelected ? undefined : formikContact.touched.primaryPhoneNumber}
                                    error={!!contactSelected ? undefined : formikContact.errors.primaryPhoneNumber}
                                    placeholder="(555) 555-5555"
                                />
                            </Col>

                            <Col sm={4}>
                                <Text
                                    enabled={!contactSelected}
                                    controlId="emailAddress"
                                    name="emailAddress"
                                    label="Email Address"
                                    value={
                                        !!contactSelected
                                            ? contactSelected?.emailAddress
                                            : formikContact.values.emailAddress
                                    }
                                    handleChange={!!contactSelected ? undefined : formikContact.handleChange}
                                    handleBlur={!!contactSelected ? undefined : formikContact.handleBlur}
                                    touched={!!contactSelected ? undefined : formikContact.touched.emailAddress}
                                    error={!!contactSelected ? undefined : formikContact.errors.emailAddress}
                                    placeholder="johndoe@company.com"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
                <Card.Footer>
                    {contactSelected ? (
                        <Row>
                            <Col className="text-end">
                                <Button variant="danger" type="button" onClick={handleClearDataContact}>
                                    Clear Data
                                </Button>
                            </Col>
                        </Row>
                    ) : (
                        <Row>
                            <Col className="text-end">
                                <Button variant="primary" type="button" onClick={handleCreateContact}>
                                    <i className="mdi mdi-plus me-1"></i> <span>Create new contact</span>
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Card.Footer>
            </Card>
        </Container>
    );
};

export default Customer;
