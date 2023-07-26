import { useContext, useEffect, useState } from 'react';
import { UserPermissionsContext } from '../contexts';
import { User, Permission, UserPermission } from '../types';

const fetchUsers = (): Promise<User[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    firstName: 'Eduardo',
                    lastName: 'Moreira',
                    email: 'eduar2.moreira@gmail.com',
                    id: '0',
                },
                {
                    firstName: 'Test1',
                    lastName: 'Test1',
                    email: 'test1@test1.com',
                    id: '1',
                },
                {
                    firstName: 'Test2',
                    lastName: 'Test2',
                    email: 'test2@test2.com',
                    id: '2',
                },
            ]);
        }, 1000);
    });
};

const fetchPermissions = (userId: string): Promise<Permission[]> => {
    const permissions = {
        '0': [
            { id: '12', text: 'RFQ Viewer' },
            { id: '13', text: 'RFQ Assistant' },
        ],
        '1': [
            { id: '12', text: 'RFQ Viewer' },
            { id: '13', text: 'RFQ Assistant' },
        ],
        '2': [
            { id: '12', text: 'RFQ Viewer' },
            { id: '13', text: 'RFQ Assistant' },
        ],
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            switch (userId) {
                case '0':
                    resolve(permissions['0']);
                    break;
                case '1':
                    resolve(permissions['1']);
                    break;
                case '2':
                    resolve(permissions['2']);
                    break;
                default:
                    reject(new Error('Invalid user id'));
            }
        }, 1000);
    });
};

const useUserPermissions = (): {
    users: User[];
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
    usersWithPermission: UserPermission[];
    setUsersWithPermission: React.Dispatch<React.SetStateAction<UserPermission[]>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: any;
    setError: React.Dispatch<React.SetStateAction<any>>;
    permissions: Permission[];
    setPermissions: React.Dispatch<React.SetStateAction<Permission[]>>;
    getPermissionsByUserId: (userId: string) => void;
} => {
    const { users, setUsers, usersWithPermission, setUsersWithPermission, loading, setLoading, error, setError } =
        useContext(UserPermissionsContext);

    const [permissions, setPermissions] = useState<Permission[]>([]);

    useEffect(() => {
        setLoading(true);
        setUsers([]);
        setError(null);
        fetchUsers()
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    const getPermissionsByUserId = (userId: string) => {
        setLoading(true);
        setPermissions([]);
        setError(null);
        fetchPermissions(userId)
            .then((data) => {
                setPermissions(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    };

    return {
        users,
        setUsers,
        usersWithPermission,
        setUsersWithPermission,
        loading,
        setLoading,
        error,
        setError,
        permissions,
        setPermissions,
        getPermissionsByUserId,
    };
};

export default useUserPermissions;
