export const useAddBook = (books, setBooks) => {
  const addBook = (titulo) => {
    setBooks([
      ...books,
      {
        id: Date.now(),
        titulo,
      },
    ]);
  };

  return { addBook };
};
