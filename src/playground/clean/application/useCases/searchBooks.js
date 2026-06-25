export const buscarLibros = (repository) => {
  return (searchTerm) => {
    return repository.obtenerTodos().filter((libro) => libro.titulo.toLowerCase().includes(searchTerm.toLowerCase()));
  };
};
