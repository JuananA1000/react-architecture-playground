import { useState } from 'react';

export const useLibros = ({ obtenerLibros, agregarLibro, eliminarLibro, buscarLibros }) => {
  const [libros, setLibros] = useState(obtenerLibros());

  const recargarLibros = () => {
    setLibros([...obtenerLibros()]);
  };

  const handleAgregarLibro = (libro) => {
    agregarLibro(libro);

    recargarLibros();
  };

  const handleEliminarLibro = (id) => {
    eliminarLibro(id);

    recargarLibros();
  };

  const handleBuscar = (searchTerm) => {
    if (!searchTerm.trim()) {
      recargarLibros();
      return;
    }

    setLibros(buscarLibros(searchTerm));
  };

  return {
    libros,
    handleAgregarLibro,
    handleEliminarLibro,
    handleBuscar,
  };
};
