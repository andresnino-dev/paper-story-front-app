import { Code, Palette, Zap } from 'lucide-react';

export const AboutSection = () => {
    const technologies = [
        {
            icon: Code,
            name: 'React',
            description: 'Framework JavaScript moderno'
        },
        {
            icon: Palette,
            name: 'Tailwind CSS',
            description: 'Estilos utility-first'
        },
        {
            icon: Zap,
            name: 'Vite',
            description: 'Bundler ultrarrápido'
        }
    ];

    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-semibold text-slate-900 mb-8 text-center">Sobre Este Proyecto</h2>
                <div className="bg-slate-50 p-8 rounded-lg mb-12">
                    <p className="text-gray-700 leading-relaxed mb-4">
                        <strong>Relatos de Papel</strong> es una plataforma de e-commerce especializada en la venta de libros.
                        Desarrollada como proyecto académico para la clase de <strong>Desarrollo Web Full Stack</strong> en la Universidad <strong>UNIR</strong>.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        La aplicación permite a los usuarios explorar un catálogo de libros, agregar productos a su carrito,
                        realizar compras, y gestionar su perfil personal. Cada transacción genera una orden que puede consultarse
                        en el historial del usuario.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Está construida con tecnologías modernas del front-end, priorizando una experiencia de usuario limpia
                        y responsive.
                    </p>
                </div>

                <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">Stack Tecnológico</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {technologies.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                            <div key={index} className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-lg">
                                <Icon size={40} className="text-slate-900 mb-3" />
                                <h4 className="font-semibold text-slate-900 mb-2">{tech.name}</h4>
                                <p className="text-gray-600 text-sm">{tech.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

