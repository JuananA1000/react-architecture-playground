import React from 'react';

export default function BookList({ libros, onDelete }) {
  return (
    <div>
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
