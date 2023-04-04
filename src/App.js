import './App.css';

function App() {
  const handleClick = () => {
    window.location.href = 'http://frogge.finance';
  };

  return (
    <div className="App">
      <header className="App-header">
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
        <button onClick={handleClick}>Go to Frogge.finance</button>
      </header>
    </div>
  );
}

export default App;
