export const useDeleteBook = (books, setBooks) => {
  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return { deleteBook };
};
