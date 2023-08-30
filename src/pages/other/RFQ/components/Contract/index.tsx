import { useEffect } from 'react';

import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';

import { useCurrentUser, useStates } from '../../hooks';
import { useCommoditiesType, useContracts, useProcurementUnities } from './hooks';

import { Text, Select, Datepicker } from '../UI/Form';
import { Product } from './types';

const Contracts = () => {
    const { products, setProducts, formik: formikContract } = useContracts();
    const { states, loading: loadingStates, error: errorStates } = useStates('ALL');

    const { commoditiesType, loading: loadingCommodityType, error: errorCommodityType } = useCommoditiesType();

    const {
        procurementUnities,
        loading: loadingProcurementUnities,
        error: errorProcurementUnities,
    } = useProcurementUnities(formikContract.values.commodityType);

    const { currentUserData } = useCurrentUser();

    useEffect(() => {
        console.log({ commodityType: formikContract.values.commodityType });
        formikContract.setFieldError('procurementUnit', '');
        formikContract.setFieldValue('procurementUnit', '');
        formikContract.setFieldTouched('procurementUnit', false);
    }, [formikContract.values.commodityType]);

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
                                    options={commoditiesType.map((ct) => ({
                                        value: ct.id,
                                        label: ct.text,
                                    }))}
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
                                    options={procurementUnities.map((pu) => ({
                                        value: pu.text,
                                        label: pu.text,
                                    }))}
                                />
                            </Col>
                        </Row>

                        <Row className="my-2">
                            {/* <Col sm={4}>
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
                            </Col> */}

                            <Col sm={4}>
                                <Select
                                    // enabled={Boolean(formikContract.values.country)}
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
                                        value: state.name,
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
                            {formikContract.values.commodityType === 'gas' && (
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
                            )}

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
                                    label="Broker Fee"
                                    value={formikContract.values.fee}
                                    handleChange={formikContract.handleChange}
                                    handleBlur={formikContract.handleBlur}
                                    touched={formikContract.touched.fee}
                                    error={formikContract.errors.fee}
                                    placeholder="Broker Fee"
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
                                    handleBlur={formikContract.handleBlur}
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
                                    error={formikContract.errors.productType}
                                    touched={formikContract.touched.productType}
                                />
                            </Col>

                            <Col sm={6}>
                                <Text
                                    controlId="productTypeDescription"
                                    name="productTypeDescription"
                                    label="Product Type Notes"
                                    value={formikContract.values.productTypeDescription}
                                    handleChange={formikContract.handleChange}
                                    handleBlur={formikContract.handleBlur}
                                    placeholder="Notes"
                                    error={formikContract.errors.productTypeDescription}
                                    touched={formikContract.touched.productTypeDescription}
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
                                        handleBlur={formikContract.handleBlur}
                                        placeholder="Multiplier"
                                        inputGroupTextStart="MMBTU"
                                        inputGroupTextEnd={
                                            Boolean(formikContract.values.commodityType)
                                                ? formikContract.values.procurementUnit
                                                : undefined
                                        }
                                        error={formikContract.errors.multiplier}
                                        touched={formikContract.touched.multiplier}
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
                                        handleBlur={formikContract.handleBlur}
                                        placeholder="Adder"
                                        inputGroupTextStart="$"
                                        inputGroupTextEnd={
                                            Boolean(formikContract.values.commodityType)
                                                ? formikContract.values.procurementUnit
                                                : undefined
                                        }
                                        error={formikContract.errors.adder}
                                        touched={formikContract.touched.adder}
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
                                        handleBlur={formikContract.handleBlur}
                                        placeholder="On Peak"
                                        inputGroupTextStart="$"
                                        inputGroupTextEnd={
                                            Boolean(formikContract.values.commodityType)
                                                ? formikContract.values.procurementUnit
                                                : undefined
                                        }
                                        error={formikContract.errors.onPeak}
                                        touched={formikContract.touched.onPeak}
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
                                        handleBlur={formikContract.handleBlur}
                                        placeholder="Off Peak"
                                        inputGroupTextStart="$"
                                        inputGroupTextEnd={
                                            Boolean(formikContract.values.commodityType)
                                                ? formikContract.values.procurementUnit
                                                : undefined
                                        }
                                        error={formikContract.errors.offPeak}
                                        touched={formikContract.touched.offPeak}
                                    />
                                </Col>
                            )}
                        </Row>

                        <Row className="my-2">
                            <Col sm={12}>
                                <Button
                                    variant="success"
                                    disabled={
                                        !formikContract.values.productType ||
                                        (formikContract.values.productType === 'heat-rate' &&
                                            (!formikContract.values.multiplier || !formikContract.values.adder)) ||
                                        (formikContract.values.productType === 'peak' &&
                                            (!formikContract.values.onPeak || !formikContract.values.offPeak)) ||
                                        (formikContract.values.productType === 'index' &&
                                            !formikContract.values.adder) ||
                                        (formikContract.values.productType === 'block-index' &&
                                            !formikContract.values.adder)
                                    }
                                    onClick={() => {
                                        const newProduct: Product = {
                                            type: formikContract.values.productType
                                                ? formikContract.values.productType
                                                : '',
                                            description: formikContract.values.productTypeDescription,
                                            adder: formikContract.values.adder,
                                            multiplier: formikContract.values.multiplier,
                                            offPeak: formikContract.values.offPeak,
                                            onPeak: formikContract.values.onPeak,
                                        };
                                        setProducts([...products, newProduct]);

                                        formikContract.setFieldValue('productTypeDescription', '');
                                        formikContract.setFieldValue('productType', '');
                                        formikContract.setFieldValue('adder', '');
                                        formikContract.setFieldValue('multiplier', '');
                                        formikContract.setFieldValue('offPeak', '');
                                        formikContract.setFieldValue('onPeak', '');

                                        formikContract.setFieldTouched('productTypeDescription', false);
                                        formikContract.setFieldTouched('productType', false);
                                        formikContract.setFieldTouched('adder', false);
                                        formikContract.setFieldTouched('multiplier', false);
                                        formikContract.setFieldTouched('offPeak', false);
                                        formikContract.setFieldTouched('onPeak', false);

                                        formikContract.setFieldError('productTypeDescription', '');
                                        formikContract.setFieldError('productType', '');
                                        formikContract.setFieldError('adder', '');
                                        formikContract.setFieldError('multiplier', '');
                                        formikContract.setFieldError('offPeak', '');
                                        formikContract.setFieldError('onPeak', '');
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
                                                    {currentUserData?.IsBrokerInSupplierCompany === false && (
                                                        <th>Sarting Price</th>
                                                    )}
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
                                                        {currentUserData?.IsBrokerInSupplierCompany === false && (
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
                                                        )}

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
                <Card.Header>Billing Preferences</Card.Header>
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
