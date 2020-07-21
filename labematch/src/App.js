import React from 'react';
import Routes from './Routes';
import GlobalStyles from './GlobalStyles'
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  )
}

export default App;
