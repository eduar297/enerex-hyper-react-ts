import { createContext, useState, ReactNode } from 'react';
import { Award } from '../contracts';

type AwardState = {
    awards: Award[];
    setAwards: React.Dispatch<React.SetStateAction<Award[]>>;
};

export const AwardContext = createContext<AwardState>({
    awards: [],
    setAwards: () => {},
});

export const AwardProvider = ({ children }: { children: ReactNode }) => {
    const [awards, setAwards] = useState<Award[]>([]);

    return (
        <AwardContext.Provider
            value={{
                awards,
                setAwards,
            }}>
            {children}
        </AwardContext.Provider>
    );
};
