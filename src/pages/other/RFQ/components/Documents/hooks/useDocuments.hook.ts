import { useContext } from 'react';
import { DocumentsContext } from '../contexts';
import { Document } from '../types';

const useDocuments = (): {
    documents: Document[];
    setDocuments: React.Dispatch<React.SetStateAction<Document[]>>;
} => {
    const { documents, setDocuments } = useContext(DocumentsContext);

    return {
        documents,
        setDocuments,
    };
};

export default useDocuments;
