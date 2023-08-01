import { useContext } from 'react';
import { AccountContext } from '../contexts';
import { Utility } from '../types';

const useAccounts = (): {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: any;
    setError: React.Dispatch<React.SetStateAction<any>>;
    numberOfAccounts?: number;
    setNumberOfAccounts: React.Dispatch<React.SetStateAction<number | undefined>>;
    selectedUtilities: Utility[];
    setSelectedUtilities: React.Dispatch<React.SetStateAction<Utility[]>>;
} => {
    const {
        loading,
        setLoading,
        error,
        setError,
        numberOfAccounts,
        setNumberOfAccounts,
        selectedUtilities,
        setSelectedUtilities,
    } = useContext(AccountContext);

    return {
        loading,
        setLoading,
        error,
        setError,
        numberOfAccounts,
        setNumberOfAccounts,
        selectedUtilities,
        setSelectedUtilities,
    };
};

export default useAccounts;
