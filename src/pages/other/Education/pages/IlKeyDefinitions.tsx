import classNames from 'classnames';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Video from '../components/Video';

const IlKeyDefinitions = () => {
    return (
        <Container>
            <Row>
                <p>Course: IL Key Definitions</p>
            </Row>
            <Row>
                <Col>
                    <Card className={classNames('border', [`border-secondary`])}>
                        <Card.Body>
                            <Card.Title as="p" className="text-center">
                                🕒(EE-101E)
                            </Card.Title>
                            <Card.Title as="h1" className="text-center" style={{ marginBottom: '4rem' }}>
                                IlKeyDefinitions
                            </Card.Title>
                            <Card.Text>
                                This course is taught by Madelon Kuchera of Earth Etch. In this training tutorial, you
                                will be introduced to some key definitions and concepts that are important to understand
                                before you begin taking other training tutorials about the Illinois retail electric
                                supply rules. This course consists of 22 narrated slides lasting about 25 minutes. The
                                course is followed by a short quiz so the learner can assess their understanding of the
                                material.
                            </Card.Text>
                            <Card.Text>For your convenience, a preview video of the class is provided below.</Card.Text>
                            <Card.Text>
                                The key definitions in this training session include definitions from three (3) separate
                                definition sections:
                            </Card.Text>
                            <Card.Text>
                                1) Retail Electric Supplier Rules - 412.10
                                <br />
                                2) Inbound Enrollment Rules - 453.10
                                <br />
                                3) Agent, Broker & Consultant Rules - 454.20
                            </Card.Text>

                            <Video src="https://earthetch.talentlms.com/file/introvideo/id:1652" />

                            <Card.Text as="h4">Content</Card.Text>
                            <ul>
                                <li>IL_E_ Key Definitions</li>
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

export default IlKeyDefinitions;
