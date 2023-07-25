import { useState } from 'react';

import logoImg from '../../../../../assets/images/file-searching.svg';

import { ContactFormValues } from './types';
import { useCountries, useStates, useCustomers, useContacts } from '../../hooks';

import Form, { Text, Select, TextArea, FileUpload, Multiselect } from '../UI/Form';
import Modal, { ModalBody, ModalFooter, ModalHeader, ModalTitle } from '../UI/Modal';
import { getPasswordStrength, getProgressBarInfo } from '../../utils';
import { Button, Card, Col, Container, Image, ProgressBar, Row } from 'react-bootstrap';

const Customer = () => {
    const {
        contacts,
        loading: loadingContacts,
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

    const [showCreateCustomerModal, setShowCreateCustomerModal] = useState(false);
    const [showCreateContactModal, setShowCreateContactModal] = useState(false);

    const handleCreateCustomerModalClose = () => {
        formikCustomer.resetForm();
        formikCustomer.setErrors({});
        setShowCreateCustomerModal(false);
    };
    const handleCreateCustomerModalShow = () => setShowCreateCustomerModal(true);

    const handleCreateContactModalClose = () => {
        formikContact.resetForm();
        formikCustomer.setErrors({});
        setShowCreateContactModal(false);
    };
    const handleCreateContactModalShow = () => setShowCreateContactModal(true);

    const passwordStrength = getPasswordStrength(formikContact.values.password);
    const { percentage, label, color } = getProgressBarInfo(passwordStrength);

    return (
        <Container fluid>
            <Modal handleClose={handleCreateCustomerModalClose} show={showCreateCustomerModal}>
                <Form id="customer-frm" onSubmit={formikCustomer.handleSubmit}>
                    <ModalHeader>
                        <ModalTitle>Create new customer</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <div style={{ overflowY: 'auto', maxHeight: '30rem' }}>
                            <Container className="my-1">
                                <Row className="align-items-end mb-2">
                                    <Col sm={4}>
                                        <Text
                                            controlId="name"
                                            name="name"
                                            label="Customer Name"
                                            inputGroupText="@"
                                            value={formikCustomer.values.name}
                                            handleChange={formikCustomer.handleChange}
                                            handleBlur={formikCustomer.handleBlur}
                                            touched={formikCustomer.touched.name}
                                            error={formikCustomer.errors.name}
                                            placeholder="Name"
                                        />
                                    </Col>

                                    <Col sm={4}>
                                        <FileUpload
                                            controlId="logo"
                                            name="logo"
                                            label="Logo"
                                            handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                e.target.files &&
                                                    formikCustomer.setFieldValue('logo', e.target.files[0]);
                                            }}
                                            handleBlur={formikCustomer.handleBlur}
                                            touched={formikCustomer.touched.logo}
                                            error={formikCustomer.errors.logo}
                                        />
                                    </Col>

                                    <Col sm={4}>
                                        {formikCustomer.values.logo ? (
                                            <Image
                                                height={60}
                                                src={URL.createObjectURL(formikCustomer.values.logo)}
                                                alt="logo"
                                                rounded
                                            />
                                        ) : (
                                            <Image height={60} alt="logo_default" src={logoImg} rounded />
                                        )}
                                    </Col>
                                </Row>

                                <Row className="my-2">
                                    <Col sm={4}>
                                        <Text
                                            controlId="domain"
                                            name="domain"
                                            label="Domain"
                                            value={formikCustomer.values.domain}
                                            handleChange={formikCustomer.handleChange}
                                            handleBlur={formikCustomer.handleBlur}
                                            touched={formikCustomer.touched.domain}
                                            error={formikCustomer.errors.domain}
                                            placeholder="Domain"
                                        />
                                    </Col>

                                    <Col sm={4}>
                                        <Text
                                            controlId="address"
                                            name="address"
                                            label="Address"
                                            value={formikCustomer.values.address}
                                            handleChange={formikCustomer.handleChange}
                                            handleBlur={formikCustomer.handleBlur}
                                            touched={formikCustomer.touched.address}
                                            error={formikCustomer.errors.address}
                                            placeholder="Address"
                                        />
                                    </Col>

                                    <Col sm={4}>
                                        <Text
                                            controlId="city"
                                            name="city"
                                            label="City"
                                            value={formikCustomer.values.city}
                                            handleChange={formikCustomer.handleChange}
                                            handleBlur={formikCustomer.handleBlur}
                                            touched={formikCustomer.touched.city}
                                            error={formikCustomer.errors.city}
                                            placeholder="City"
                                        />
                                    </Col>
                                </Row>

                                <Row className="my-2">
                                    <Col sm={4}>
                                        <Select
                                            name="country"
                                            value={formikCustomer.values.country}
                                            handleChange={formikCustomer.handleChange}
                                            handleBlur={formikCustomer.handleBlur}
                                            touched={formikCustomer.touched.country}
                                            error={formikCustomer.errors.country}
                                            label="Country"
                                            placeholder="Select a country"
                                            controlId="country"
                                            loading={loadingCountries}
                                            fetchError={errorCountries}
                                            options={countries.map((country) => ({
                                                value: country.code,
                                                label: country.name,
                                            }))}
                                        />
                                    </Col>

                                    <Col sm={4}>
                                        <Select
                                            enabled={Boolean(formikCustomer.values.country)}
                                            name="state"
                                            value={formikCustomer.values.state}
                                            handleChange={formikCustomer.handleChange}
                                            handleBlur={formikCustomer.handleBlur}
                                            touched={formikCustomer.touched.state}
                                            error={formikCustomer.errors.state}
                                            label="State"
                                            placeholder="Select a state"
                                            controlId="state"
                                            loading={loadingStates}
                                            fetchError={errorStates}
                                            options={states.map((state) => ({
                                                value: state.code,
                                                label: state.name,
                                            }))}
                                        />
                                    </Col>

                                    <Col sm={4}>
                                        <Text
                                            type="number"
                                            controlId="zip"
                                            name="zip"
                                            label="Postal Code"
                                            value={formikCustomer.values.zip}
                                            handleChange={formikCustomer.handleChange}
                                            handleBlur={formikCustomer.handleBlur}
                                            touched={formikCustomer.touched.zip}
                                            error={formikCustomer.errors.zip}
                                            placeholder="Postal"
                                        />
                                    </Col>
                                </Row>

                                <Row className="my-2">
                                    <Col sm={4}>
                                        <Text
                                            type="number"
                                            controlId="numberOfEmployees"
                                            name="numberOfEmployees"
                                            label="Number of Employees"
                                            value={formikCustomer.values.numberOfEmployees}
                                            handleChange={formikCustomer.handleChange}
                                            handleBlur={formikCustomer.handleBlur}
                                            touched={formikCustomer.touched.numberOfEmployees}
                                            error={formikCustomer.errors.numberOfEmployees}
                                            placeholder="Number of Employees"
                                        />
                                    </Col>

                                    <Col sm={4}>
                                        <Text
                                            type="number"
                                            controlId="founded"
                                            name="founded"
                                            label="Founded"
                                            value={formikCustomer.values.founded}
                                            handleChange={formikCustomer.handleChange}
                                            handleBlur={formikCustomer.handleBlur}
                                            touched={formikCustomer.touched.founded}
                                            error={formikCustomer.errors.founded}
                                            placeholder="Founding Year"
                                        />
                                    </Col>

                                    <Col sm={4}>
                                        <Text
                                            controlId="website"
                                            name="website"
                                            label="Website"
                                            value={formikCustomer.values.website}
                                            handleChange={formikCustomer.handleChange}
                                            handleBlur={formikCustomer.handleBlur}
                                            touched={formikCustomer.touched.website}
                                            error={formikCustomer.errors.website}
                                            placeholder="Website Link"
                                        />
                                    </Col>
                                </Row>

                                <Row className="my-2">
                                    <Col sm={4}>
                                        <Text
                                            type="number"
                                            controlId="duns"
                                            name="duns"
                                            label="DUNS"
                                            value={formikCustomer.values.duns}
                                            handleChange={formikCustomer.handleChange}
                                            handleBlur={formikCustomer.handleBlur}
                                            touched={formikCustomer.touched.duns}
                                            error={formikCustomer.errors.duns}
                                            placeholder="DUNS"
                                        />
                                    </Col>

                                    <Col sm={4}>
                                        <Text
                                            type="number"
                                            controlId="taxId"
                                            name="taxId"
                                            label="Tax Id"
                                            value={formikCustomer.values.taxId}
                                            handleChange={formikCustomer.handleChange}
                                            handleBlur={formikCustomer.handleBlur}
                                            touched={formikCustomer.touched.taxId}
                                            error={formikCustomer.errors.taxId}
                                            placeholder="Tax Id"
                                        />
                                    </Col>

                                    <Col sm={4}>
                                        <Text
                                            controlId="website"
                                            name="legalBusinessName"
                                            label="Legal Business Name"
                                            value={formikCustomer.values.legalBusinessName}
                                            handleChange={formikCustomer.handleChange}
                                            handleBlur={formikCustomer.handleBlur}
                                            touched={formikCustomer.touched.legalBusinessName}
                                            error={formikCustomer.errors.legalBusinessName}
                                            placeholder="Legal Business Name"
                                        />
                                    </Col>
                                </Row>

                                <Row className="mt-2">
                                    <Col sm={12}>
                                        <TextArea
                                            controlId="about"
                                            name="about"
                                            label="About"
                                            value={formikCustomer.values.about}
                                            handleChange={formikCustomer.handleChange}
                                            handleBlur={formikCustomer.handleBlur}
                                            touched={formikCustomer.touched.about}
                                            error={formikCustomer.errors.about}
                                            rows={5}
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            variant="success"
                            type="submit"
                            disabled={!formikCustomer.dirty || !formikCustomer.isValid}>
                            Save
                        </Button>
                        <Button variant="danger" onClick={handleCreateCustomerModalClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Form>
            </Modal>

            <Modal handleClose={handleCreateContactModalClose} show={showCreateContactModal}>
                <Form id="contact-frm" onSubmit={formikContact.handleSubmit}>
                    <ModalHeader>
                        <ModalTitle>Create new contact</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <div style={{ overflowY: 'auto', maxHeight: '30rem' }}>
                            <Container>
                                <Row className="mb-2">
                                    <Col sm={4}>
                                        <Text
                                            controlId="firstName"
                                            name="firstName"
                                            label="First Name"
                                            value={formikContact.values.firstName}
                                            handleChange={formikContact.handleChange}
                                            handleBlur={formikContact.handleBlur}
                                            touched={formikContact.touched.firstName}
                                            error={formikContact.errors.firstName}
                                            placeholder="First Name"
                                        />
                                    </Col>
                                    <Col sm={4}>
                                        <Text
                                            controlId="lastName"
                                            name="lastName"
                                            label="Last Name"
                                            value={formikContact.values.lastName}
                                            handleChange={formikContact.handleChange}
                                            handleBlur={formikContact.handleBlur}
                                            touched={formikContact.touched.lastName}
                                            error={formikContact.errors.lastName}
                                            placeholder="Last Name"
                                        />
                                    </Col>
                                    <Col sm={4}>
                                        <Text
                                            controlId="jobTitle"
                                            name="jobTitle"
                                            label="Job Title"
                                            value={formikContact.values.jobTitle}
                                            handleChange={formikContact.handleChange}
                                            handleBlur={formikContact.handleBlur}
                                            touched={formikContact.touched.jobTitle}
                                            error={formikContact.errors.jobTitle}
                                            placeholder="Job Title"
                                        />
                                    </Col>
                                </Row>

                                <Row className="my-2">
                                    <Col sm={4}>
                                        <Text
                                            controlId="primaryPhoneNumber"
                                            name="primaryPhoneNumber"
                                            label="Primary Phone Number"
                                            value={formikContact.values.primaryPhoneNumber}
                                            handleChange={formikContact.handleChange}
                                            handleBlur={formikContact.handleBlur}
                                            touched={formikContact.touched.primaryPhoneNumber}
                                            error={formikContact.errors.primaryPhoneNumber}
                                            placeholder="(555) 555-5555"
                                        />
                                    </Col>

                                    <Col sm={4}>
                                        <Text
                                            controlId="emailAddress"
                                            name="emailAddress"
                                            label="Email Address"
                                            value={formikContact.values.emailAddress}
                                            handleChange={formikContact.handleChange}
                                            handleBlur={formikContact.handleBlur}
                                            touched={formikContact.touched.emailAddress}
                                            error={formikContact.errors.emailAddress}
                                            placeholder="johndoe@company.com"
                                        />
                                    </Col>
                                </Row>

                                <Row className="my-2">
                                    <Col sm={12} className="mt-1">
                                        <p className="m-0 text-body-secondary">
                                            If a password is set for this contact then he will be able to log into the
                                            system to check the status of the RFQs he gets invited to.
                                        </p>
                                    </Col>

                                    <Col sm={4} className="mb-1">
                                        <Text
                                            controlId="password"
                                            type="password"
                                            name="password"
                                            label="Password"
                                            value={formikContact.values.password}
                                            handleChange={formikContact.handleChange}
                                            handleBlur={formikContact.handleBlur}
                                            touched={formikContact.touched.password}
                                            error={formikContact.errors.password}
                                            placeholder="Password"
                                        />
                                    </Col>

                                    <Col sm={4}>
                                        <Text
                                            controlId="confirmPassword"
                                            type="password"
                                            name="confirmPassword"
                                            label="Confirm Password"
                                            value={formikContact.values.confirmPassword}
                                            handleChange={formikContact.handleChange}
                                            handleBlur={formikContact.handleBlur}
                                            touched={formikContact.touched.confirmPassword}
                                            error={formikContact.errors.confirmPassword}
                                            placeholder="Password"
                                        />
                                    </Col>
                                </Row>

                                <Row className="mt-2">
                                    <Col sm={8}>
                                        <ProgressBar animated now={percentage} label={label} variant={color} />
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            variant="success"
                            type="submit"
                            disabled={!formikContact.dirty || !formikContact.isValid}>
                            Save
                        </Button>
                        <Button variant="danger" onClick={handleCreateContactModalClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Form>
            </Modal>

            <Card>
                <Card.Header>Customer Info</Card.Header>
                <Card.Body>
                    <Container className="h-100">
                        <Row className="align-items-center mb-2">
                            <Col sm={6}>
                                <Select
                                    name="customer"
                                    value={customerSelected?.name}
                                    handleChange={(e) =>
                                        setCustomerSelected(
                                            customers.find((customer) => customer.name === e.target.value) || {
                                                about: '',
                                                address: '',
                                                city: '',
                                                country: '',
                                                domain: '',
                                                legalBusinessName: '',
                                                logo: null,
                                                name: '',
                                                state: '',
                                                website: '',
                                                duns: 0,
                                                founded: 0,
                                                numberOfEmployees: 0,
                                                taxId: 0,
                                                zip: 0,
                                            }
                                        )
                                    }
                                    placeholder="Select a customer"
                                    inputGroupText="Select an existing customer"
                                    controlId="customer"
                                    loading={loadingCustomers}
                                    fetchError={errorCustomers}
                                    options={customers.map((customer) => ({
                                        value: customer.name,
                                        label: customer.name,
                                    }))}
                                />
                            </Col>

                            <Col sm={3}>
                                <Button variant="primary" type="button" onClick={handleCreateCustomerModalShow}>
                                    <i className="mdi mdi-plus me-1"></i> <span>Create new customer</span>
                                </Button>
                            </Col>
                        </Row>

                        <Row className="align-items-end my-2">
                            <Col sm={4}>
                                <Text
                                    enabled={false}
                                    label="Customer Name"
                                    inputGroupText="@"
                                    value={customerSelected?.name}
                                />
                            </Col>

                            <Col sm={3}>
                                {customerSelected?.logo ? (
                                    <Image
                                        height={80}
                                        src={URL.createObjectURL(customerSelected?.logo)}
                                        alt="logo"
                                        rounded
                                    />
                                ) : (
                                    <Image height={80} alt="logo_default" src={logoImg} rounded />
                                )}
                            </Col>
                        </Row>

                        <Row className="my-2">
                            <Col sm={4}>
                                <Text enabled={false} label="Domain" value={customerSelected?.domain} />
                            </Col>

                            <Col sm={4}>
                                <Text enabled={false} label="Address" value={customerSelected?.address} />
                            </Col>

                            <Col sm={4}>
                                <Text enabled={false} label="City" value={customerSelected?.city} />
                            </Col>
                        </Row>

                        <Row className="my-2">
                            <Col sm={4}>
                                <Select
                                    enabled={false}
                                    value={customerSelected?.country}
                                    label="Country"
                                    placeholder="Select a country"
                                    options={countries.map((country) => ({
                                        value: country.code,
                                        label: country.name,
                                    }))}
                                />
                            </Col>

                            <Col sm={4}>
                                <Select
                                    enabled={false}
                                    value={customerSelected?.state}
                                    label="State"
                                    placeholder="Select a state"
                                    options={states.map((state) => ({
                                        value: state.code,
                                        label: state.name,
                                    }))}
                                />
                            </Col>

                            <Col sm={4}>
                                <Text enabled={false} type="number" label="Postal Code" value={customerSelected?.zip} />
                            </Col>
                        </Row>

                        <Row className="my-2">
                            <Col sm={4}>
                                <Text
                                    enabled={false}
                                    type="number"
                                    label="Number of Employees"
                                    value={customerSelected?.numberOfEmployees}
                                />
                            </Col>

                            <Col sm={4}>
                                <Text enabled={false} type="number" label="Founded" value={customerSelected?.founded} />
                            </Col>

                            <Col sm={4}>
                                <Text enabled={false} label="Website" value={customerSelected?.website} />
                            </Col>
                        </Row>

                        <Row className="my-2">
                            <Col sm={4}>
                                <Text enabled={false} type="number" label="DUNS" value={customerSelected?.duns} />
                            </Col>

                            <Col sm={4}>
                                <Text enabled={false} type="number" label="Tax Id" value={customerSelected?.taxId} />
                            </Col>

                            <Col sm={4}>
                                <Text
                                    enabled={false}
                                    label="Legal Business Name"
                                    value={customerSelected?.legalBusinessName}
                                />
                            </Col>
                        </Row>

                        <Row className="mt-2">
                            <Col sm={12}>
                                <TextArea enabled={false} label="About" value={customerSelected?.about} />
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>

            <Card className="mt-3">
                <Card.Header>Contacts Info</Card.Header>

                <Card.Body>
                    <Container className="h-100">
                        <Row className="align-items-start">
                            <Col sm={6}>
                                <Multiselect
                                    name="contact"
                                    value={(contactSelected || []).map((contact) => ({
                                        value: contact.emailAddress,
                                        label: contact.firstName,
                                    }))}
                                    handleChange={(value: { label: string; value: string }[]) => {
                                        const _contacts = value
                                            .map((v) => contacts.find((c) => c.emailAddress === v.value))
                                            .filter((c) => c !== undefined) as ContactFormValues[];

                                        setContactSelected(_contacts);
                                    }}
                                    placeholder="Select a contacts"
                                    inputGroupText="Select an existing contact"
                                    controlId="contact"
                                    loading={loadingContacts}
                                    options={contacts.map((contact) => ({
                                        value: contact.emailAddress,
                                        label: contact.firstName,
                                    }))}
                                />
                            </Col>

                            <Col sm={3}>
                                <Button variant="primary" type="button" onClick={handleCreateContactModalShow}>
                                    <i className="mdi mdi-plus me-1"></i> <span>Create new contact</span>
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>

            <Row xs="auto" className="justify-content-end align-items-center">
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
    );
};

export default Customer;
