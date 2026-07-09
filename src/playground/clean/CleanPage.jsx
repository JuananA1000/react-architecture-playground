import { createInMemoryBookRepository } from './infrastructure/repositories/InMemoryBookRepository';

import { agregarLibro } from './application/useCases/addBook.js';
import { eliminarLibro } from './application/useCases/deleteBook.js';
import { obtenerLibros } from './application/useCases/getBooks.js';
import { buscarLibros } from './application/useCases/searchBooks.js';

import { useLibros } from './presentation/hooks/useBooks.js';

import BookList from './presentation/components/BookList.jsx';
import BookForm from './presentation/components/BookForm.jsx';

const repository = createInMemoryBookRepository();
const addBook = agregarLibro(repository);
const deleteBook = eliminarLibro(repository);
const getBooks = obtenerLibros(repository);
const searchBooks = buscarLibros(repository);

export const CleanPage = () => {
  const { libros, handleAgregarLibro, handleEliminarLibro, handleBuscar } = useLibros({
    obtenerLibros: getBooks,
    agregarLibro: addBook,
    eliminarLibro: deleteBook,
    buscarLibros: searchBooks,
  });

  return (
    <div>
      <h2>Clean</h2>
      <BookForm alAgregarLibro={handleAgregarLibro} />
      <BookList libros={libros} alBorrar={handleEliminarLibro} alBuscar={handleBuscar} />
    </div>
  );
};
