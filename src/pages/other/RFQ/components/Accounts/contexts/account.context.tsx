import { createContext, useState, ReactNode } from 'react';
import { Utility } from 'pages/other/RFQ/contracts'; 

type AccountState = {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: any;
    setError: React.Dispatch<React.SetStateAction<any>>;
    numberOfAccounts?: number;
    setNumberOfAccounts: React.Dispatch<React.SetStateAction<number | undefined>>;
    selectedUtilities: Utility[];
    setSelectedUtilities: React.Dispatch<React.SetStateAction<Utility[]>>;
};

export const AccountContext = createContext<AccountState>({
    loading: false,
    setLoading: () => {},
    error: null,
    setError: () => {},
    numberOfAccounts: undefined,
    setNumberOfAccounts: () => {},
    selectedUtilities: [],
    setSelectedUtilities: () => {},
});

export const AccountProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [numberOfAccounts, setNumberOfAccounts] = useState<number | undefined>();
    const [selectedUtilities, setSelectedUtilities] = useState<Utility[]>([]);

    return (
        <AccountContext.Provider
            value={{
                loading,
                setLoading,
                error,
                setError,
                numberOfAccounts,
                setNumberOfAccounts,
                selectedUtilities,
                setSelectedUtilities,
            }}>
            {children}
        </AccountContext.Provider>
    );
};
