import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';

import { useUserPermissions } from './hooks';

import { Select } from '../UI/Form';
import { User, Permission } from './contracts';
import { useState } from 'react';

const UserPermissions = () => {
    const { users, usersWithPermission, setUsersWithPermission, permissions, getPermissionsByUserId } =
        useUserPermissions();

    const [userSelected, setUserSelected] = useState<User>();
    const [permissionSelected, setPermissionSelected] = useState<Permission>();

    return (
        <Container fluid>
            <Card>
                <Card.Header>Add user role</Card.Header>
                <Card.Body>
                    <Container>
                        <Row className="align-items-end mb-2">
                            <Col sm={4}>
                                <Select
                                    name="userSelected"
                                    value={userSelected?.id}
                                    handleChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                        const _user: User = users.find((u) => u.id === e.target.value) as User;
                                        setUserSelected(_user);
                                        getPermissionsByUserId(_user.id);
                                    }}
                                    label="Select an existing user"
                                    placeholder="Select an existing user"
                                    controlId="userSelected"
                                    options={users
                                        .filter(
                                            (user) => !usersWithPermission.find((uwp) => uwp.user.id === user.id)?.user
                                        )
                                        .map((user) => ({
                                            label: `${user.firstName} ${user.lastName}`,
                                            value: user.id,
                                        }))}
                                />
                            </Col>

                            <Col sm={4}>
                                <Select
                                    name="permissionSelected"
                                    value={permissionSelected?.id}
                                    handleChange={(e: any) => {
                                        const _permission: Permission = permissions.find(
                                            (p) => p.id === e.target.value
                                        ) as Permission;
                                        setPermissionSelected(_permission);
                                    }}
                                    label="Select a role"
                                    placeholder="Select a role"
                                    controlId="permissionSelected"
                                    options={permissions.map((permission) => ({
                                        label: permission.text,
                                        value: permission.id,
                                    }))}
                                />
                            </Col>

                            <Col sm={4}>
                                <Button
                                    variant="success"
                                    onClick={() => {
                                        if (userSelected && permissionSelected) {
                                            setUsersWithPermission([
                                                ...usersWithPermission,
                                                { user: userSelected, permission: permissionSelected },
                                            ]);
                                        }
                                    }}>
                                    Add
                                </Button>
                            </Col>
                        </Row>

                        {usersWithPermission.length > 0 && (
                            <Row className="mt-2">
                                <Col>
                                    <div style={{ overflow: 'auto', height: '100%' }} className="my-2">
                                        <Table responsive size="sm" hover>
                                            <thead>
                                                <tr>
                                                    <th>Full Name</th>
                                                    <th>Email</th>
                                                    <th>Permission</th>
                                                    <th>Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {usersWithPermission.map((userWithPermission, index) => (
                                                    <tr key={userWithPermission.user.id}>
                                                        <th scope="row">
                                                            <td>
                                                                {userWithPermission.user.firstName +
                                                                    ' ' +
                                                                    userWithPermission.user.lastName}
                                                            </td>
                                                        </th>
                                                        <td>{userWithPermission.user.email}</td>
                                                        <td>{userWithPermission.permission.text}</td>

                                                        <td>
                                                            <Button
                                                                variant="danger"
                                                                onClick={() => {
                                                                    setUsersWithPermission(
                                                                        usersWithPermission.filter(
                                                                            (uwp) =>
                                                                                uwp.user.id !==
                                                                                userWithPermission.user.id
                                                                        )
                                                                    );
                                                                }}>
                                                                <i className="mdi mdi-delete"></i>
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                            </Row>
                        )}
                    </Container>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default UserPermissions;
