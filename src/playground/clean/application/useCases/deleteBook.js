export const eliminarLibro = (
  repository
) => {
  return (id) => {
    repository.eliminar(id);
  };
};