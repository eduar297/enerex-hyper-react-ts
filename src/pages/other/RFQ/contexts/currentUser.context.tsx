import { createContext, useState, ReactNode } from 'react';
import { CurrentUserData } from '../contracts';

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
