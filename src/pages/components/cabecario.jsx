import React from "react"
import './cabecario.scss';


export default function Cabecario() {
    return(
<header>
<nav>
    <div className="menu-icon">
    <span className='tracos'>☰</span>
    </div>
    <div className="logo">
    <img src="logoss.png" alt="logo" />
    </div>
</nav>
</header>

    );
}