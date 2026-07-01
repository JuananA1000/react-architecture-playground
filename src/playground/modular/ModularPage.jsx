import { BookForm, BookList, BookSearch, useBooks } from './modules/books';

export const ModularPage = () => {
  // const { addBook } = useBooks();
  return (
    <div>
      <h2>Modular Monolith</h2>
      <BookSearch  />

      <BookForm  />
      {/* <BookList /> */}

    </div>
  );
};
