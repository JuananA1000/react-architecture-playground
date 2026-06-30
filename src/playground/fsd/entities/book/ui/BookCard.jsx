const BookCard = ({ book }) => {
  return (
    <div>
      <h3>{book.titulo}</h3>
      <p>{book.autor}</p>
    </div>
  );
};

export default BookCard;