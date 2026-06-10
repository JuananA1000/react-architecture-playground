import { Routes, Route, Link } from 'react-router-dom';
import { MVCPage } from './playground/mvc/MVCPage.jsx';
import { CleanPage } from './playground/clean/CleanPage.jsx';
import { FSDPage } from './playground/fsd/FSDPage.jsx';
import { ModularPage } from './playground/modular/ModularPage.jsx';

import './App.css';

function App() {
  return (
    <section id='center'>
      <h1>Arquitecturas en React</h1>
      <p>
        Aquí tenemos una serie de arquitecturas para organizar nuestros proyectos en React, cada una con sus propias
        ventajas y desventajas. La elección de la arquitectura adecuada depende de las necesidades específicas de tu
        proyecto, el tamaño del equipo y tus preferencias personales. A continuación, se presentan algunas de las
        arquitecturas más comunes en React:
      </p>

      <nav>
        <Link to='/mvc'>MVC</Link> |<Link to='/clean'>Clean</Link> |<Link to='/fsd'>FSD</Link> |
        <Link to='/modular'>Modular</Link>
      </nav>

      <Routes>
        <Route path='/mvc' element={<MVCPage/>} />
        <Route path='/clean' element={<CleanPage/>} />
        <Route path='/fsd' element={<FSDPage/>} />
        <Route path='/modular' element={<ModularPage/>} />
      </Routes>
    </section>
  );
}

export default App;
