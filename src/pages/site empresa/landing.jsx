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
                     <div className='reviews'>
                            <h1>Reviews</h1>
                            <p>Essas são algumas das <br /> nossas reviews no <br />reclame aqui </p>

                            <div className="reviews-section">
                                  
                                   <div className="reviews-container">
                                          <div className="review">
                                                 <h2>Felipe</h2>
                                                 <div className="stars">★★★★★</div>
                                                 <p>Esses caras são incríveis, fizeram meu site por um preço acessível e em menos de 3 meses!</p>
                                          </div>

                                          <div className="review">
                                                 <h2>Matheus</h2>
                                                 <div className="stars">★★★★★</div>
                                                 <p>Melhor empresa já feita, os caras conseguem entregar um produto muito maior que a expectativa e rápido ainda!</p>
                                          </div>

                                          <div className="review">
                                                 <h2>Henrique</h2>
                                                 <div className="stars">★★★★★</div>
                                                 <p>Meu site deu uma demorada, porém quando chegou foi a coisa mais bonita que eu já vi na minha vida!</p>
                                          </div>
                                   </div>
                            </div>




                     </div> <br /><br /><br />
                     <div className='sobre'><h1>Tudo sobre nos</h1>

                            <div className='texto1'><h3>
                                   "Transforme suas ideias em uma presença digital com a info tech: designs inovadores e suporte contínuo."</h3>
                                   <img src="pinto.png" alt="" />

                            </div>
                            <div className='textop' ><p className='textops'>
                                   A info tech cria sites personalizados com design inovador e responsivo, otimizados para motores de busca. Oferecemos suporte contínuo para garantir uma presença online impactante. Transforme suas ideias em realidade com a info tech.</p></div>


                     </div>





              </div>

       );
}


export default App;
