import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  const nome = "Ana"

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
    <SayMyName nome="Pedro" />
    <SayMyName nome="Conrado" />
    <SayMyName nome={nome} />
   
    <Pessoa 
    nome="Nathália" 
    idade="27"
    profissao="Programadora"
    foto="https:via.placeholder.com/150" />


    </div>
  )
}

export default App
