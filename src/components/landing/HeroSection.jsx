import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroSection = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6 py-16 bg-gradient-to-b from-slate-50 to-white">
            <BookOpen size={80} className="text-slate-900 mb-8" />
            <h1 className="text-5xl font-semibold text-slate-900 mb-4 tracking-tight">Relatos de Papel</h1>
            <div className="mb-6">
                <p className="text-lg text-gray-600 font-medium">Por Andrés Niño</p>
                <p className="text-sm text-gray-500">Universidad UNIR | Desarrollo Web Full Stack</p>
            </div>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl">Tu librería de confianza. Descubre mundos increíbles, aprende nuevas habilidades y sumérgete en la magia de la lectura.</p>
            <Button onClick={() => navigate('/home')} className="text-lg px-8 py-4">Explorar el Catálogo</Button>
        </div>
    );
};

