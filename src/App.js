
import './App.css';
import Nombre from './componente/nombre';
import Carrera from './componente/carrera';
import Imagen from './componente/imagen';
import Skills from './componente/skill';

function App() {
  return (
    <div className="App">
      {/*<Bienvenida name="Saki"></Bienvenida>*/}
      {/*<Welcome name="Ruby"></Welcome>*/}
      <br></br><br></br>
      <Imagen></Imagen>
      <Nombre name="Salvador Alejandro Gonzalez Melendez"></Nombre>
      <Carrera name="Ingenieria en Ciencias de la Computación"></Carrera>
      <Skills name="Tengo mucho de no programar así que sorprendame"></Skills>
    </div>
  );
}

export default App;
