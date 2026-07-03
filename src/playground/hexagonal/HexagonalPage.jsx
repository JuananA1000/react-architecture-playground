import { useState } from 'react';
import { createBookService } from './domain/services/bookService';

import { useBooks } from './adapters/primary/react/hooks/useBooks';

import BookForm from './adapters/primary/react/components/BookForm';
import BookSearch from './adapters/primary/react/components/BookSearch';
import BookList from './adapters/primary/react/components/BookList';

import { createMemoryRepository } from './adapters/secondary/memory/inMemoryBookRepository';

const repository = createMemoryRepository();

const service = createBookService(repository);

export const HexagonalPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { books, addBook, deleteBook, searchBook } = useBooks(service);

  const handleSearch = (texto) => {
    setSearchTerm(texto);
    searchBook(texto);
  };

  const handleAddBook = ({ titulo, autor }) => {
    addBook({ titulo, autor });
    setSearchTerm('');
  };

  return (
    <div>
      <h2>Hexagonal</h2>
      <BookForm alAgregarLibro={handleAddBook} />
      <BookList books={books} onDelete={deleteBook} />
      <BookSearch searchTerm={searchTerm} alBuscar={handleSearch} />
    </div>
  );
};

