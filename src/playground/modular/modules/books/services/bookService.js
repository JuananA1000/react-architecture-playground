import { createBook } from '../utils/createBook';

export const bookService = {
  addBook(books, titulo) {
    return [
      ...books,
      createBook({
        id: Date.now(),
        titulo,
        autor: '',
        anno: '',
        genero: '',
        resumen: '',
      }),
    ];
  },

  deleteBook(books, id) {
    return books.filter((book) => book.id !== id);
  },

  searchBooks(books, texto) {
    return books.filter((book) => book.titulo.toLowerCase().includes(texto.toLowerCase()));
  },
};
