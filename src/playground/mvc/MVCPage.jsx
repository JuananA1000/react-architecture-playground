import {books} from "./model/BookModel";

import BookForm from "./view/BookForm";
import BookList from "./view/BookList";
import BookSearch from "./view/BookSearch";


export const MVCPage = () => {
  return (
    <div>
      <h2>Modelo Vista-Controlador</h2>
      <BookForm onAddBook={(book) => console.log('Libro añadido:', book)} />
      <BookList books={books} onDelete={() => {}} />
      <BookSearch searchTerm="" onSearch={() => {}} />
    </div>
  );
};
