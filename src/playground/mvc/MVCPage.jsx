import { libros } from './model/BookModel';

import BookForm from './view/BookForm';
import BookList from './view/BookList';
import BookSearch from './view/BookSearch';

export const MVCPage = () => {
  return (
    <div>
      <h2>Modelo Vista-Controlador</h2>
      <BookForm alAgregarLibro={(libro) => console.log('Libro añadido:', libro)} />
      <BookList libros={libros} alBorrar={() => {}} />
      <BookSearch searchTerm='' alBuscar={() => {}} />
    </div>
  );
};
