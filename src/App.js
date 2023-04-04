import React from 'react';

function App() {
  const handleClick = () => {
    window.location.href = 'http://frogge.finance';
  };

  return (
    <div className="App" style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
        <img
          src="https://github.com/evm20/media/blob/main/logotransparent.png?raw=true"
          alt="logo"
          style={{ width: '200px', height: 'auto' }}
        />
      </div>
      <div>
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
          Click here to go to our new website: http://frogge.finance
        </button>
      </div>
    </div>
  );
}

export default App;
