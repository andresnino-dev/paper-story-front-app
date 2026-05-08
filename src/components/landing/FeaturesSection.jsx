import { ShoppingCart, BookOpen, User, Zap } from 'lucide-react';

export const FeaturesSection = () => {
    const features = [
        {
            icon: BookOpen,
            title: 'Catálogo Completo',
            description: 'Explora miles de libros de diferentes géneros y autores.'
        },
        {
            icon: ShoppingCart,
            title: 'Carrito Inteligente',
            description: 'Añade libros y gestiona tu compra de forma fácil.'
        },
        {
            icon: User,
            title: 'Perfil Personal',
            description: 'Gestiona tu cuenta y visualiza tu historial de órdenes.'
        },
        {
            icon: Zap,
            title: 'Proceso Rápido',
            description: 'Compra, paga y recibe confirmación al instante.'
        }
    ];

    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-semibold text-slate-900 mb-12 text-center">Características Principales</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div key={index} className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-lg hover:shadow-md transition-shadow">
                                <Icon size={48} className="text-slate-900 mb-4" />
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

