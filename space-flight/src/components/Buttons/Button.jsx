import React from "react";
import "./Button.module.css";

function Button({ verMais }) {
  return (
    <div className="btn_mostrar">
      <button onClick={verMais}>Ver Mais</button>
    </div>
  );
}

export default Button;
