import { useNavigate, useParams } from 'react-router-dom';
import { BookOpen, CheckCircle, X, ShoppingCart, ChevronRight } from 'lucide-react';
import { Button } from '../../components/ui/Button.jsx';
import { useCart } from '../../hooks/useCart.js';
import { MOCK_BOOKS } from '../../mocks/books.js';

export const BookDetailView = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { addToCart } = useCart();
    const book = MOCK_BOOKS.find(b => b.id + '' === id) || MOCK_BOOKS[0];

    return (
        <div className="max-w-4xl mx-auto py-12 px-6">
            <button
                onClick={() => navigate('/home')}
                className="text-slate-700 mb-6 flex items-center hover:underline font-medium"
            >
                <ChevronRight className="rotate-180 mr-2" size={18} /> Volver al catálogo
            </button>

            <div className="flex flex-col md:flex-row gap-10 bg-white p-8 rounded-2xl shadow-sm">
                <div className={`w-full md:w-1/3 h-96 ${book.cover} rounded-xl flex items-center justify-center overflow-hidden`}>
                    <BookOpen size={80} className="text-slate-400" />
                </div>

                <div className="flex-1 flex flex-col">
                    <div className="mb-4 flex items-center space-x-3">
                        <span className="bg-slate-50 text-slate-700 text-xs px-2 py-1 rounded font-semibold uppercase tracking-wider">{book.category}</span>
                        <span className="bg-slate-50 text-slate-700 text-xs px-2 py-1 rounded font-semibold uppercase tracking-wider">{book.type}</span>
                    </div>

                    <h1 className="text-3xl font-semibold mb-2 text-slate-800">{book.title}</h1>
                    <p className="text-lg text-gray-500 mb-6 font-medium">{book.author}</p>

                    <div className="text-3xl font-semibold text-slate-900 mb-6">${book.price}</div>

                    <p className="text-slate-700 mb-8 text-base leading-relaxed">{book.description}</p>

                    <div className="mb-8">
                        <span className="font-semibold text-slate-800 block mb-1">Disponibilidad:</span>
                        {book.stock > 0 ? (
                            <span className="text-green-600 flex items-center"><CheckCircle size={18} className="mr-1"/> En stock ({book.stock} unid.)</span>
                        ) : (
                            <span className="text-red-600 flex items-center"><X size={18} className="mr-1"/> Agotado temporalmente</span>
                        )}
                    </div>

                    <div className="mt-auto pt-6">
                        <Button disabled={book.stock === 0} onClick={() => addToCart(book)} className="w-full py-4 text-lg">
                            <ShoppingCart className="inline mr-2" size={20}/> Añadir al carrito
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};