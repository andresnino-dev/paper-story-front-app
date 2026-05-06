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
            <div className="fixed inset-0 bg-black opacity-50 z-50" onClick={() => setIsCartOpen(false)}></div>
            <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300">
                <div className="p-4 border-b flex justify-between items-center bg-gray-50">
                    <h2 className="text-xl font-bold flex items-center"><ShoppingCart className="mr-2"/> Tu Carrito ({totalItems})</h2>
                    <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-200 rounded-full"><X size={20} /></button>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                    {cart.length === 0 ? (
                        <div className="text-center text-gray-500 mt-10">Tu carrito está vacío.</div>
                    ) : (
                        <div className="space-y-4">
                            {cart.map(item => (
                                <div key={item.id} className="flex border rounded-lg p-3 relative">
                                    <div className={`w-16 h-20 ${item.cover} rounded mr-3 flex items-center justify-center flex-shrink-0`}><BookOpen size={24} /></div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-sm leading-tight pr-6">{item.title}</h4>
                                        <p className="text-xs text-gray-500">{item.type}</p>
                                        <div className="text-blue-600 font-bold mt-1">${item.price}</div>
                                        <div className="flex items-center space-x-3 mt-2">
                                            <button onClick={() => updateQuantity(item.id, -1)} className="p-1 bg-gray-100 rounded hover:bg-gray-200"><Minus size={14} /></button>
                                            <span className="text-sm">{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)} className="p-1 bg-gray-100 rounded hover:bg-gray-200"><Plus size={14} /></button>
                                        </div>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} className="absolute top-3 right-3 text-red-400 hover:text-red-600"><Trash2 size={18} /></button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {cart.length > 0 && (
                    <div className="border-t p-4 bg-gray-50">
                        <div className="flex justify-between text-xl font-bold mb-4"><span>Total:</span><span>${totalPrice}</span></div>
                        <Button className="w-full py-3" onClick={() => { setIsCartOpen(false); navigate('/checkout'); }}>Proceder al Pago</Button>
                    </div>
                )}
            </div>
        </>
    );
};