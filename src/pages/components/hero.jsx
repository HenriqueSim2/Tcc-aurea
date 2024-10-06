import React from 'react';
import './hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <h1>TENHA UM SITE DE DAR ORGULHO</h1>
      <p>QUE TIPO DE SITE VOCÊ GOSTARIA DE TER?</p>
      <div className="site-types">
        <button>LOJA ONLINE</button>
        <button>SERVIDOR</button>
        <button>PORTFÓLIO</button>
        <button>RESTAURANTE</button>
        <button>OUTROS</button>
      </div>
    </section>
  );
};

export default Hero;