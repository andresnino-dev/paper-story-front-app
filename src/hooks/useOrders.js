import { useEffect, useState } from 'react';
import { MOCK_ORDERS } from '../mocks/orders.js';

const MOCK_DELAY_MS = 700;

export const useOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setOrders(MOCK_ORDERS);
            setLoading(false);
        }, MOCK_DELAY_MS);

        return () => clearTimeout(timerId);
    }, []);

    return {
        orders,
        loading,
    };
};
