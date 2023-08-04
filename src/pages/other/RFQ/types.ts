import { ReactNode } from 'react';

export type Item = {
    id: string;
    header: string;
    content: (next: () => void, previous: () => void, index: number, len: number) => ReactNode;
};
