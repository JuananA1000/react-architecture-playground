import BookCard from './BookCard';

const BookList = ({ books, onDelete }) => {
  return (
    <>
      <h3>Todos los libros</h3>
      {books.map((book) => (
        <BookCard key={book.id} book={book} onDelete={onDelete} />
      ))}
    </>
  );
};

export default BookList;
