import logo from './logo.svg';
import './App.css';
import './button.css';
import Contador from "./Contador";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <div>
        <h1>Projeto Contador de Cliques</h1>
        <Contador />
      </div>
      </header>
    </div>
    
  );
}

export default App;
