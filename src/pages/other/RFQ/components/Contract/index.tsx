import { useState } from 'react';

import { Button, Card, Col, Container, Image, ProgressBar, Row } from 'react-bootstrap';

import { ContractFormValues } from './types';
import { useCountries, useStates } from '../../hooks';
import { useContracts } from './hooks';

import Form, { Text, Select, TextArea, FileUpload, Multiselect } from '../UI/Form';

const Contracts = () => {
    const { formik: formikContract } = useContracts();

    const { countries, loading: loadingCountries, error: errorCountries } = useCountries();
    const { states, loading: loadingStates, error: errorStates } = useStates(formikContract.values.country);

    return (
        <Container fluid>
            <Card>
                <Card.Header>Contract Parameters</Card.Header>
                <Card.Body>
                    <Container>
                        <Row className="align-items-end mb-2">
                            <Col sm={4}>
                                <Text
                                    controlId="country"
                                    name="country"
                                    label="Country"
                                    inputGroupText="@"
                                    value={formikContract.values.country}
                                    handleChange={formikContract.handleChange}
                                    handleBlur={formikContract.handleBlur}
                                    touched={formikContract.touched.country}
                                    error={formikContract.errors.country}
                                    placeholder="Country"
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

export default Contracts;
