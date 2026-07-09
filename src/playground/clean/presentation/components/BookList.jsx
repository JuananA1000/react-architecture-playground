import { useState } from 'react';
import BookSearch from './BookSearch.jsx';

export default function BookList({ libros, alBorrar, alBuscar }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleBuscar = (value) => {
    setSearchTerm(value);
    alBuscar(value);
  };

  return (
    <>
      <h3>Todos los Libros</h3>
      <BookSearch searchTerm={searchTerm} alBuscar={handleBuscar} />
      <ul>
        {libros.map((libro) => (
          <li key={libro.id}>
            {libro.titulo} de {libro.autor} ({libro.anno}) - {libro.genero}
            <button onClick={() => alBorrar(libro.id)}>Borrar Libro</button>
          </li>
        ))}
      </ul>
    </>
  );
}
