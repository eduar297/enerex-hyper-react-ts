import { createContext, ReactNode, useState } from 'react';
import { DocumentType } from '../contracts';

type DocumentsState = {
    selectedDocuments: DocumentType[];
    setSelectedDocuments: React.Dispatch<React.SetStateAction<DocumentType[]>>;
};

export const DocumentsContext = createContext<DocumentsState>({
    selectedDocuments: [],
    setSelectedDocuments: () => {},
});

export const DocumentsProvider = ({ children }: { children: ReactNode }) => {
    const [selectedDocuments, setSelectedDocuments] = useState<DocumentType[]>([]);

    return (
        <DocumentsContext.Provider value={{ selectedDocuments, setSelectedDocuments }}>
            {children}
        </DocumentsContext.Provider>
    );
};
