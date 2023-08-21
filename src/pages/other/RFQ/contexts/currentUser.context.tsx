import { createContext, useState, ReactNode, useEffect } from 'react';
import { CurrentUserData } from '../types';

type CurrentUserState = {
    currentUserData: CurrentUserData | undefined;
    setCurrentUserData: React.Dispatch<React.SetStateAction<CurrentUserData | undefined>>;
};

export const CurrentUserContext = createContext<CurrentUserState>({
    currentUserData: undefined,
    setCurrentUserData: () => {},
});

export const CurrentUserProvider = ({ children }: { children: ReactNode }) => {
    const [currentUserData, setCurrentUserData] = useState<CurrentUserData | undefined>(undefined);

    useEffect(() => {
        const storedData = localStorage.getItem('currentUserData');

        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setCurrentUserData(parsedData as CurrentUserData);
        }
    }, []);

    return (
        <CurrentUserContext.Provider
            value={{
                currentUserData,
                setCurrentUserData,
            }}>
            {children}
        </CurrentUserContext.Provider>
    );
};
