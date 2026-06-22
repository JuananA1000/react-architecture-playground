import React from 'react'

export default function BookList( { books, onDelete } ) {
  return (
    <div>
      <h3>Todos los Libros</h3>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} de {book.author}
            <button onClick={() => onDelete(book.id)}>Borrar Libro</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
