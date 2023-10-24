import classNames from 'classnames';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Video from '../components/Video';

const TexasDoorToDoorSales = () => {
    return (
        <Container>
            <Row>
                <p>Course: Texas Door-To-Door Sales</p>
            </Row>
            <Row>
                <Col>
                    <Card className={classNames('border', [`border-secondary`])}>
                        <Card.Body>
                            <Card.Title as="p" className="text-center">
                                🕒(TX-RCS 102)
                            </Card.Title>
                            <Card.Title as="h1" className="text-center" style={{ marginBottom: '4rem' }}>
                                Texas Door-To-Door Sales
                            </Card.Title>
                            <Card.Text>
                                This course is taught by Patricia Dolese of Regulatory Compliance Services. This
                                training presentation will provide an overview of the relevant rules related to selling
                                electricity door to door in Texas, including recent changes that allow for enrollments
                                to be completed through the use of Portable Electronic Devices.
                            </Card.Text>

                            <Video src="" />

                            <Card.Text as="h4">Content</Card.Text>
                            <ul>
                                <li>Door 2 Door Sales - Module 1</li>
                                <li>Door 2 Door Sales - Module 2</li>
                                <li>Door 2 Door Sales - Module 3</li>
                                <li>Door 2 Door Sales - Module 4</li>
                                <li>Door 2 Door sales - Module 5</li>
                                <li>Door 2 Door Sales Quiz</li>
                            </ul>
                            <Card.Text as="h4">Completion rules</Card.Text>
                            <ul>
                                <li>All units must be completed</li>
                                <li>Leads to a certification with a duration: 2 year</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default TexasDoorToDoorSales;
