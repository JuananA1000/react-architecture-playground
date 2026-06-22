import React from 'react'

export default function BookSearch({searchTerm, onSearch}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar libros..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}
