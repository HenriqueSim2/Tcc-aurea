import React from 'react';
import Header from './pages/components/header.jsx';
import Hero from './pages/components/hero.jsx';
import Product from './pages/components/produto.jsx';
import './index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Product />

      <footer>
         <div>
            <h2>Entre em contato</h2>
            <h3>(00)0000-0000</h3>
            <h3>(00)0000-0000</h3>
            <h3>@TechInf</h3>
         </div>
      </footer>
    </div>
  );
}

export default App;
