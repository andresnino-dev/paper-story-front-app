import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext.jsx';
import { useCart } from '../../hooks/useCart';
import { Button } from '../ui/Button';
import { ShoppingCart, X, Plus, Minus, Trash2, BookOpen } from 'lucide-react';

export const CartDrawer = () => {
    const navigate = useNavigate();
    const { isCartOpen, setIsCartOpen } = useContext(GlobalContext);
    const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

    if (!isCartOpen) return null;

    return (
        <>
            {/* Overlay: sutil para mantener foco en el panel, con blur ligero */}
            <div
                className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-50"
                onClick={() => setIsCartOpen(false)}
                aria-hidden="true"
            />

            {/* Drawer panel: panel blanco, bordes redondeados en el lado izquierdo, sombra tenue */}
            <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white z-50 flex flex-col transform transition-transform duration-300 shadow-sm rounded-l-2xl overflow-hidden">
                <div className="px-6 py-5 flex items-center justify-between bg-white">
                    <h2 className="text-lg font-semibold tracking-tight text-slate-800 flex items-center gap-3">
                        <ShoppingCart className="text-slate-700" />
                        <span>Tu Carrito <span className="text-sm text-gray-500 font-medium">({totalItems})</span></span>
                    </h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-100"
                        aria-label="Cerrar carrito"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                    {cart.length === 0 ? (
                        <div className="text-center text-gray-500 mt-12">Tu carrito está vacío.</div>
                    ) : (
                        <div className="grid gap-4">
                            {cart.map(item => (
                                <div key={item.id} className="flex items-start gap-4 bg-white rounded-2xl shadow-sm p-4 hover:shadow-md hover:-translate-y-0.5 transition-transform relative">
                                    <div className={`w-20 h-28 sm:w-24 sm:h-32 ${item.cover} rounded-xl flex items-center justify-center overflow-hidden shrink-0`}>
                                        {/* Placeholder icon if cover is not an image */}
                                        <BookOpen size={28} className="text-slate-400" />
                                    </div>

                                    <div className="flex-1">
                                        <h4 className="text-sm font-medium text-slate-800 leading-tight">{item.title}</h4>
                                        <p className="text-sm text-gray-500 mt-1">{item.type}</p>
                                        <div className="text-slate-900 font-semibold mt-3">${item.price}</div>

                                        <div className="flex items-center gap-3 mt-4">
                                            <button
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="p-2 bg-slate-100 rounded-md hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-100"
                                                aria-label={`Disminuir cantidad de ${item.title}`}>
                                                <Minus size={14} />
                                            </button>
                                            <span className="text-sm text-slate-800 font-medium">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="p-2 bg-slate-100 rounded-md hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-100"
                                                aria-label={`Aumentar cantidad de ${item.title}`}>
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="absolute top-3 right-3 text-slate-400 hover:text-slate-600"
                                        aria-label={`Eliminar ${item.title} del carrito`}>
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="px-6 py-6 bg-white">
                        <div className="flex items-center justify-between text-lg font-semibold text-slate-800 mb-4">
                            <span>Total:</span>
                            <span className="text-slate-900">${totalPrice}</span>
                        </div>
                        <Button className="w-full py-3 rounded-xl" onClick={() => { setIsCartOpen(false); navigate('/checkout'); }}>Proceder al Pago</Button>
                    </div>
                )}
            </div>
        </>
    );
};