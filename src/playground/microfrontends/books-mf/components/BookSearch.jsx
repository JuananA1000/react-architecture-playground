import React from 'react';

export default function BookSearch({ searchTerm, alBuscar }) {
  return (
    <div>
      <h2>Buscar Libro</h2>
      <input type='text' placeholder='Buscar libros...' value={searchTerm} onChange={(e) => alBuscar(e.target.value)} />
    </div>
  );
}
