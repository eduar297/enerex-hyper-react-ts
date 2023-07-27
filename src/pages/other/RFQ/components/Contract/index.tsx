import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';

import { useCountries, useStates } from '../../hooks';
import { useContracts } from './hooks';

import Form, { Text, Select, Datepicker } from '../UI/Form';
import { Product } from './types';

const Contracts = () => {
    const { products, setProducts, formik: formikContract } = useContracts();

    const { countries, loading: loadingCountries, error: errorCountries } = useCountries();
    const { states, loading: loadingStates, error: errorStates } = useStates(formikContract.values.country);

    return (
        <Container fluid>
            <Card>
                <Card.Header>Contract Parameters</Card.Header>
                <Card.Body>
                    <Container>
                        <Row className="align-items-start mb-2">
                            <Col sm={4}>
                                <Datepicker
                                    controlId="startDate"
                                    name="startDate"
                                    label="Start Date"
                                    value={
                                        formikContract.values.startDate
                                            ? formikContract.values.startDate.toString()
                                            : ''
                                    }
                                    handleChange={formikContract.handleChange}
                                    handleBlur={formikContract.handleBlur}
                                />
                            </Col>

                            <Col sm={4}>
                                <Select
                                    name="commodityType"
                                    value={formikContract.values.commodityType}
                                    handleChange={formikContract.handleChange}
                                    handleBlur={formikContract.handleBlur}
                                    touched={formikContract.touched.commodityType}
                                    error={formikContract.errors.commodityType}
                                    label="Commodity Type"
                                    placeholder="Commodity Type"
                                    controlId="commodityType"
                                    options={[
                                        { value: 'electricity', label: 'Electricity' },
                                        { value: 'gas', label: 'Gas' },
                                    ]}
                                />
                            </Col>

                            <Col sm={4}>
                                <Select
                                    enabled={Boolean(formikContract.values.commodityType)}
                                    name="procurementUnit"
                                    value={formikContract.values.procurementUnit}
                                    handleChange={formikContract.handleChange}
                                    handleBlur={formikContract.handleBlur}
                                    touched={formikContract.touched.procurementUnit}
                                    error={formikContract.errors.procurementUnit}
                                    label="Procurement Unit"
                                    placeholder="Procurement Unit"
                                    controlId="procurementUnit"
                                    options={
                                        formikContract.values.commodityType === 'electricity'
                                            ? [
                                                  { value: 'kWh', label: 'kWh' },
                                                  { value: 'MWh', label: 'MWh' },
                                                  { value: 'MW', label: 'MW' },
                                              ]
                                            : [
                                                  { value: 'thm', label: 'thm' },
                                                  { value: 'DTH', label: 'DTH' },
                                                  { value: 'MMBTU', label: 'MMBTU' },
                                                  { value: 'MCF', label: 'MCF' },
                                              ]
                                    }
                                />
                            </Col>
                        </Row>

                        <Row className="my-2">
                            <Col sm={4}>
                                <Select
                                    name="country"
                                    value={formikContract.values.country}
                                    handleChange={formikContract.handleChange}
                                    handleBlur={formikContract.handleBlur}
                                    touched={formikContract.touched.country}
                                    error={formikContract.errors.country}
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
                                    enabled={Boolean(formikContract.values.country)}
                                    name="state"
                                    value={formikContract.values.state}
                                    handleChange={formikContract.handleChange}
                                    handleBlur={formikContract.handleBlur}
                                    touched={formikContract.touched.state}
                                    error={formikContract.errors.state}
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
                                    controlId="minimumBandwidth"
                                    name="minimumBandwidth"
                                    label="Minimum Bandwidth"
                                    value={formikContract.values.minimumBandwidth}
                                    handleChange={formikContract.handleChange}
                                    handleBlur={formikContract.handleBlur}
                                    touched={formikContract.touched.minimumBandwidth}
                                    error={formikContract.errors.minimumBandwidth}
                                    placeholder="Minimum Bandwidth"
                                    inputGroupTextEnd="%"
                                />
                            </Col>
                        </Row>

                        <Row className="my-2">
                            <Col sm={4}>
                                <Text
                                    controlId="deliveryPoint"
                                    name="deliveryPoint"
                                    label="Delivery Point"
                                    value={formikContract.values.deliveryPoint}
                                    handleChange={formikContract.handleChange}
                                    handleBlur={formikContract.handleBlur}
                                    touched={formikContract.touched.deliveryPoint}
                                    error={formikContract.errors.deliveryPoint}
                                    placeholder="Delivery Point"
                                />
                            </Col>

                            <Col sm={4}>
                                <Text
                                    enabled={Boolean(
                                        formikContract.values.commodityType && formikContract.values.procurementUnit
                                    )}
                                    controlId="annualProcurementAmount"
                                    name="annualProcurementAmount"
                                    label="Annual Procurement Amount"
                                    value={formikContract.values.annualProcurementAmount}
                                    handleChange={formikContract.handleChange}
                                    handleBlur={formikContract.handleBlur}
                                    touched={formikContract.touched.annualProcurementAmount}
                                    error={formikContract.errors.annualProcurementAmount}
                                    placeholder="Amount"
                                    inputGroupTextEnd={
                                        Boolean(formikContract.values.commodityType)
                                            ? formikContract.values.procurementUnit
                                            : undefined
                                    }
                                />
                            </Col>

                            <Col sm={4}>
                                <Text
                                    enabled={Boolean(
                                        formikContract.values.commodityType && formikContract.values.procurementUnit
                                    )}
                                    type="number"
                                    controlId="fee"
                                    name="fee"
                                    label="Fee"
                                    value={formikContract.values.fee}
                                    handleChange={formikContract.handleChange}
                                    handleBlur={formikContract.handleBlur}
                                    touched={formikContract.touched.fee}
                                    error={formikContract.errors.fee}
                                    placeholder="Fee"
                                    inputGroupTextStart="$"
                                    inputGroupTextEnd={
                                        Boolean(formikContract.values.commodityType)
                                            ? formikContract.values.procurementUnit
                                            : undefined
                                    }
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={4}>
                                <Text
                                    type="number"
                                    controlId="renewableContentRequirement"
                                    name="renewableContentRequirement"
                                    label="Renewable Content Requirement"
                                    value={formikContract.values.renewableContentRequirement}
                                    handleChange={formikContract.handleChange}
                                    handleBlur={formikContract.handleBlur}
                                    touched={formikContract.touched.renewableContentRequirement}
                                    error={formikContract.errors.renewableContentRequirement}
                                    placeholder="Renewable Content Requirement"
                                    inputGroupTextEnd="%"
                                />
                            </Col>

                            <Col sm={8}>
                                <Text
                                    controlId="term"
                                    name="term"
                                    label="Term (comma separated list)"
                                    value={formikContract.values.term}
                                    handleChange={formikContract.handleChange}
                                    handleBlur={formikContract.handleBlur}
                                    touched={formikContract.touched.term}
                                    error={formikContract.errors.term}
                                    placeholder="6, 12, 24, 36, 48, 60"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>

            <Card>
                <Card.Header>Product Types</Card.Header>
                <Card.Body>
                    <Container>
                        <Row className="align-items-start mb-2">
                            <Col sm={4}>
                                <Select
                                    name="productType"
                                    value={formikContract.values.productType}
                                    handleChange={formikContract.handleChange}
                                    label="Product Type"
                                    placeholder="Product Type"
                                    controlId="productType"
                                    options={[
                                        { value: 'fixed', label: 'Fixed' },
                                        { value: 'index', label: 'Index' },
                                        { value: 'heat-rate', label: 'Head Rate' },
                                        { value: 'block-index', label: 'Block & Index' },
                                        { value: 'peak', label: 'On-Peak / Off-peak' },
                                    ]}
                                />
                            </Col>

                            <Col sm={6}>
                                <Text
                                    controlId="productTypeDescription"
                                    name="productTypeDescription"
                                    label="Product Type Description"
                                    value={formikContract.values.productTypeDescription}
                                    handleChange={formikContract.handleChange}
                                    placeholder="Description"
                                />
                            </Col>
                        </Row>

                        <Row className="my-2">
                            {formikContract.values.productType === 'heat-rate' && (
                                <Col sm={4}>
                                    <Text
                                        type="number"
                                        controlId="multiplier"
                                        name="multiplier"
                                        label="Multiplier"
                                        value={formikContract.values.multiplier}
                                        handleChange={formikContract.handleChange}
                                        placeholder="Multiplier"
                                        inputGroupTextStart="MMBTU"
                                        inputGroupTextEnd={
                                            Boolean(formikContract.values.commodityType)
                                                ? formikContract.values.procurementUnit
                                                : undefined
                                        }
                                    />
                                </Col>
                            )}
                            {(formikContract.values.productType === 'index' ||
                                formikContract.values.productType === 'heat-rate' ||
                                formikContract.values.productType === 'block-index') && (
                                <Col sm={4}>
                                    <Text
                                        type="number"
                                        controlId="adder"
                                        name="adder"
                                        label="Adder"
                                        value={formikContract.values.adder}
                                        handleChange={formikContract.handleChange}
                                        placeholder="Adder"
                                        inputGroupTextStart="$"
                                        inputGroupTextEnd={
                                            Boolean(formikContract.values.commodityType)
                                                ? formikContract.values.procurementUnit
                                                : undefined
                                        }
                                    />
                                </Col>
                            )}
                            {formikContract.values.productType === 'peak' && (
                                <Col sm={4}>
                                    <Text
                                        type="number"
                                        controlId="onPeak"
                                        name="onPeak"
                                        label="On Peak"
                                        value={formikContract.values.onPeak}
                                        handleChange={formikContract.handleChange}
                                        placeholder="On Peak"
                                        inputGroupTextStart="$"
                                        inputGroupTextEnd={
                                            Boolean(formikContract.values.commodityType)
                                                ? formikContract.values.procurementUnit
                                                : undefined
                                        }
                                    />
                                </Col>
                            )}

                            {formikContract.values.productType === 'peak' && (
                                <Col sm={4}>
                                    <Text
                                        type="number"
                                        controlId="offPeak"
                                        name="offPeak"
                                        label="Off Peak"
                                        value={formikContract.values.offPeak}
                                        handleChange={formikContract.handleChange}
                                        placeholder="Off Peak"
                                        inputGroupTextStart="$"
                                        inputGroupTextEnd={
                                            Boolean(formikContract.values.commodityType)
                                                ? formikContract.values.procurementUnit
                                                : undefined
                                        }
                                    />
                                </Col>
                            )}
                        </Row>

                        <Row className="my-2">
                            <Col sm={12}>
                                <Button
                                    variant="success"
                                    onClick={() => {
                                        const newProduct: Product = {
                                            type: formikContract.values.productType,
                                            description: formikContract.values.productTypeDescription,
                                            adder: formikContract.values.adder,
                                            multiplier: formikContract.values.multiplier,
                                            offPeak: formikContract.values.offPeak,
                                            onPeak: formikContract.values.onPeak,
                                        };
                                        setProducts([...products, newProduct]);
                                    }}>
                                    Add
                                </Button>
                            </Col>
                        </Row>

                        {products.length > 0 && (
                            <Row className="mt-2">
                                <Col>
                                    <div style={{ overflow: 'auto', height: '100%' }} className="my-2">
                                        <Table responsive size="sm" hover>
                                            <thead>
                                                <tr>
                                                    <th>Product Type</th>
                                                    <th>Description</th>
                                                    <th>Sarting Price</th>
                                                    <th>Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {products.map((product, index) => (
                                                    <tr key={product.type}>
                                                        <th scope="row">
                                                            <td>{product.type}</td>
                                                        </th>
                                                        <td>{product.description}</td>
                                                        <td>
                                                            {(product.type === 'index' ||
                                                                product.type === 'block-index') && (
                                                                <p>
                                                                    {`Adder: $${product.adder}/${formikContract.values.procurementUnit}`}
                                                                </p>
                                                            )}
                                                            {(product.type === 'peak' ||
                                                                product.type === 'block-index') && (
                                                                <p>{`On-Peak: $${product.onPeak}/${formikContract.values.procurementUnit} / Off-Peak: $${product.offPeak}/${formikContract.values.procurementUnit}`}</p>
                                                            )}
                                                            {(product.type === 'block-index' ||
                                                                product.type === 'block-index') && (
                                                                <p>
                                                                    {`Adder: $${product.adder}/${formikContract.values.procurementUnit}`}
                                                                </p>
                                                            )}
                                                            {product.type === 'heat-rate' && (
                                                                <p>
                                                                    {`Multiplier: ${product.multiplier} MMBTU/${formikContract.values.procurementUnit} / Adder: $${product.adder}/${formikContract.values.procurementUnit}`}
                                                                </p>
                                                            )}
                                                        </td>

                                                        <td>
                                                            <Button
                                                                variant="danger"
                                                                onClick={() => {
                                                                    setProducts(products.filter((p) => p !== product));
                                                                }}>
                                                                <i className="mdi mdi-delete"></i>
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                            </Row>
                        )}
                    </Container>
                </Card.Body>
            </Card>

            <Card>
                <Card.Header>Billing Parameters</Card.Header>
                <Card.Body>
                    <Container>
                        <Row className="align-items-start">
                            <Col sm={4}>
                                <Text
                                    type="number"
                                    controlId="paymentTerm"
                                    name="paymentTerm"
                                    label="Payment Term"
                                    value={formikContract.values.paymentTerm}
                                    handleChange={formikContract.handleChange}
                                    handleBlur={formikContract.handleBlur}
                                    touched={formikContract.touched.paymentTerm}
                                    error={formikContract.errors.paymentTerm}
                                    placeholder="Payment Term"
                                    inputGroupTextEnd="days"
                                />
                            </Col>

                            <Col sm={4}>
                                <Select
                                    name="billType"
                                    value={formikContract.values.billType}
                                    handleChange={formikContract.handleChange}
                                    handleBlur={formikContract.handleBlur}
                                    touched={formikContract.touched.billType}
                                    error={formikContract.errors.billType}
                                    label="Bill Type"
                                    placeholder="Bill Type"
                                    controlId="billType"
                                    options={[
                                        { value: 'Supplier Billing', label: 'Supplier Billing' },
                                        { value: 'Dual Bill', label: 'Dual Bill' },
                                        {
                                            value: 'Utility Consolidated Billing',
                                            label: 'Utility Consolidated Billing',
                                        },
                                        { value: 'Supplier and Dual Billing', label: 'Supplier and Dual Billing' },
                                    ]}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Contracts;
