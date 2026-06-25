import { libros } from '../data/libros';

export const createInMemoryBookRepository = () => {
  let books = [...libros];

  return {
    obtenerTodos() {
      return books;
    },

    agregar(book) {
      books.push(book);
    },

    eliminar(id) {
      books = books.filter((book) => book.id !== id);
    },
  };
};
