import BookSearch from "./BookSearch";

export default function BookList({ libros, alBorrar }) {
  return (
    <>
      <h3>Todos los Libros</h3>
      <BookSearch searchTerm='' alBuscar={() => {}} />
      <ul>
        {libros.map((libro) => (
          <li key={libro.id}>
            {libro.titulo} de {libro.autor} ({libro.anno}) - {libro.genero}
            <button onClick={() => alBorrar(libro.id)}>Borrar Libro</button>
          </li>
        ))}
      </ul>
    </>
  );
}
