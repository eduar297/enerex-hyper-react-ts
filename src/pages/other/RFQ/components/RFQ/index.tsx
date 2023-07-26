import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';

import { useRFQs } from './hooks';

import Form, { Text, Select, Datepicker, CheckBox, TextArea } from '../UI/Form';

const RFQ = () => {
    const { formik: formikRFQ } = useRFQs();

    return (
        <Container fluid>
            <Card>
                <Card.Header>Details</Card.Header>
                <Card.Body>
                    <Container>
                        <Row className="mb-2">
                            <Col sm={4}>
                                <CheckBox
                                    controlId="isWholesale"
                                    value={formikRFQ.values.isWholesale}
                                    error={formikRFQ.errors.isWholesale}
                                    handleBlur={formikRFQ.handleBlur}
                                    handleChange={formikRFQ.handleChange}
                                    name="isWholesale"
                                    touched={formikRFQ.touched.isWholesale}
                                    label="Is this a Wholesale RFQ?"
                                />
                            </Col>
                        </Row>

                        <Row className="my-2">
                            <Col sm={3}>
                                <Text
                                    controlId="name"
                                    value={formikRFQ.values.name}
                                    error={formikRFQ.errors.name}
                                    handleBlur={formikRFQ.handleBlur}
                                    handleChange={formikRFQ.handleChange}
                                    name="name"
                                    touched={formikRFQ.touched.name}
                                    label="RFQ Name"
                                    inputGroupTextEnd=""
                                    inputGroupTextStart=""
                                />
                            </Col>

                            <Col sm={3}>
                                <Select
                                    controlId="direction"
                                    value={formikRFQ.values.direction}
                                    error={formikRFQ.errors.direction}
                                    handleBlur={formikRFQ.handleBlur}
                                    handleChange={formikRFQ.handleChange}
                                    name="direction"
                                    touched={formikRFQ.touched.direction}
                                    label="Direction"
                                    options={[
                                        { value: 'reverse', label: 'Reverse' },
                                        { value: 'forward', label: 'Forward' },
                                    ]}
                                    placeholder={'Select Direction'}
                                />
                            </Col>

                            <Col sm={3}>
                                <Select
                                    controlId="type"
                                    value={formikRFQ.values.type}
                                    error={formikRFQ.errors.type}
                                    handleBlur={formikRFQ.handleBlur}
                                    handleChange={formikRFQ.handleChange}
                                    name="type"
                                    touched={formikRFQ.touched.type}
                                    label="RFQ Type"
                                    options={[
                                        { value: 'direct', label: 'Direct' },
                                        { value: 'open-bid', label: 'Open Bid' },
                                        { value: 'sealed-bid', label: 'Sealed Bid' },
                                        { value: 'target-price', label: 'Target Price' },
                                    ]}
                                    placeholder={'Select RFQ Type'}
                                />
                            </Col>

                            <Col sm={3}>
                                <Select
                                    controlId="access"
                                    value={formikRFQ.values.access}
                                    error={formikRFQ.errors.access}
                                    handleBlur={formikRFQ.handleBlur}
                                    handleChange={formikRFQ.handleChange}
                                    name="access"
                                    touched={formikRFQ.touched.access}
                                    label="RFQ Access"
                                    options={[
                                        { value: 'public', label: 'Public' },
                                        { value: 'private', label: 'Private' },
                                    ]}
                                    placeholder={'Select RFQ Access'}
                                />
                            </Col>
                        </Row>

                        {!formikRFQ.values.isWholesale && (
                            <Row className="my-2">
                                <Col sm={4}>
                                    <Text
                                        controlId="reservePrice"
                                        value={formikRFQ.values.reservePrice}
                                        error={formikRFQ.errors.reservePrice}
                                        handleBlur={formikRFQ.handleBlur}
                                        handleChange={formikRFQ.handleChange}
                                        name="reservePrice"
                                        touched={formikRFQ.touched.reservePrice}
                                        label="Reserve Price"
                                        inputGroupTextEnd="kWh"
                                        inputGroupTextStart="$"
                                    />
                                </Col>

                                <Col sm={4}>
                                    <Text
                                        controlId="benchmarkPrice"
                                        value={formikRFQ.values.benchmarkPrice}
                                        error={formikRFQ.errors.benchmarkPrice}
                                        handleBlur={formikRFQ.handleBlur}
                                        handleChange={formikRFQ.handleChange}
                                        name="benchmarkPrice"
                                        touched={formikRFQ.touched.benchmarkPrice}
                                        label="Benchmark Price"
                                        inputGroupTextEnd="kWh"
                                        inputGroupTextStart="$"
                                    />
                                </Col>

                                <Col sm={4}>
                                    <Text
                                        controlId="targetPrice"
                                        value={formikRFQ.values.targetPrice}
                                        error={formikRFQ.errors.targetPrice}
                                        handleBlur={formikRFQ.handleBlur}
                                        handleChange={formikRFQ.handleChange}
                                        name="targetPrice"
                                        touched={formikRFQ.touched.targetPrice}
                                        label="Target Price"
                                        inputGroupTextEnd="kWh"
                                        inputGroupTextStart="$"
                                    />
                                </Col>
                            </Row>
                        )}

                        <Row className="my-2">
                            <Col sm={4}>
                                <Datepicker
                                    controlId="proposedStartTime"
                                    value={
                                        formikRFQ.values.proposedStartTime
                                            ? formikRFQ.values.proposedStartTime.toString()
                                            : ''
                                    }
                                    handleBlur={formikRFQ.handleBlur}
                                    handleChange={formikRFQ.handleChange}
                                    name="proposedStartTime"
                                    label="Proposed Start Time"
                                />
                            </Col>

                            <Col sm={4}>
                                <Datepicker
                                    controlId="proposedEndTime"
                                    value={
                                        formikRFQ.values.proposedEndTime
                                            ? formikRFQ.values.proposedEndTime.toString()
                                            : ''
                                    }
                                    handleBlur={formikRFQ.handleBlur}
                                    handleChange={formikRFQ.handleChange}
                                    name="proposedEndTime"
                                    label="Proposed End Time"
                                />
                            </Col>

                            <Col sm={4}>
                                <CheckBox
                                    controlId="chat"
                                    value={formikRFQ.values.chat}
                                    error={formikRFQ.errors.chat}
                                    handleBlur={formikRFQ.handleBlur}
                                    handleChange={formikRFQ.handleChange}
                                    name="chat"
                                    touched={formikRFQ.touched.chat}
                                    label="Chat?"
                                />
                                <CheckBox
                                    controlId="priceComments"
                                    value={formikRFQ.values.priceComments}
                                    error={formikRFQ.errors.priceComments}
                                    handleBlur={formikRFQ.handleBlur}
                                    handleChange={formikRFQ.handleChange}
                                    name="priceComments"
                                    touched={formikRFQ.touched.priceComments}
                                    label="Price Comments?"
                                />
                                <CheckBox
                                    controlId="firstBidBlind"
                                    value={formikRFQ.values.firstBidBlind}
                                    error={formikRFQ.errors.firstBidBlind}
                                    handleBlur={formikRFQ.handleBlur}
                                    handleChange={formikRFQ.handleChange}
                                    name="firstBidBlind"
                                    touched={formikRFQ.touched.firstBidBlind}
                                    label="First Bid Blind?"
                                />
                            </Col>
                        </Row>

                        {formikRFQ.values.isWholesale && (
                            <Row className="my-2">
                                <Col sm={4}>
                                    <CheckBox
                                        controlId="blindDuringBidEntry"
                                        value={formikRFQ.values.blindDuringBidEntry}
                                        error={formikRFQ.errors.blindDuringBidEntry}
                                        handleBlur={formikRFQ.handleBlur}
                                        handleChange={formikRFQ.handleChange}
                                        name="blindDuringBidEntry"
                                        touched={formikRFQ.touched.blindDuringBidEntry}
                                        label="Blind During Bid Entry?"
                                    />
                                </Col>

                                <Col sm={4}>
                                    <CheckBox
                                        controlId="bidConfirmationDelay"
                                        value={formikRFQ.values.bidConfirmationDelay}
                                        error={formikRFQ.errors.bidConfirmationDelay}
                                        handleBlur={formikRFQ.handleBlur}
                                        handleChange={formikRFQ.handleChange}
                                        name="bidConfirmationDelay"
                                        touched={formikRFQ.touched.bidConfirmationDelay}
                                        label="Bid Confirmation Delay?"
                                    />
                                </Col>
                            </Row>
                        )}

                        {formikRFQ.values.isWholesale && formikRFQ.values.bidConfirmationDelay && (
                            <Row className="my-2">
                                <Col sm={4}>
                                    <Text
                                        controlId="bidConfirmationDelaySeconds"
                                        value={formikRFQ.values.bidConfirmationDelaySeconds}
                                        error={formikRFQ.errors.bidConfirmationDelaySeconds}
                                        handleBlur={formikRFQ.handleBlur}
                                        handleChange={formikRFQ.handleChange}
                                        name="bidConfirmationDelaySeconds"
                                        touched={formikRFQ.touched.bidConfirmationDelaySeconds}
                                        label="Bid Confirmation Delay Seconds"
                                        inputGroupTextEnd="seconds"
                                    />
                                </Col>
                            </Row>
                        )}

                        <Row className="mt-2">
                            <Col sm={4}>
                                <CheckBox
                                    controlId="sendCustomerInvite"
                                    value={formikRFQ.values.sendCustomerInvite}
                                    error={formikRFQ.errors.sendCustomerInvite}
                                    handleBlur={formikRFQ.handleBlur}
                                    handleChange={formikRFQ.handleChange}
                                    name="sendCustomerInvite"
                                    touched={formikRFQ.touched.sendCustomerInvite}
                                    label="Send Customer Invite(s)?"
                                />
                            </Col>

                            <Col sm={4}>
                                <CheckBox
                                    controlId="hideBrokerFee"
                                    value={formikRFQ.values.hideBrokerFee}
                                    error={formikRFQ.errors.hideBrokerFee}
                                    handleBlur={formikRFQ.handleBlur}
                                    handleChange={formikRFQ.handleChange}
                                    name="hideBrokerFee"
                                    touched={formikRFQ.touched.hideBrokerFee}
                                    label="Hide Broker Fee from Customer?"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Container>
                        <Row className="my-2">
                            <Col sm={4}>
                                <TextArea
                                    controlId="description"
                                    value={formikRFQ.values.description}
                                    error={formikRFQ.errors.description}
                                    handleBlur={formikRFQ.handleBlur}
                                    handleChange={formikRFQ.handleChange}
                                    name="description"
                                    touched={formikRFQ.touched.description}
                                    label="Description"
                                    rows={5}
                                />
                            </Col>

                            <Col sm={4}>
                                <TextArea
                                    controlId="guidelines"
                                    value={formikRFQ.values.guidelines}
                                    error={formikRFQ.errors.guidelines}
                                    handleBlur={formikRFQ.handleBlur}
                                    handleChange={formikRFQ.handleChange}
                                    name="guidelines"
                                    touched={formikRFQ.touched.guidelines}
                                    label="Guidelines and Special Instructions"
                                    rows={5}
                                />
                            </Col>

                            <Col sm={4}>
                                <TextArea
                                    controlId="qa"
                                    value={formikRFQ.values.qa}
                                    error={formikRFQ.errors.qa}
                                    handleBlur={formikRFQ.handleBlur}
                                    handleChange={formikRFQ.handleChange}
                                    name="qa"
                                    touched={formikRFQ.touched.qa}
                                    label="Q & A"
                                    rows={5}
                                />
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

export default RFQ;
