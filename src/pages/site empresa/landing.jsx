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


       <h2 className='ds'>PREÇOS</h2>

       <div className='cardscompleto'>
<div className='cardspart1'>


    <div className='precos'> 
       <div className='cards'>
       <div><p className='texto'>loja online  
              <br />
               R$***,**
               
        </p>
        <button className='button1'>entre em contato</button>
        </div>



       </div>
    </div>
 <div className='precos2'> 
       <div className='cards'>
       <div><p className='texto'>loja online  
              <br />
               R$***,**
               
        </p>
        <button className='button1'>entre em contato</button>
        </div>
        </div>
       </div>
    </div>

<div className='cardspart2'>
<div className='precos'> 
       <div className='cards'>
       <div><p className='texto'>loja online  
              <br />
               R$***,**
               
        </p>
        <button className='button1'>entre em contato</button>
        </div>



       </div>
    </div>
 <div className='precos2'> 
       <div className='cards'>
       <div><p className='texto'>loja online  
              <br />
               R$***,**
               
        </p>
        <button className='button1'>entre em contato</button>
        </div>
        </div>
       </div>
</div>
</div>




    <h3 >PRODUTOS</h3>
       <div className='produtos0'>
       <div className='produtos'>
              <div><img className='imgprodutos' src="imgrestaurante.webp" alt="restaurante" />
              <p className='textof'>site de restaurante</p></div>
              <div><img className='imgprodutos' src="portfolio2.webp" alt="" />
              <p className='textof'>portfolio pessoal</p>
              </div>
              <div><img className='imgprodutos' src="lojaonline.png" alt="" /><p className='textof'>
                     loja online</p></div>


       </div>
              <div className='fds' ><p className='textoprodutos'>Todos esses sites foram <br />
feitos por nossos programadores <br />
profissionais com mais de 10 anos <br />
de experiencia em informatica</p></div>

                     </div>


</div>

  );
}


export default App;
