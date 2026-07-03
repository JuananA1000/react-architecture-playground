import { books as initialBooks } from './books';

export const createMemoryRepository = () => {
  let storedBooks = [...initialBooks];

  return {
    getAll() {
      return storedBooks;
    },

    add(book) {
      storedBooks.push(book);
    },

    remove(id) {
      storedBooks = storedBooks.filter((book) => book.id !== id);
    },
  };
};
