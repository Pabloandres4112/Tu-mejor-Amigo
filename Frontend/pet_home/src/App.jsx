import React, { useState } from 'react';
import Login from './components/login';
import Home from './components/Home';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <Home />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
