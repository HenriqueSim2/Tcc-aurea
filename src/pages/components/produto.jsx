import React from 'react';
import './produto.scss';

const Product = () => {
  return (
    <section className="product">
      <div className="product-info">
        <img className='homem' src="imagem.png" alt="Pessoa com pacotes" />
      </div>
      <div className="description">
        <h2>Tudo para deixar o seu site com sua cara</h2>
        <p>Sua marca merece a melhor plataforma de ecommerce, com o menor esforço possível.</p>
        <p>Na Info Tech, você encontra um ecossistema completo para começar ou expandir seu negócio.</p>
      </div>
    </section>
  );
};

export default Product;