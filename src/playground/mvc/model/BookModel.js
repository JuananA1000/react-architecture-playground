// El modelo gestiona los datos y la lógica de negocio de la aplicación. Es responsable de recuperar, almacenar y manipular los datos, así como de aplicar las reglas de negocio. El modelo no tiene conocimiento directo de la vista ni del controlador, lo que permite una separación clara de responsabilidades.

export const books = [
  {
    id: 1,
    title: 'Reina Roja',
    author: 'Juan Gómez-Jurado',
    year: 2018,
    genre: 'Thriller',
    summary:
      'Un thriller lleno de suspense que sigue a una inspectora de policía y un ladrón de guante blanco mientras intentan resolver un caso complicado.',
  },
  {
    id: 2,
    title: 'Ready Player One',
    author: 'Ernest Cline',
    year: 2011,
    genre: 'Ciencia Ficción',
    summary:
      'En un futuro distópico, un joven llamado Wade Watts se embarca en una búsqueda virtual para encontrar un tesoro escondido en un mundo de realidad virtual llamado OASIS.',
  },
  {
    id: 3,
    title: 'Mamotreto',
    author: 'Raúl Cimas',
    year: 2020,
    genre: 'Commedia',
    summary:
      'TODA LA OBRA DEL GRAN RAÚL CIMAS EN UN GRAN LIBRO. «Esta es una trilogía que da cabida a la gente más brillante de nuestro planeta. Gente a la que he conocido y ahora ya no puedo sino admirar profundamente. Diez años de trabajo dedicados a lo que de verdad importa en la vida.» Raúl Cimas.',
  },
];
