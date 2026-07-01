import { useState } from 'react';

import { books } from '../data/books';
import { bookService } from '../services/bookService';

export const useBooks = () => {
  const [books, setBooks] = useState(books);
  const [searchTerm, setSearchTerm] = useState('');

  const displayedBooks = searchTerm.trim() ? bookService.searchBooks(books, searchTerm) : books;

  const addBook = (titulo) => {
    setBooks(bookService.addBook(books, titulo));
  };

  const deleteBook = (id) => {
    setBooks(bookService.deleteBook(books, id));
  };

  return {
    displayedBooks,
    searchTerm,
    setSearchTerm,
    addBook,
    deleteBook,
  };
};
