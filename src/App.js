import Foto from './componentes/foto/Foto'
import Titulo from './componentes/titulo/Titulo';
import Botoes from './componentes/botoes/Botoes';

import '../src/App.css'
import './componentes/container/container.css'
import './componentes/foto/Foto.css'
import './componentes/titulo/Titulo.css'
import './componentes/botoes/Botoes.css'

function App() {
  return (
    
      <div className="App">
        <div className='container'>
        <Foto />
        <Titulo />
        <Botoes />
        </div>
      </div>
    

  );
}

export default App;
