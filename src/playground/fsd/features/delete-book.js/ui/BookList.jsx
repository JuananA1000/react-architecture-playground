import React from 'react';

export default function BookList({ books, onDelete }) {
  return (
    <>
      <h3>Todos los Libros</h3>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.titulo} de {book.autor} ({book.anno}) - {book.genero}
            <button onClick={() => onDelete(book.id)}>Borrar Libro</button>
          </li>
        ))}
      </ul>
    </>
  );
}
