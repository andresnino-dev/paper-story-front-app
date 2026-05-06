import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, BookOpen } from 'lucide-react';
import { useBooks } from '../../hooks/useBooks.js';

export const HomeView = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const { books } = useBooks();
    const filteredBooks = useMemo(() => {
        return books.filter(book =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [books, searchTerm]);

    return (
        <div className="max-w-6xl mx-auto py-12 px-6">
            <div className="relative max-w-2xl mx-auto mb-12">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar libros por título..."
                    className="w-full pl-12 pr-4 py-4 rounded-full text-lg bg-slate-50 text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-100"
                />
                <Search className="absolute left-4 top-4 text-slate-400" size={24} />
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-slate-800 mb-8">Catálogo de Libros</h2>

            {filteredBooks.length === 0 ? (
                <div className="text-center text-gray-500 py-12">No se encontraron libros.</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredBooks.map(book => (
                        <div
                            key={book.id}
                            className="rounded-2xl p-4 flex flex-col hover:shadow-md transition-transform hover:-translate-y-0.5 bg-white cursor-pointer"
                            onClick={() => navigate(`/book/${book.id}`)}
                        >
                            <div className={`h-56 ${book.cover} rounded-xl mb-4 flex items-center justify-center overflow-hidden`}>
                                <BookOpen size={48} className="text-slate-400" />
                            </div>

                            <h3 className="text-base font-medium text-slate-800 leading-tight mb-1">{book.title}</h3>
                            <p className="text-sm text-gray-500 mb-4">{book.author}</p>

                            <div className="mt-auto flex items-center justify-between pt-1">
                                <span className="font-semibold text-lg text-slate-900">${book.price}</span>
                                <span className="text-sm bg-slate-50 px-3 py-1 rounded-full text-gray-500">{book.type}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};