import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const LandingView = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
            <BookOpen size={80} className="text-blue-600 mb-6" />
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Bienvenido a Relatos de Papel</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">Tu librería de confianza. Descubre mundos increíbles, aprende nuevas habilidades y sumérgete en la magia de la lectura.</p>
            <Button onClick={() => navigate('/home')} className="text-lg px-8 py-4">Explorar el Catálogo</Button>
        </div>
    );
};