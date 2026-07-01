import { BookForm, BookList, BookSearch, useBooks } from './modules/books';

export const ModularPage = () => {
  // const { addBook } = useBooks();
  return (
    <div>
      <h2>Modular Monolith</h2>

      <BookForm  />
      {/* <BookList /> */}
      <BookSearch  />

    </div>
  );
};
