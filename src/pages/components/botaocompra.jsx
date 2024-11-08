import React from 'react';

import './botaocompra.scss';

export default function Botao() {
    const WhatsApp = () => {
        const phoneNumber = '551193424500'; 
        const message = `Olá! Tudo bem? Gostaria de contratar o serviços da sua empresa!`;
    
       
        const url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      };
return (
    <button onClick={WhatsApp} className="compre">ENTRE EM CONTATO!</button>
);
}
