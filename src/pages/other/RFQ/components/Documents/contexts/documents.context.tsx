import { createContext, ReactNode, useState } from 'react';
import { Document } from '../types';

type DocumentsState = {
    documents: Document[];
    setDocuments: React.Dispatch<React.SetStateAction<Document[]>>;
};

export const DocumentsContext = createContext<DocumentsState>({
    documents: [],
    setDocuments: () => {},
});

export const DocumentsProvider = ({ children }: { children: ReactNode }) => {
    const [documents, setDocuments] = useState<Document[]>([]);

    return <DocumentsContext.Provider value={{ documents, setDocuments }}>{children}</DocumentsContext.Provider>;
};
