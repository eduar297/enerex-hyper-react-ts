import { useContext } from 'react';
import { CurrentUserContext } from '../contexts';
import { CurrentUserData } from '../types';

const useCurrentUser = (): {
    currentUserData: CurrentUserData | null;
    setCurrentUserData: React.Dispatch<React.SetStateAction<CurrentUserData | null>>;
} => {
    const { currentUserData, setCurrentUserData } = useContext(CurrentUserContext);

    return {
        currentUserData,
        setCurrentUserData,
    };
};

export default useCurrentUser;
