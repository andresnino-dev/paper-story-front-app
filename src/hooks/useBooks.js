import { useEffect, useState } from 'react';
import { MOCK_BOOKS } from '../mocks/books.js';

const MOCK_DELAY_MS = 700;

export const useBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setBooks(MOCK_BOOKS);
            setLoading(false);
        }, MOCK_DELAY_MS);

        return () => clearTimeout(timerId);
    }, []);

    const getBookById = (bookId) => books.find(book => String(book.id) === bookId) || null;

    return {
        books,
        loading,
        getBookById,
    };
};
