import { useContext } from 'react';
import { DocumentsContext } from '../contexts';
import { DocumentType } from '../types';

const formatBytes = (bytes: number, decimals: number = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

type DocumentExtension =
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

const documentIconMap: Record<DocumentExtension, string> = {
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

const getIcon = (documentName: string) => {
    const extension = documentName.split('.').pop() as DocumentExtension;
    return documentIconMap[extension] || documentIconMap['other'];
};

const useDocuments = (): {
    selectedDocuments: DocumentType[];
    handleAcceptedDocuments: (documents: DocumentType[], callback?: (documents: DocumentType[]) => void) => void;
    removeDocument: (document: DocumentType) => void;
} => {
    const { selectedDocuments, setSelectedDocuments } = useContext(DocumentsContext);

    const handleAcceptedDocuments = (documents: DocumentType[], callback?: (documents: DocumentType[]) => void) => {
        var allDocuments = documents;

        documents.map((document) =>
            Object.assign(document, {
                preview: document['type'].split('/')[0] === 'image' ? URL.createObjectURL(document) : null,
                formattedSize: formatBytes(document.size),
                icon: getIcon(document.name),
            })
        );

        allDocuments = [...selectedDocuments];
        allDocuments.push(...documents);
        setSelectedDocuments(allDocuments);

        if (callback) callback(allDocuments);
    };

    const removeDocument = (document: DocumentType) => {
        const newDocuments = [...selectedDocuments];
        newDocuments.splice(newDocuments.indexOf(document), 1);
        setSelectedDocuments(newDocuments);
    };

    return {
        selectedDocuments,
        handleAcceptedDocuments,
        removeDocument,
    };
};

export default useDocuments;
