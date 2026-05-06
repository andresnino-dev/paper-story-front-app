import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const LandingView = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6 py-12">
            <BookOpen size={80} className="text-slate-900 mb-8" />
            <h1 className="text-5xl font-semibold text-slate-900 mb-4 tracking-tight">Bienvenido a Relatos de Papel</h1>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl">Tu librería de confianza. Descubre mundos increíbles, aprende nuevas habilidades y sumérgete en la magia de la lectura.</p>
            <Button onClick={() => navigate('/home')} className="text-lg px-8 py-4">Explorar el Catálogo</Button>
        </div>
    );
};