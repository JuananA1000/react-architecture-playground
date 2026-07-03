import { createBook } from '../entities/book';

export const createBookService = (repository) => ({
  getBooks() {
    return repository.getAll();
  },

  addBook(bookData) {
    repository.add(
      createBook({
        id: Date.now(),
        titulo: bookData.titulo,
        autor: bookData.autor || '',
        anno: bookData.anno || '',
        genero: bookData.genero || '',
        resumen: bookData.resumen || '',
      }),
    );
  },

  deleteBook(id) {
    repository.remove(id);
  },

  searchBooks(texto) {
    return repository.getAll().filter((book) => book.titulo.toLowerCase().includes(texto.toLowerCase()));
  },
});
