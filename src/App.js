import './App.css';

function App() {
  const handleClick = () => {
    window.location.href = 'http://frogge.finance';
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Learn more about our new brand on our Telegram group:
          <br />
          <a href="https://t.me/jointrustswap/1/48470">https://t.me/jointrustswap/1/48470</a>
        </p>
        <button onClick={handleClick}>Go to Frogge.finance</button>
      </header>
    </div>
  );
}

export default App;
