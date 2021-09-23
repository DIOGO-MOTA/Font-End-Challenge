import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


import { GlobalStyle } from './styles/global';
import Routes from './routes';
import { UserProvider } from './hooks/useList';


const App: React.FC = () => {

  return (
    <UserProvider>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </UserProvider>
  );
}

export default App;