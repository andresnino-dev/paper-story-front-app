import { useAuth } from '../../hooks/useAuth.js';
import { Button } from '../../components/ui/Button.jsx';
import { LogOut } from 'lucide-react';
import { MOCK_ORDERS } from '../../mocks/orders.js';

export const ProfileView = () => {
    const { user, logout } = useAuth();

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Mi Perfil</h2>
                <Button variant="danger" onClick={logout} className="flex items-center"><LogOut size={18} className="mr-2"/> Cerrar Sesión</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-1 bg-white p-6 rounded-xl shadow-sm border h-fit text-center">
                    <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">{user?.avatar}</div>
                    <h3 className="text-xl font-bold text-gray-900">{user?.name}</h3>
                    <p className="text-gray-500 mb-4">{user?.email}</p>
                    <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-bold">Cuenta Activa</span>
                </div>
                <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-sm border">
                    <h3 className="text-xl font-bold mb-6 border-b pb-2">Últimos 5 pedidos</h3>
                    <div className="space-y-4">
                        {MOCK_ORDERS.map(order => (
                            <div key={order.id} className="flex flex-wrap justify-between items-center p-4 border rounded-lg hover:bg-gray-50">
                                <div>
                                    <p className="font-bold text-gray-900">{order.id}</p><p className="text-sm text-gray-500">{order.date}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-blue-700">${order.total.toFixed(2)}</p>
                                    <p className={`text-xs font-bold ${order.status === 'Entregado' ? 'text-green-600' : 'text-red-600'}`}>{order.status}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};