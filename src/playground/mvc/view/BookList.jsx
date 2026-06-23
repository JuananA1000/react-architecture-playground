import React from 'react';

export default function BookList({ libros, alBorrar }) {
  return (
    <>
      <h3>Todos los Libros</h3>
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
