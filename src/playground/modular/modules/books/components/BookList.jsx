import BookCard from './BookCard';

const BookList = ({ books, onDelete }) => {
  return (
    <>
      {books.map((book) => (
        <BookCard key={book.id} book={book} onDelete={onDelete} />
      ))}
    </>
  );
};

export default BookList;
