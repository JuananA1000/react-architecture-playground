export const BookService = {
  annadirLibro(libros, titulo) {
    return [
      ...libros,
      {
        id: Date.now(),
        title: titulo,
      },
    ];
  },

  borrarLibro(libros, id) {
    return libros.filter((libro) => libro.id !== id);
  },

  buscarLibro(libros, term) {
    return libros.filter((libro) => libro.title.toLowerCase().includes(term.toLowerCase()));
  },
};
