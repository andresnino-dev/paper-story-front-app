import { Search, Plus, CreditCard, CheckCircle } from 'lucide-react';

export const HowItWorksSection = () => {
    const steps = [
        {
            icon: Search,
            title: 'Explorar',
            description: 'Busca y descubre libros en nuestro catálogo'
        },
        {
            icon: Plus,
            title: 'Agregar',
            description: 'Añade tus favoritos al carrito'
        },
        {
            icon: CreditCard,
            title: 'Comprar',
            description: 'Procesa tu compra de forma segura'
        },
        {
            icon: CheckCircle,
            title: 'Confirmar',
            description: 'Recibe confirmación de tu orden'
        }
    ];

    return (
        <section className="py-16 px-6 bg-slate-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-semibold text-slate-900 mb-12 text-center">Cómo Funciona</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="flex flex-col items-center">
                                <div className="bg-slate-900 rounded-full p-4 mb-4">
                                    <Icon size={32} className="text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm text-center">{step.description}</p>
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute w-12 h-1 bg-slate-900 ml-32 mt-16"></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

