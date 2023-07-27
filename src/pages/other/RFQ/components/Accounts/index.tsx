import { useState } from 'react';

import { Button, Card, Col, Container, FormCheck, ListGroup, Row, Table } from 'react-bootstrap';

import { useStates, useUtilities } from '../../hooks';
import { useMeters } from './hooks';

import Form, { Text, Select } from '../UI/Form';
import Modal, { ModalBody, ModalFooter, ModalHeader, ModalTitle } from '../UI/Modal';

const Accounts = () => {
    const { meters, formik: formikMeter, metersSelected, setMetersSelected } = useMeters();

    const { states, loading: loadingStates, error: errorStates } = useStates('ALL');
    const { utilities, loading: loadingUtilities, error: errorUtilities } = useUtilities();

    const [showCreateMeterModal, setShowCreateMeterModal] = useState(false);

    const handleCreateMeterModalClose = () => {
        formikMeter.resetForm();
        formikMeter.setErrors({});
        setShowCreateMeterModal(false);
    };
    const handleCreateMeterModalShow = () => setShowCreateMeterModal(true);

    return (
        <Container fluid>
            <Modal handleClose={handleCreateMeterModalClose} show={showCreateMeterModal}>
                <Form id="meter-frm" onSubmit={formikMeter.handleSubmit}>
                    <ModalHeader>
                        <ModalTitle>Create new meter</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <div style={{ overflowY: 'auto', maxHeight: '30rem' }}>
                            <Container className="my-1">
                                <Row className="align-items-end mb-2">
                                    <Col sm={6}>
                                        <Select
                                            name="utility"
                                            value={formikMeter.values.utility}
                                            handleChange={formikMeter.handleChange}
                                            handleBlur={formikMeter.handleBlur}
                                            touched={formikMeter.touched.utility}
                                            error={formikMeter.errors.utility}
                                            label="Utility"
                                            placeholder="Select a utility"
                                            controlId="utility"
                                            loading={loadingUtilities}
                                            fetchError={errorUtilities}
                                            options={utilities.map((utility) => ({
                                                value: utility.id,
                                                label: utility.text,
                                            }))}
                                        />
                                    </Col>
                                </Row>

                                <Row className="my-2">
                                    <Col sm={3}>
                                        <Text
                                            type="number"
                                            controlId="meterNumber"
                                            name="meterNumber"
                                            label="Meter Number"
                                            value={formikMeter.values.meterNumber}
                                            handleChange={formikMeter.handleChange}
                                            handleBlur={formikMeter.handleBlur}
                                            touched={formikMeter.touched.zip}
                                            error={formikMeter.errors.zip}
                                            placeholder="Meter Number"
                                        />
                                    </Col>

                                    <Col sm={3}>
                                        <Text
                                            controlId="city"
                                            name="city"
                                            label="City"
                                            value={formikMeter.values.city}
                                            handleChange={formikMeter.handleChange}
                                            handleBlur={formikMeter.handleBlur}
                                            touched={formikMeter.touched.city}
                                            error={formikMeter.errors.city}
                                            placeholder="City"
                                        />
                                    </Col>

                                    <Col sm={3}>
                                        <Select
                                            name="state"
                                            value={formikMeter.values.state}
                                            handleChange={formikMeter.handleChange}
                                            handleBlur={formikMeter.handleBlur}
                                            touched={formikMeter.touched.state}
                                            error={formikMeter.errors.state}
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
                                </Row>

                                <Row className="my-2">
                                    <Col sm={3}>
                                        <Text
                                            type="number"
                                            controlId="zip"
                                            name="zip"
                                            label="Postal Code"
                                            value={formikMeter.values.zip}
                                            handleChange={formikMeter.handleChange}
                                            handleBlur={formikMeter.handleBlur}
                                            touched={formikMeter.touched.zip}
                                            error={formikMeter.errors.zip}
                                            placeholder="Postal Code"
                                        />
                                    </Col>

                                    <Col sm={3}>
                                        <Text
                                            controlId="addressLine1"
                                            name="addressLine1"
                                            label="Address Line 1"
                                            value={formikMeter.values.addressLine1}
                                            handleChange={formikMeter.handleChange}
                                            handleBlur={formikMeter.handleBlur}
                                            touched={formikMeter.touched.addressLine1}
                                            error={formikMeter.errors.addressLine1}
                                            placeholder="Address Line 1"
                                        />
                                    </Col>

                                    <Col sm={3}>
                                        <Text
                                            controlId="addressLine2"
                                            name="addressLine2"
                                            label="Address Line 2"
                                            value={formikMeter.values.addressLine2}
                                            handleChange={formikMeter.handleChange}
                                            handleBlur={formikMeter.handleBlur}
                                            touched={formikMeter.touched.addressLine2}
                                            error={formikMeter.errors.addressLine2}
                                            placeholder="Address Line 2"
                                        />
                                    </Col>

                                    <Col sm={3}>
                                        <Text
                                            controlId="addressLine3"
                                            name="addressLine3"
                                            label="Address Line 3"
                                            value={formikMeter.values.addressLine3}
                                            handleChange={formikMeter.handleChange}
                                            handleBlur={formikMeter.handleBlur}
                                            touched={formikMeter.touched.addressLine3}
                                            error={formikMeter.errors.addressLine3}
                                            placeholder="Address Line 3"
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="success" type="submit" disabled={!formikMeter.dirty || !formikMeter.isValid}>
                            Save
                        </Button>
                        <Button variant="danger" onClick={handleCreateMeterModalClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Form>
            </Modal>

            <Container>
                <Row className="align-items-center mb-2">
                    <Col sm={4}>
                        <p>{`Number of accounts ${1}`}</p>
                    </Col>

                    <Col sm={6}>
                        <p>Utilities</p>
                        <ListGroup>
                            {metersSelected
                                .map((meter) => meter.utility)
                                .filter((utility, index, self) => self.indexOf(utility) === index)
                                .map((utility, index) => (
                                    <ListGroup.Item key={index}>{utility}</ListGroup.Item>
                                ))}
                        </ListGroup>
                    </Col>

                    <Col sm={3}>
                        <Button variant="primary" type="button" onClick={handleCreateMeterModalShow}>
                            <i className="mdi mdi-plus me-1"></i> <span>Create New Meter</span>
                        </Button>
                    </Col>
                </Row>
            </Container>

            <Card>
                <Card.Header>Select an existing Meter from the Customer</Card.Header>
                <Card.Body>
                    <Container className="h-100">
                        <Row className="align-items-center">
                            <Row className="mt-2">
                                <Col>
                                    <div style={{ overflow: 'auto', height: '100%' }} className="my-2">
                                        <Table responsive size="sm" hover>
                                            <thead>
                                                <tr>
                                                    <th>Utility</th>
                                                    <th>Account Number</th>
                                                    <th>Meter Number</th>
                                                    <th>Address</th>
                                                    <th>
                                                        <FormCheck
                                                            type="checkbox"
                                                            name="all"
                                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                                if (e.target.checked) {
                                                                    setMetersSelected(meters);
                                                                } else {
                                                                    setMetersSelected([]);
                                                                }
                                                            }}
                                                        />
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {meters.map((meter, index) => (
                                                    <tr key={meter.meterNumber}>
                                                        <th scope="row">
                                                            <td>{meter.utility}</td>
                                                        </th>
                                                        <td>{meter.accountNumber}</td>
                                                        <td>{meter.meterNumber}</td>
                                                        <td>...todo!</td>

                                                        <td>
                                                            <FormCheck
                                                                type="checkbox"
                                                                name={meter.meterNumber + ''}
                                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                                    if (e.target.checked) {
                                                                        setMetersSelected([...metersSelected, meter]);
                                                                    } else {
                                                                        setMetersSelected(
                                                                            metersSelected.filter(
                                                                                (m) =>
                                                                                    m.meterNumber !== meter.meterNumber
                                                                            )
                                                                        );
                                                                    }
                                                                }}
                                                            />
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                            </Row>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Accounts;
