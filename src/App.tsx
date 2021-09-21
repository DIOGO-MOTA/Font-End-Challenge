import React from 'react';
import { GlobalStyle } from './styles/global';

import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { UserProvider } from './hooks/useList';


const App: React.FC = () => {

  return (
    <UserProvider>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </UserProvider>
  );
}

export default App;