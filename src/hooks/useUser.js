import { useEffect, useState } from 'react';
import { MOCK_USER } from '../mocks/user.js';

const MOCK_DELAY_MS = 700;

export const useUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setUser(MOCK_USER);
            setLoading(false);
        }, MOCK_DELAY_MS);

        return () => clearTimeout(timerId);
    }, []);

    return {
        user,
        loading,
    };
};
