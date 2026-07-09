export default function BookSearch({ searchTerm, alBuscar }) {
  return (
    <input type='text' placeholder='Buscar libros...' value={searchTerm} onChange={(e) => alBuscar(e.target.value)} />
  );
}
