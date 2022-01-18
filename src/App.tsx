import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { EcomProvider } from './context/context';
import Navbar from './components/Navbar';
import BoxList from './components/BoxList';
import Basket from './components/Basket';
import ProductDetails from './components/ProductDetails';
import './App.css';

const App = () => {
  return (
    <EcomProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<BoxList />} />
          <Route path="/favorites" element={<BoxList />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/details/:productId" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </EcomProvider>
  );
};

export default App;
