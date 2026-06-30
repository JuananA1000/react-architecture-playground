import { useState } from 'react';

const initialState = {
  title: '',
  author: '',
  year: '',
};

export default function AddBookForm({ onAdd }) {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.title.trim()) return 'El título es requerido.';
    if (!form.author.trim()) return 'El autor es requerido.';
    if (form.year && !/^[0-9]{4}$/.test(form.year)) return 'El año debe tener 4 dígitos.';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setError('');
    const payload = {
      title: form.title.trim(),
      author: form.author.trim(),
      year: form.year ? Number(form.year) : undefined,
    };
    if (onAdd) onAdd(payload);
    setForm(initialState);
  };

  return (
    <form onSubmit={handleSubmit} aria-label='add-book-form'>
      <div>
        <label>
          Título
          <input name='title' value={form.title} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Autor
          <input name='author' value={form.author} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Año
          <input name='year' value={form.year} onChange={handleChange} placeholder='YYYY' />
        </label>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type='submit'>Agregar libro</button>
    </form>
  );
}
