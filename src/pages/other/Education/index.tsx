import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import cardImgEnergyDeregulation from 'assets/images/small/energyDeregulation.png';
import cardImgIlKeyDefinitions from 'assets/images/small/ilKeyDefinitions.png';
import cardImgTexasDoorToDoorSales from 'assets/images/small/texasDoorToDoorSales.png';
import { Link } from 'react-router-dom';

type EducationCardProps = {
    title: string;
    img: string;
    text: any;
};

const EducationCard = ({ title, text, img }: EducationCardProps) => {
    return (
        <Card className="d-block" id="card">
            <Card.Body style={{ position: 'relative', textAlign: 'center' }}>
                <Image src={img} style={{ display: 'block', margin: '0 auto', width: '100%', borderRadius: '50%' }} />
                <Card.Title
                    as="h3"
                    style={{
                        textAlign: 'left',
                        marginTop: '1rem',
                    }}>
                    <strong>{title}</strong>
                </Card.Title>
                <Card.Text
                    style={{
                        textAlign: 'left',
                    }}>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

const Education = () => {
    return (
        <Container>
            <Row>
                <p>Education</p>
            </Row>
            <Row>
                <Col md={12} lg={4}>
                    <Link to="course/1" style={{ textDecoration: 'none' }} id="course1">
                        <EducationCard
                            img={cardImgEnergyDeregulation}
                            title="Energy Deregulation 101"
                            text={
                                <>
                                    Get grounded by learning the basics of deregulated energy in the United States. In
                                    this course, you'll receive an overview of the following:
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
                                    <br />
                                </>
                            }
                        />
                    </Link>
                </Col>
                <Col md={12} lg={4}>
                    <Link to="course/2" style={{ textDecoration: 'none' }} id="course2">
                        <EducationCard
                            img={cardImgIlKeyDefinitions}
                            title="IL Key Definitions"
                            text={
                                <>
                                    This course is taught by Madelon Kuchera of Earth Etch. In this training tutorial,
                                    you will be introduced to some key definitions and concepts that are important to
                                    understand before you begin taking other training tutorials about the Illinois
                                    retail electric supply rules. This course consists of 22 narrated slides lasting
                                    about 25 minutes. The course is followed by a short quiz so the learner can assess
                                    their understanding of the material.
                                    <br />
                                    <br />
                                    For your convenience, a preview video of the class is provided below.
                                    <br />
                                    <br />
                                    The key definitions in this training session include definitions from three (3)
                                    separate definition sections:
                                    <br />
                                    <br />
                                    1) Retail Electric Supplier Rules - 412.10
                                    <br />
                                    2) Inbound Enrollment Rules - 453.10
                                    <br />
                                    3) Agent, Broker &amp; Consultant Rules - 454.20
                                    <br />
                                </>
                            }
                        />
                    </Link>
                </Col>
                <Col md={12} lg={4}>
                    <Link to="course/3" style={{ textDecoration: 'none' }} id="course3">
                        <EducationCard
                            img={cardImgTexasDoorToDoorSales}
                            title="Texas Door-To-Door Sales"
                            text={
                                <>
                                    This course is taught by Patricia Dolese of Regulatory Compliance Services. This
                                    training presentation will provide an overview of the relevant rules related to
                                    selling electricity door to door in Texas, including recent changes that allow for
                                    enrollments to be completed through the use of Portable Electronic Devices.
                                </>
                            }
                        />
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Education;
