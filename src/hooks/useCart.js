import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext.jsx';

export const useCart = () => {
    const { cart, setCart, setIsCartOpen } = useContext(GlobalContext);

    const addToCart = (book) => {
        setCart(prev => {
            const exists = prev.find(item => item.id === book.id);
            if (exists) {
                return prev.map(item => item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...book, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (bookId) => {
        setCart(prev => prev.filter(item => item.id !== bookId));
    };

    const updateQuantity = (bookId, amount) => {
        setCart(prev => prev.map(item => {
            if (item.id === bookId) {
                const newQuantity = Math.max(1, item.quantity + amount);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    const clearCart = () => setCart([]);

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);

    return { cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice };
};