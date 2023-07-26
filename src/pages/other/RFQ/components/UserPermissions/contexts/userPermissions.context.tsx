import { createContext, ReactNode, useState } from 'react';
import { User, UserPermission } from '../types';

type UserPermissionsState = {
    users: User[];
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
    usersWithPermission: UserPermission[];
    setUsersWithPermission: React.Dispatch<React.SetStateAction<UserPermission[]>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: any;
    setError: React.Dispatch<React.SetStateAction<any>>;
};

export const UserPermissionsContext = createContext<UserPermissionsState>({
    users: [],
    setUsers: () => {},
    usersWithPermission: [],
    setUsersWithPermission: () => {},
    loading: false,
    setLoading: () => {},
    error: null,
    setError: () => {},
});

export const UserPermissionsProvider = ({ children }: { children: ReactNode }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [usersWithPermission, setUsersWithPermission] = useState<UserPermission[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    return (
        <UserPermissionsContext.Provider
            value={{
                users,
                setUsers,
                usersWithPermission,
                setUsersWithPermission,
                loading,
                setLoading,
                error,
                setError,
            }}>
            {children}
        </UserPermissionsContext.Provider>
    );
};
