const BookList = ({ books, onDelete }) => {
  return (
    <>
      <h3>Todos los libros</h3>
      {books.map((book) => (
        <>
          <li>
            {book.titulo} de {book.autor}
            <button onClick={() => onDelete(book.id)}>Borrar Libro</button>
          </li>
        </>
      ))}
    </>
  );
};

export default BookList;
