import { CurrentUserData } from '../contracts';

const getCurrentUser = async () => {
    const data = await localStorage.getItem('currentUserData');

    if (!data) {
        throw new Error('Failed to load current user');
    }

    const currentUser: CurrentUserData = JSON.parse(data);
    return currentUser;
};

export const currentUserService = {
    getCurrentUser,
};
