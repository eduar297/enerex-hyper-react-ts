import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import { useDocuments } from './hooks';
import Dropzone from 'react-dropzone';
import { Link } from 'react-router-dom';

const Documents = () => {
    const { selectedDocuments, handleAcceptedDocuments, removeDocument } = useDocuments();

    return (
        <Container fluid>
            <Card>
                <Card.Header>Select a document to add to the RFQ</Card.Header>
                <Card.Body>
                    <Container>
                        <Dropzone onDrop={(acceptedDocuments) => handleAcceptedDocuments(acceptedDocuments)}>
                            {({ getRootProps, getInputProps }) => (
                                <div className="dropzone">
                                    <div className="dz-message needsclick" {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <i className="h3 text-muted dripicons-cloud-upload"></i>
                                        <h5>Drop files here or click to upload.</h5>
                                    </div>
                                </div>
                            )}
                        </Dropzone>
                    </Container>
                </Card.Body>
            </Card>

            <Card>
                <Card.Header>Documents List</Card.Header>
                <Card.Body>
                    <Container>
                        {selectedDocuments.length > 0 && (
                            <div className="dropzone-previews mt-3" id="uploadPreviewTemplate">
                                {(selectedDocuments || []).map((document, i) => {
                                    return (
                                        <Card className="mt-1 mb-0 shadow-none border" key={i + '-file'}>
                                            <div className="p-2">
                                                <Row className="align-items-center">
                                                    {document.preview && (
                                                        <Col className="col-auto">
                                                            <img
                                                                data-dz-thumbnail=""
                                                                className="avatar-sm rounded bg-light"
                                                                alt={document.name}
                                                                src={document.preview}
                                                            />
                                                        </Col>
                                                    )}
                                                    {!document.preview && (
                                                        <Col className="col-auto">
                                                            <div className="avatar-sm">
                                                                <span className="avatar-title bg-light text-secondary rounded">
                                                                    <i className={document.icon}></i>
                                                                </span>
                                                            </div>
                                                        </Col>
                                                    )}
                                                    <Col className="ps-0">
                                                        <Link to="#" className="text-muted fw-bold">
                                                            {document.name}
                                                        </Link>
                                                        <p className="mb-0 font-13">
                                                            <strong>{document.formattedSize}</strong>
                                                        </p>
                                                    </Col>
                                                    <Col className="text-end">
                                                        <Link
                                                            to="#"
                                                            className="btn btn-link btn-lg text-muted shadow-none">
                                                            <i
                                                                className="dripicons-cross"
                                                                onClick={() => removeDocument(document)}></i>
                                                        </Link>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                    );
                                })}
                            </div>
                        )}
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

export default Documents;
