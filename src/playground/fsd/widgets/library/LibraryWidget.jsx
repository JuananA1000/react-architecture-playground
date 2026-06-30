import { useState } from 'react';
import { books as initialBooks } from '../../shared/data/books';
import { useAddBook } from '../../features/add-book/model/useAddBook';
import { useDeleteBook } from '../../features/delete-book.js/model/useDeleteBook';
import { useSearchBook } from '../../features/search-book/model/useSearchBook';
import AddBookForm from '../../features/add-book/ui/AddBookForm';
import BookList from '../../features/delete-book.js/ui/BookList';
import BookSearch from '../../features/search-book/ui/BookSearch';

const LibraryWidget = () => {
  const [books, setBooks] = useState(initialBooks);
  const [searchTerm, setSearchTerm] = useState('');

  const { addBook } = useAddBook(books, setBooks);
  const { deleteBook } = useDeleteBook(books, setBooks);
  const { searchBook } = useSearchBook(books);

  const handleAddBook = (formData) => {
    const newBook = {
      id: Date.now(),
      titulo: formData.title,
      autor: formData.author,
      anno: formData.year,
      genero: 'Sin clasificar',
      resumen: '',
    };
    setBooks([...books, newBook]);
  };

  const displayedBooks = searchTerm ? searchBook(searchTerm) : books;

  return (
    <div>
      <AddBookForm onAdd={handleAddBook} />
      <BookList books={displayedBooks} onDelete={deleteBook} />
      <BookSearch searchTerm={searchTerm} onSearch={setSearchTerm} />
    </div>
  );
};

export default LibraryWidget;
