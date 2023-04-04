import React from 'react';

function App() {
  const handleClick = () => {
    window.location.href = 'http://frogge.finance';
  };

  return (
    <div className="App" style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
         <br /> <br /> <br />
        <img
          src="https://github.com/evm20/media/blob/main/logotransparent.png?raw=true"
          alt="logo"
          style={{ width: '200px', height: 'auto' }}
        />
      </div>
      <div>
        <p style={{ marginTop: '20px', marginBottom: '20px' }}>
          <br /> <br /> <br /> <br />
          Learn more about our new brand on our Telegram group:
          <br />
          <br style={{ marginTop: '10px' }} />
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
