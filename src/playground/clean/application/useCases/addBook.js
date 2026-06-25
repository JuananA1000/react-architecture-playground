import { crearLibro } from '../../domain/entities/book';

export const agregarLibro = (repository) => {
  return ({ titulo, autor }) => {
    const libro = crearLibro({
      id: Date.now(),
      titulo,
      autor,
      anno: '',
      genero: '',
      resumen: '',
    });

    repository.agregar(libro);
  };
};
