import { MOCK_BOOKS } from '../mocks/books.js';

export const useBooks = () => {
    const getBookById = (bookId) => MOCK_BOOKS.find(book => book.id + '' === bookId) || null;

    return {
        books: MOCK_BOOKS,
        getBookById,
    };
};
