import { useState } from 'react';
import { GlobalContext } from './GlobalContext.jsx';


const GlobalProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <GlobalContext.Provider value={{
            user, setUser, cart, setCart, isCartOpen, setIsCartOpen
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalProvider };