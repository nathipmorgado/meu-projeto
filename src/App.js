import './App.css';

function App() {

  const name = 'Nathália'
  const newName = name.toUpperCase()
  function sum(a, b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'


  return (
    <div className="App">
    <h2>Alterando o JSX</h2> 
    <p>Olá, {newName}!</p>
    <p>Soma: {sum(1, 2)}</p>
    <img src={url} alt="Minha imagem"/>


    </div>
  )
}

export default App
