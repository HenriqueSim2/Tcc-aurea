import React from 'react';

function Categorias() {
  return (
    <section className="categorias">
      <h2>CATEGORIA</h2>
      <p>Encontre a sua favorita</p>
      <div className="categoria-item">
        <div className="categoria">
          <img src="aneis.jpg" alt="Anéis" />
          <p>Anéis</p>
        </div>
        <div className="categoria">
          <img src="pulseiras.jpg" alt="Pulseiras" />
          <p>Pulseiras</p>
        </div>
        <div className="categoria">
          <img src="brincos.jpg" alt="Brincos" />
          <p>Brincos</p>
        </div>
        <div className="categoria">
          <img src="colares.jpg" alt="Colares" />
          <p>Colares</p>
        </div>
      </div>
    </section>
  );
}

export default Categorias;