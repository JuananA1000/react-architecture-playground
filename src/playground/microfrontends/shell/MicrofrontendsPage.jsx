import { useState } from 'react';

import { BookForm, BookList, BookSearch, BookService } from '../books-mf';
import { books } from '../shared/books';

export const MicrofrontendsPage = () => {
  const [libros, setLibros] = useState(books);
  const [searchTerm, setSearchTerm] = useState('');

  const displayedBooks = searchTerm.trim() ? BookService.buscarLibro(libros, searchTerm) : libros;
  
  const handleAnnadirLibro = ({ titulo, autor }) => {
    setLibros(BookService.annadirLibro(libros, { titulo, autor }));
  };

  const handleBorrarLibro = (id) => {
    setLibros(BookService.borrarLibro(libros, id));
  };

  return (
    <div>
      <h2>Microfrontends</h2>

      <BookSearch searchTerm={searchTerm} onSearch={setSearchTerm} />
      <BookForm onAddBook={handleAnnadirLibro} />
      <BookList libros={displayedBooks} onDelete={handleBorrarLibro} />
    </div>
  );
};
