const BookCard = ({ book, onDelete }) => {
  return (
    <div>
      <h3>{book.titulo}</h3>

      <p>{book.autor}</p>

      <button onClick={() => onDelete(book.id)}>Eliminar</button>
    </div>
  );
};

export default BookCard;
