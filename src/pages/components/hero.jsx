import React from 'react';
import './hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <h1>TENHA UM SITE DE DAR ORGULHO</h1>
      <p>QUE TIPO DE SITE VOCÊ GOSTARIA DE TER?</p>
      <div className="site-types">
        <button><img className='um' src="mercearia.png" alt="" />LOJA ONLINE</button>
        <button><img className='um' src="calendario.png" alt="" />SERVIDOR</button>
        <button><img className='um' src="pasta.png" alt="" />PORTFÓLIO</button>
        <button><img className='um' src="restaurante.png" alt="" />RESTAURANTE</button>
        <button><img className='um' src="cinematografia.png" alt="" />OUTROS</button>
      </div>
      <a href="#" className="button-compre">COMPRE JÁ</a>
    </section>
  );
};

export default Hero;