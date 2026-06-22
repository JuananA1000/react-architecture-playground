import React from 'react';

export default function BookList({ libros, onDelete }) {
  return (
    <div>
      <h2>Todos los Libros</h2>
      <ul>
        {libros.map((libro) => (
          <li key={libro.id}>
            {libro.title} de {libro.author}
            <button onClick={() => onDelete(libro.id)}>Borrar Libro</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
