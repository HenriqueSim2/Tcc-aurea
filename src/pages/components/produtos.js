import React from 'react';

function Produtos() {
  return (
    <section className="produtos">
      <div className="produto">
        <img src="anel.jpg" alt="Anel de Aço Preto" />
        <h2>Anel de Aço Preto</h2>
        <p>R$ 352,75</p>
      </div>
      <div className="produto">
        <img src="colar.jpg" alt="Colar de Aço Preto" />
        <h2>Colar de Aço Preto</h2>
        <p>R$ 1117,75</p>
      </div>
      <div className="produto">
        <img src="pulseira.jpg" alt="Pulseira em Prata" />
        <h2>Pulseira em Prata</h2>
        <p>R$ 637,50</p>
      </div>
    </section>
  );
}

export default Produtos;
