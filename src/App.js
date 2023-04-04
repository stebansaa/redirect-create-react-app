import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.location.href = 'http://frogge.finance';
  }, []);

  return null;
}

export default App;
