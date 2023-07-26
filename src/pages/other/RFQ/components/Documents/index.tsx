import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import { useDocuments } from './hooks';

import { FileUpload } from '../UI/Form';
import { Document } from './types';

type FileExtension =
    | 'pdf'
    | 'doc'
    | 'docx'
    | 'xls'
    | 'xlsx'
    | 'ppt'
    | 'pptx'
    | 'zip'
    | 'rar'
    | 'jpg'
    | 'jpeg'
    | 'png'
    | 'gif'
    | 'txt'
    | 'csv'
    | 'json'
    | 'other';

const documentIconMap: Record<FileExtension, string> = {
    pdf: 'mdi mdi-file-pdf-box font-16',
    doc: 'mdi mdi-file-word-box font-16',
    docx: 'mdi mdi-file-word-box font-16',
    xls: 'mdi mdi-file-excel-box font-16',
    xlsx: 'mdi mdi-file-excel-box font-16',
    ppt: 'mdi mdi-file-powerpoint-box font-16',
    pptx: 'mdi mdi-file-powerpoint-box font-16',
    zip: 'mdi mdi-folder-zip font-16',
    rar: 'mdi mdi-folder-zip font-16',
    jpg: 'mdi mdi-file-image-box font-16',
    jpeg: 'mdi mdi-file-image-box font-16',
    png: 'mdi mdi-file-image-box font-16',
    gif: 'mdi mdi-file-image-box font-16',
    txt: 'mdi mdi-file-document-box font-16',
    csv: 'mdi mdi-file-document-box font-16',
    json: 'mdi mdi-code-json font-16',
    other: 'mdi mdi-file font-16',
};

const getIcon = (fileName: string) => {
    const extension = fileName.split('.').pop() as FileExtension;
    return documentIconMap[extension] || documentIconMap['other'];
};

const humanizeSize = (bytes: number) => {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let index = 0;
    while (bytes >= 1024 && index < units.length - 1) {
        bytes /= 1024;
        index++;
    }
    return bytes.toFixed(2) + ' ' + units[index];
};

const Documents = () => {
    const { documents, setDocuments } = useDocuments();

    return (
        <Container fluid>
            <Card>
                <Card.Header>Select a document to add to the RFQ</Card.Header>
                <Card.Body>
                    <Container>
                        <Row className="align-items-start mb-2">
                            <Col sm={6}>
                                <FileUpload
                                    controlId="documents"
                                    name="documents"
                                    label="Browse for documents"
                                    handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        if (e.target.files) {
                                            const newDocument: Document = {
                                                file: e.target.files[0],
                                            };
                                            setDocuments([...documents, newDocument]);
                                            e.target.value = '';
                                        }
                                    }}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>

            <Card>
                <Card.Header>Documents List</Card.Header>
                <Card.Body>
                    <Container>
                        <Row className="mx-n1 g-0">
                            {documents.map((document, index) => {
                                return (
                                    <Col key={index.toString()} xxl={3} lg={6}>
                                        <Card className="m-1 shadow-none border">
                                            <div className="p-2">
                                                <Row>
                                                    <Col className="col-auto">
                                                        <div className="avatar-sm">
                                                            <span className="avatar-title bg-light text-secondary rounded">
                                                                <i className={getIcon(document.file.name)}></i>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                    <Col className="ps-0">
                                                        <p className="text-muted fw-bold m-0">{document.file.name}</p>

                                                        <p className="mb-0 font-13">
                                                            {humanizeSize(document.file.size)}
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                    </Col>
                                );
                            })}
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

export default Documents;
