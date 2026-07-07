import './BookSearch.css';

export default function BookSearch({ searchTerm, alBuscar }) {
  return (
    <div className='book-search'>
      <h4>Buscar Libros</h4>
      <input type='text' placeholder='Buscar libros...' value={searchTerm} onChange={(e) => alBuscar(e.target.value)} />
    </div>
  );
}
