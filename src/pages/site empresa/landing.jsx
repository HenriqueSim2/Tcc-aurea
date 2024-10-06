import React from 'react';
import Header from '../components/header.jsx';
import Hero from '../components/hero.jsx';
import Product from '../components/produto.jsx';
import './index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Product />


<footer>
    <div class="container">
    <div class="info">
        <p className='titulo'>DUVIDAS</p>
        <p>PREÇOS</p>
        <p>COMO ENTRAR EM CONTATO?</p>
    </div>

    <div class="outros">
        <p className='titulo'>OUTROS</p>
        <p>PREÇOS</p>
        <p>SOBRE NÓS</p>
    </div>

    <div class="meios-contato">
        <p className='titulo'>MEIOS DE CONTATO :</p>
        <p><img className='whatsapp' src="whatsapp.png" alt="" /> (00)00000-0000</p>
        <p><img className='telefone' src="telefone.png" alt="" /> (00)00000-0000</p>
        <p><img className='instagram' src="instagram.png" alt="" /> @INSTAGRAM</p>
    </div>
</div>
</footer>

</div>

  );
}


export default App;
