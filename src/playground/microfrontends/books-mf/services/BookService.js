export const BookService = {
  annadirLibro(libros, { titulo, autor }) {
    return [
      ...libros,
      {
        id: Date.now(),
        titulo,
        autor,
      },
    ];
  },

  borrarLibro(libros, id) {
    return libros.filter((libro) => libro.id !== id);
  },

  buscarLibro(libros, term) {
    return libros.filter((libro) => libro.titulo.toLowerCase().includes(term.toLowerCase()));
  },
};
