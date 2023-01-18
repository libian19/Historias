import './App.css';
import Testimonio from './componentes/Testimonios';
import { shawn, sarah, emma } from './datos';

function App() {
  return (
    <div className="App">
      <div className='contenedor--ppal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio
          nombre= {shawn.nombre}
          pais={shawn.pais}
          imagen={shawn.imagen}
          cargo={shawn.cargo}
          empresa={shawn.empresa}
          testimonio={shawn.testimonio}
        />  
        <Testimonio
          nombre= {sarah.nombre}
          pais={sarah.pais}
          imagen={sarah.imagen}
          cargo={sarah.cargo}
          empresa={sarah.empresa}
          testimonio={sarah.testimonio}
        />  
        <Testimonio
          nombre= {emma.nombre}
          pais={emma.pais}
          imagen={emma.imagen}
          cargo={emma.cargo}
          empresa={emma.empresa}
          testimonio={emma.testimonio}
        />  

          
      </div>
          
    </div>
  );
}

export default App;
