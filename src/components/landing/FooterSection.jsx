import { Mail, GitPullRequestArrow } from 'lucide-react';

export const FooterSection = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-white py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h4 className="font-semibold mb-4">Proyecto</h4>
                        <p className="text-slate-300 text-sm mb-2">Plataforma de e-commerce de libros</p>
                        <p className="text-slate-400 text-xs">Desarrollo Web Full Stack - UNIR</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Autor</h4>
                        <p className="text-slate-300 text-sm">Andrés Niño</p>
                        <p className="text-slate-400 text-xs">Estudiante de Maestria de Ingeniería de Software y Sistemas Informaticos</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Contacto</h4>
                        <div className="flex gap-4">
                            <a href="mailto:alvaroandres.ni1397@comunidadunir.net" className="text-slate-300 hover:text-white transition-colors">
                                <Mail size={20} />
                            </a>
                            <a href="https://github.com/andresnino-dev" className="text-slate-300 hover:text-white transition-colors">
                                <GitPullRequestArrow size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-700 pt-8">
                    <p className="text-slate-400 text-center text-sm">
                        © {currentYear} Relatos de Papel. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

