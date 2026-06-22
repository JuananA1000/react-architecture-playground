import React from 'react'

export default function BookSearch({searchTerm, onSearch}) {
  return (
    <div>
      <h2>Buscar Libro</h2>
      <input
        type="text"
        placeholder="Buscar libros..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}
