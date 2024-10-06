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

</div>

  );
}


export default App;
