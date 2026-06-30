export const useSearchBook = (books) => {
  const searchBook = (searchTerm) => {
    return books.filter((book) => book.titulo.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  return { searchBook };
};
