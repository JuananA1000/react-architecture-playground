import { useState } from 'react';

const BookForm = ({ onAddBook }) => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook({ titulo, autor });
    setTitulo('');
    setAutor('');
  };

  return (
    <div>
      <h2>Añadir Libro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='titulo'>Título</label>
          <input id='titulo' name='titulo' type='text' value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div>
          <label htmlFor='autor'>Autor</label>
          <input id='autor' name='autor' type='text' value={autor} onChange={(e) => setAutor(e.target.value)} />
        </div>
        <button type='submit'>Crear Libro</button>
      </form>
    </div>
  );
};

export default BookForm;
