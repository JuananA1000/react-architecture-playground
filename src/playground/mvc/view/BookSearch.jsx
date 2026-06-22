import React from 'react'

export default function BookSearch({searchTerm, onSearch}) {
  return (
    <div>
      <h3>Buscar Libros</h3>
      <input
        type="text"
        placeholder="Buscar libros..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}
