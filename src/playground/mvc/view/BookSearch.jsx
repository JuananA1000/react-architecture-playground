export default function BookSearch({ searchTerm, alBuscar }) {
  return (
    <>
      <h3>Buscar Libros</h3>
      <input type='text' placeholder='Buscar libros...' value={searchTerm} onChange={(e) => alBuscar(e.target.value)} />
    </>
  );
}
