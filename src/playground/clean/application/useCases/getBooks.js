export const obtenerLibros = (
  repository
) => {
  return () => {
    return repository.obtenerTodos();
  };
};