import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ShoppingCart, User } from 'lucide-react';
import { GlobalContext } from '../../context/GlobalContext.jsx';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';

export const Header = () => {
    const navigate = useNavigate();
    const { setIsCartOpen } = useContext(GlobalContext);
    const { totalItems } = useCart();
    const { isAuthenticated } = useAuth();

    return (
        <header className="bg-white shadow-sm sticky top-0 z-40">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center cursor-pointer text-blue-700 font-bold text-2xl" onClick={() => navigate('/')}>
                    <BookOpen className="mr-2" size={28} /> Relatos de Papel
                </div>
                <div className="flex items-center space-x-6">
                    <button onClick={() => navigate('/home')} className="text-gray-600 hover:text-blue-600 font-medium">Catálogo</button>
                    <div className="relative cursor-pointer text-gray-700 hover:text-blue-600" onClick={() => setIsCartOpen(true)}>
                        <ShoppingCart size={24} />
                        {totalItems > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{totalItems}</span>}
                    </div>
                    <button onClick={() => navigate(isAuthenticated ? '/profile' : '/login')} className="text-gray-700 hover:text-blue-600">
                        <User size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
};