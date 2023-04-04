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
        <button
          style={{
            fontSize: '1.5rem',
            padding: '10px 20px',
            borderRadius: '5px',
          }}
          onClick={handleClick}
        >
          Click here to go to our new website: Frogge.finance
        </button>
      </header>
    </div>
  );
}

export default App;
