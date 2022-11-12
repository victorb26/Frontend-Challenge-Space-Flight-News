import React from 'react';
import "../Buttons/btncarregar.css";


export default function ButtonCarregar({carregarMais}) {
  return(
    <div className="btnCarregar">
        <button onClick= {carregarMais}>Carregar Mais</button>
    </div> 
)
}
