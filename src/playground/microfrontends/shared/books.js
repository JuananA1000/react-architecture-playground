// El modelo gestiona los datos y la lógica de negocio de la aplicación. Es responsable de recuperar, almacenar y manipular los datos, así como de aplicar las reglas de negocio. El modelo no tiene conocimiento directo de la vista ni del controlador, lo que permite una separación clara de responsabilidades.

export const books = [
  {
    id: 1,
    titulo: 'Reina Roja',
    autor: 'Juan Gómez-Jurado',
    anno: 2018,
    genero: 'Thriller',
    resumen:
      'Un thriller lleno de suspense que sigue a una inspectora de policía y un ladrón de guante blanco mientras intentan resolver un caso complicado.',
  },
  {
    id: 2,
    titulo: 'Ready Player One',
    autor: 'Ernest Cline',
    anno: 2011,
    genero: 'Ciencia Ficción',
    resumen:
      'En un futuro distópico, un joven llamado Wade Watts se embarca en una búsqueda virtual para encontrar un tesoro escondido en un mundo de realidad virtual llamado OASIS.',
  },
  {
    id: 3,
    titulo: 'Mamotreto',
    autor: 'Raúl Cimas',
    anno: 2020,
    genero: 'Commedia',
    resumen:
      'TODA LA OBRA DEL GRAN RAÚL CIMAS EN UN GRAN LIBRO. «Esta es una trilogía que da cabida a la gente más brillante de nuestro planeta. Gente a la que he conocido y ahora ya no puedo sino admirar profundamente. Diez años de trabajo dedicados a lo que de verdad importa en la vida.» Raúl Cimas.',
  },
];
