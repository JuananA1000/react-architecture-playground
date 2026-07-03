import { useState } from 'react';

export const useBooks = (service) => {
  const [books, setBooks] = useState(service.getBooks());

  const reload = () => {
    setBooks([...service.getBooks()]);
  };

  const addBook = (titulo) => {
    service.addBook(titulo);

    reload();
  };

  const deleteBook = (id) => {
    service.deleteBook(id);

    reload();
  };

  const searchBook = (texto) => {
    if (!texto.trim()) {
      reload();
      return;
    }

    setBooks(service.searchBooks(texto));
  };

  return {
    books,
    addBook,
    deleteBook,
    searchBook,
  };
};
