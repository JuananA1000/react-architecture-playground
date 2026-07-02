const BookCard = ({ book, onDelete }) => {
  return (
    <div>
      {/*

      <p>{book.autor}</p>

      <button onClick={() => onDelete(book.id)}>Eliminar</button> */}

      
        <li key={book.id}>
            {book.titulo} de {book.autor}
            <button onClick={() => onDelete(book.id)}>Borrar Libro</button>
          </li>


     
    </div>
  );
};

export default BookCard;
