import { createContext, useState, ReactNode } from 'react';
import { Matrix } from '../contracts';

type MatrixState = {
    matrices: Matrix[];
    setMatrices: React.Dispatch<React.SetStateAction<Matrix[]>>;
};

export const MatrixContext = createContext<MatrixState>({
    matrices: [],
    setMatrices: () => {},
});

export const MatrixProvider = ({ children }: { children: ReactNode }) => {
    const [matrices, setMatrices] = useState<Matrix[]>([]);

    return (
        <MatrixContext.Provider
            value={{
                matrices,
                setMatrices,
            }}>
            {children}
        </MatrixContext.Provider>
    );
};
