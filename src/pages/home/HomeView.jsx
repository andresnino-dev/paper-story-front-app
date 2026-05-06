import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, BookOpen } from 'lucide-react';
import { MOCK_BOOKS } from '../../mocks/books.js';

export const HomeView = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBooks, setFilteredBooks] = useState(MOCK_BOOKS);

    useEffect(() => {
        const results = MOCK_BOOKS.filter(book =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBooks(results);
    }, [searchTerm]);

    return (
        <div className="max-w-6xl mx-auto py-8 px-4">
            <div className="relative max-w-2xl mx-auto mb-10">
                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Buscar libros por título..." className="w-full pl-12 pr-4 py-4 border-2 rounded-full text-lg shadow-sm focus:outline-none focus:border-blue-500"/>
                <Search className="absolute left-4 top-4 text-gray-400" size={24} />
            </div>
            <h2 className="text-2xl font-bold mb-6">Catálogo de Libros</h2>
            {filteredBooks.length === 0 ? (
                <div className="text-center text-gray-500 py-12">No se encontraron libros.</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredBooks.map(book => (
                        <div key={book.id} className="border rounded-xl p-4 flex flex-col hover:shadow-lg transition-shadow bg-white cursor-pointer" onClick={() => navigate(`/book/${book.id}`)}>
                            <div className={`h-56 ${book.cover} rounded-lg mb-4 flex items-center justify-center`}><BookOpen size={48} /></div>
                            <h3 className="font-bold text-gray-900 leading-tight mb-1">{book.title}</h3>
                            <p className="text-sm text-gray-500 mb-3">{book.author}</p>
                            <div className="mt-auto flex justify-between items-center border-t pt-3">
                                <span className="font-bold text-lg text-blue-700">${book.price}</span>
                                <span className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-600">{book.type}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};