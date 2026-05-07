import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext.jsx';
import { useUser } from './useUser.js';

export const useAuth = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(GlobalContext);
    const { user: defaultUser, loading: authLoading } = useUser();

    const login = (email) => {
        if (email && defaultUser) {
            setUser(defaultUser);
            navigate('/profile');
        }
    };

    const logout = () => {
        setUser(null);
        navigate('/home');
    };

    return { user, login, logout, isAuthenticated: !!user, authLoading };
};