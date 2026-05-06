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
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <div
                    className="flex items-center cursor-pointer text-slate-900 font-semibold text-2xl tracking-tight"
                    onClick={() => navigate('/')}
                    aria-label="Ir al inicio"
                >
                    <BookOpen className="mr-3 text-slate-700" size={28} />
                    <span>Relatos de Papel</span>
                </div>

                <div className="flex items-center space-x-5">
                    <button
                        onClick={() => navigate('/home')}
                        className="text-slate-700 hover:text-slate-900 font-medium px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-100"
                    >
                        Catálogo
                    </button>

                    <div
                        className="relative cursor-pointer text-slate-700 hover:text-slate-900"
                        onClick={() => setIsCartOpen(true)}
                        aria-label="Abrir carrito"
                    >
                        <ShoppingCart size={24} />
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-slate-900 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{totalItems}</span>
                        )}
                    </div>

                    <button
                        onClick={() => navigate(isAuthenticated ? '/profile' : '/login')}
                        className="text-slate-700 hover:text-slate-900 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-100"
                        aria-label="Ir a perfil"
                    >
                        <User size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
};