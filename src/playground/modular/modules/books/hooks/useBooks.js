import { useState } from 'react';

import { books as initialBooks } from '../data/books';
import { bookService } from '../services/bookService';

export const useBooks = () => {
  const [books, setBooks] = useState(initialBooks);
  const [searchTerm, setSearchTerm] = useState('');

  const displayedBooks = searchTerm.trim() ? bookService.searchBooks(books, searchTerm) : books;

  const addBook = (titulo) => {
    setBooks((prevBooks) => bookService.addBook(prevBooks, titulo));
  };

  const deleteBook = (id) => {
    setBooks((prevBooks) => bookService.deleteBook(prevBooks, id));
  };

  return {
    displayedBooks,
    searchTerm,
    setSearchTerm,
    addBook,
    deleteBook,
  };
};
