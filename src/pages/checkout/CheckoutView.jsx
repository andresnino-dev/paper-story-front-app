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
            <div className="max-w-2xl mx-auto py-16 px-4 text-center">
                <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío</h2>
                <Button onClick={() => navigate('/home')}>Volver al catálogo</Button>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto py-8 px-4">
            <h2 className="text-3xl font-bold mb-8">Finalizar Compra</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border mb-6">
                <h3 className="text-xl font-bold mb-4 border-b pb-2">Resumen del pedido</h3>
                <div className="space-y-3 mb-6">
                    {cart.map(item => (
                        <div key={item.id} className="flex justify-between text-gray-700">
                            <span>{item.quantity}x {item.title}</span><span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between text-2xl font-bold border-t pt-4 text-gray-900">
                    <span>Total a pagar:</span><span className="text-blue-700">${totalPrice}</span>
                </div>
            </div>
            <div className="flex justify-end">
                <Button onClick={handlePayment} className="px-8 py-3 text-lg bg-green-600 hover:bg-green-700">Confirmar y Pagar</Button>
            </div>

            {showFakeAlert && (
                <div className="fixed inset-0 bg-black opacity-60 z-[60] flex items-center justify-center">
                    <div className="bg-white p-8 rounded-xl text-center max-w-sm mx-4">
                        <CheckCircle size={60} className="mx-auto text-green-500 mb-4" />
                        <h3 className="text-2xl font-bold mb-2">¡Pedido realizado!</h3>
                        <p className="text-xs text-gray-400 mt-4 mb-4">(Reemplazar esto con window.alert() en código local)</p>
                        <Button onClick={completeAlert} className="w-full">Aceptar</Button>
                    </div>
                </div>
            )}
        </div>
    );
};