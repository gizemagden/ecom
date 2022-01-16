import React from 'react';
import './App.css';
import { EcomProvider } from './context/context';

import Navbar from './components/Navbar';
import BoxList from './components/BoxList';

const App = () => {
  return (
    <EcomProvider>
      <Navbar/>
      <BoxList />
    </EcomProvider>
  );
};

export default App;
