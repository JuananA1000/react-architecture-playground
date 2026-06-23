import React from 'react';

export default function BookList({ libros, alBorrar }) {
  return (
    <div>
      <h2>Todos los Libros</h2>
      <ul>
        {libros.map((libro) => (
          <li key={libro.id}>
            {libro.titulo} de {libro.autor}
            <button onClick={() => alBorrar(libro.id)}>Borrar Libro</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
