import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Produtos from './components/Produtos';
import Desconto from './components/Desconto';
import Categorias from './components/Categorias';
import SobreNos from './components/SobreNos';
import Comentarios from './components/Comentarios';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Produtos />      
      <Desconto />
      <Categorias />
      <SobreNos />
      <Comentarios />
    </div>
  );
}

export default App;
