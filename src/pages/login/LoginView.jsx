import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth.js';
import { User } from 'lucide-react';
import { Button } from '../../components/ui/Button.jsx';

export const LoginView = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <div className="max-w-md mx-auto py-20 px-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <User size={48} className="mx-auto mb-4 text-slate-900 bg-slate-50 p-2 rounded-full" />
                <h2 className="text-2xl font-semibold text-slate-800 mb-6">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit} className="text-left space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Correo electrónico</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder="usuario@ejemplo.com"
                            className="w-full bg-slate-50 p-3 rounded-lg focus:ring-2 focus:ring-slate-100 outline-none text-slate-800"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Contraseña</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full bg-slate-50 p-3 rounded-lg focus:ring-2 focus:ring-slate-100 outline-none text-slate-800"
                        />
                    </div>
                    <Button type="submit" className="w-full py-3 mt-4">Ingresar a mi cuenta</Button>
                </form>
            </div>
        </div>
    );
};