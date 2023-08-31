import { useState } from 'react';

import { Button, Card, Col, Collapse, Container, FormCheck, Row, Table } from 'react-bootstrap';

import { useStates, useUtilities } from '../../hooks';
import { useMeters, useAccounts } from './hooks';

import { Text, Select, Multiselect } from '../UI/Form';
import { useCustomers } from '../Customer/hooks';

const Accounts = () => {
    const { meters, formik: formikMeter, metersSelected, setMetersSelected } = useMeters();
    const { numberOfAccounts, setNumberOfAccounts, selectedUtilities, setSelectedUtilities } = useAccounts();

    const { customerSelected } = useCustomers();

    const { states, loading: loadingStates, error: errorStates } = useStates(customerSelected?.CountryId || '');

    const {
        utilities,
        loading: loadingUtilities,
        error: errorUtilities,
    } = useUtilities(customerSelected?.CountryId || '');

    const [showCreateMeter, setShowCreateMeter] = useState(false);

    const toggleCreateMeter = () => setShowCreateMeter((prev) => !prev);

    const handleCreateMeter = () => {
        formikMeter.handleSubmit();
    };

    return (
        <Container fluid>
            <Container>
                <Row className="align-items-end mb-2">
                    <Col sm={3}>
                        <Text
                            type="number"
                            controlId="numberOfAccounts"
                            name="numberOfAccounts"
                            label="Number of Accounts"
                            value={numberOfAccounts}
                            handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setNumberOfAccounts(parseInt(e.target.value))
                            }
                            placeholder="Number of Accounts"
                        />
                    </Col>

                    <Col sm={6}>
                        <Multiselect
                            name="utility"
                            value={(selectedUtilities || []).map((utility) => ({
                                value: utility.id,
                                label: utility.text,
                            }))}
                            handleChange={(value: { label: string; value: string }[]) => {
                                const _utilities = value.map((utility) => ({
                                    id: utility.value,
                                    text: utility.label,
                                }));

                                setSelectedUtilities(_utilities);
                            }}
                            placeholder="Select a utilities"
                            inputGroupTextStart="Select an existing utility"
                            // label="Select an existing utility"
                            controlId="utility"
                            loading={loadingUtilities}
                            options={utilities.map((utility) => ({
                                value: utility.id,
                                label: utility.text,
                            }))}
                        />
                    </Col>
                </Row>

                <Row className="align-items-end mt-4 mb-2">
                    <Col sm={3}>
                        <Button variant="primary" type="button" onClick={toggleCreateMeter}>
                            Show create new account
                        </Button>
                    </Col>
                </Row>
            </Container>

            <Collapse in={showCreateMeter}>
                <Card>
                    <Card.Body>
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
                                        controlId="accountNumber"
                                        name="accountNumber"
                                        label="Account Number"
                                        value={formikMeter.values.accountNumber}
                                        handleChange={formikMeter.handleChange}
                                        handleBlur={formikMeter.handleBlur}
                                        touched={formikMeter.touched.accountNumber}
                                        error={formikMeter.errors.accountNumber}
                                        placeholder="Account Number"
                                    />
                                </Col>

                                <Col sm={3}>
                                    <Text
                                        type="number"
                                        controlId="meterNumber"
                                        name="meterNumber"
                                        label="Meter Number"
                                        value={formikMeter.values.meterNumber}
                                        handleChange={formikMeter.handleChange}
                                        handleBlur={formikMeter.handleBlur}
                                        touched={formikMeter.touched.meterNumber}
                                        error={formikMeter.errors.meterNumber}
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
                                            value: state.name,
                                            label: state.name,
                                        }))}
                                    />
                                </Col>
                            </Row>

                            <Row className="my-2">
                                <Col sm={3}>
                                    <Text
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
                            </Row>
                        </Container>
                    </Card.Body>

                    <Card.Footer>
                        <Row>
                            <Col className="text-end">
                                <Button
                                    variant="primary"
                                    type="button"
                                    onClick={handleCreateMeter}
                                    disabled={!formikMeter.dirty || !formikMeter.isValid}>
                                    <i className="mdi mdi-plus me-1"></i> <span>Create Account</span>
                                </Button>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Collapse>

            <Card>
                <Card.Header>Select from the Customer's Existing Accounts</Card.Header>
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
