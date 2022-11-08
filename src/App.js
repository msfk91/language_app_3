import logo from './0logo.svg';
import './App.css';
import {NounCategory} from "./Components/NounCategory.js"
function App() {
  return (
    <div className="App">
      <NounCategory/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
