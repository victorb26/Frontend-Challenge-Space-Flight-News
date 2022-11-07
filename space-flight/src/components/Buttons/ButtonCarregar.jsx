import React from "react";
import "./ButtonCarregar.module.css";

function Button({ carregarMais }) {
  return (
    <div className="btn_mostrar">
      <button onClick={carregarMais}>Carregar Mais</button>
    </div>
  );
}

export default Button;
