import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart.js';
import { Button } from '../../components/ui/Button.jsx';
import { CheckCircle } from 'lucide-react';

export const CheckoutView = () => {
    const navigate = useNavigate();
    const { cart, totalPrice, clearCart } = useCart();
    const [showFakeAlert, setShowFakeAlert] = useState(false);

    const handlePayment = () => {
        setShowFakeAlert(true);
    };

    const completeAlert = () => {
        setShowFakeAlert(false); clearCart(); navigate('/home');
    };

    if (cart.length === 0) {
        return (
            <div className="max-w-2xl mx-auto py-20 px-6 text-center">
                <h2 className="text-2xl font-semibold text-slate-800 mb-6">Tu carrito está vacío</h2>
                <Button onClick={() => navigate('/home')}>Volver al catálogo</Button>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto py-12 px-6">
            <h2 className="text-3xl font-semibold text-slate-800 mb-8">Finalizar Compra</h2>

            <div className="bg-white p-6 rounded-2xl shadow-sm mb-6">
                <h3 className="text-xl font-medium mb-4 text-slate-800">Resumen del pedido</h3>
                <div className="space-y-4 mb-6">
                    {cart.map(item => (
                        <div key={item.id} className="flex justify-between text-slate-700">
                            <span>{item.quantity}x {item.title}</span>
                            <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between text-2xl font-semibold pt-2 text-slate-800">
                    <span>Total a pagar:</span>
                    <span className="text-slate-900">${totalPrice}</span>
                </div>
            </div>

            <div className="flex justify-end">
                <Button onClick={handlePayment} className="px-8 py-3 text-lg">Confirmar y Pagar</Button>
            </div>

            {showFakeAlert && (
                <div className="fixed inset-0 bg-slate-900/30 z-60 flex items-center justify-center backdrop-blur-sm">
                    <div className="bg-white p-8 rounded-2xl text-center max-w-sm mx-4 shadow-md">
                        <CheckCircle size={60} className="mx-auto text-green-500 mb-4" />
                        <h3 className="text-2xl font-semibold text-slate-800 mb-2">¡Pedido realizado!</h3>
                        <Button onClick={completeAlert} className="w-full">Aceptar</Button>
                    </div>
                </div>
            )}
        </div>
    );
};