import classNames from 'classnames';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Video from '../components/Video';

const EnergyDeregulation101 = () => {
    return (
        <Container>
            <Row>
                <p>Course: Energy Deregulation 101</p>
            </Row>
            <Row>
                <Col>
                    <Card className={classNames('border', [`border-secondary`])}>
                        <Card.Body>
                            <Card.Title as="p" className="text-center">
                                🕒(MW101)
                            </Card.Title>
                            <Card.Title as="h1" className="text-center" style={{ marginBottom: '4rem' }}>
                                Energy Deregulation 101
                            </Card.Title>
                            <Card.Text>This course is certified and presented by MarketWISE.</Card.Text>
                            <Card.Text>
                                Get grounded by learning the basics of deregulated energy in the United States. In this
                                course, you'll receive an overview of the following:
                                <br />
                                *Common industry terms, acronyms and industry players
                                <br />
                                *Electricity
                                <br />
                                *Natural Gas
                                <br />
                                *Communication formats
                                <br />
                                *Common billing options
                            </Card.Text>

                            <Video src="" />

                            <Card.Text as="h4">Content</Card.Text>
                            <ul>
                                <li>Energy Deregulation 101</li>
                            </ul>
                            <Card.Text as="h4">Completion rules</Card.Text>
                            <ul>
                                <li>All units must be completed</li>
                                <li>Leads to a certification with a duration: 1 year</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default EnergyDeregulation101;
