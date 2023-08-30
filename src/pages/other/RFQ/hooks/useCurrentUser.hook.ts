import { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts';
import { CurrentUserData } from '../contracts';
import { currentUserService } from '../services';

const useCurrentUser = (): {
    currentUserData: CurrentUserData | undefined;
    setCurrentUserData: React.Dispatch<React.SetStateAction<CurrentUserData | undefined>>;
} => {
    const { currentUserData, setCurrentUserData } = useContext(CurrentUserContext);

    useEffect(() => {
        currentUserService
            .getCurrentUser()
            .then((data) => setCurrentUserData(data))
            .catch((err) => {
                throw new Error('Failed to load current user');
            });
    }, [setCurrentUserData]);

    return {
        currentUserData,
        setCurrentUserData,
    };
};

export default useCurrentUser;
