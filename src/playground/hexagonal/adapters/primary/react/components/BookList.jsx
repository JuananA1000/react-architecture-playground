const BookList = ({ books, onDelete }) => {
  return (
    <div>
      <h3>Todos los libros</h3>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.titulo} de {book.autor}
            <button onClick={() => onDelete(book.id)}>Borrar Libro</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
