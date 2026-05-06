import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext.jsx';
import {MOCK_USER} from "../mocks/user.js";

export const useAuth = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(GlobalContext);

    const login = (email) => {
        if (email) {
            setUser(MOCK_USER);
            navigate('/profile');
        }
    };

    const logout = () => {
        setUser(null);
        navigate('/home');
    };

    return { user, login, logout, isAuthenticated: !!user };
};