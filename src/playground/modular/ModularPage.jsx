import { BookForm, BookList, BookSearch, useBooks } from './modules/books';

export const ModularPage = () => {
  const { displayedBooks, searchTerm, setSearchTerm, addBook, deleteBook } = useBooks();

  const handleAddBook = ({ titulo }) => {
    if (titulo.trim()) {
      addBook(titulo);
    }
  };

  return (
    <div>
      <h2>Modular Monolith</h2>

      <BookForm alAgregarLibro={handleAddBook} />
      <BookList books={displayedBooks} onDelete={deleteBook} />
      <BookSearch searchTerm={searchTerm} alBuscar={(value) => setSearchTerm(value)} />
    </div>
  );
};
