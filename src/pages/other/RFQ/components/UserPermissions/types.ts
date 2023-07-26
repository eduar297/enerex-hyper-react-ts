export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
};

export type Permission = {
    id: string;
    text: string;
};

export type UserPermission = {
    user: User;
    permission: Permission;
};
