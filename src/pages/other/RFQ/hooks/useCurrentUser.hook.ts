import { useContext } from 'react';
import { CurrentUserContext } from '../contexts';
import { CurrentUserData } from '../types';

const useCurrentUser = (): {
    currentUserData: CurrentUserData | undefined;
    setCurrentUserData: React.Dispatch<React.SetStateAction<CurrentUserData | undefined>>;
} => {
    const { currentUserData, setCurrentUserData } = useContext(CurrentUserContext);

    return {
        currentUserData,
        setCurrentUserData,
    };
};

export default useCurrentUser;
