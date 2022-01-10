import React from "react";
import "./Button.css";

export default (props) => {
  let classes = "button";
  classes += props.operation ? " operation" : "";
  classes += props.double ? " double" : "";
  classes += props.triple ? " triple" : "";

  return (
    <button
      onClick={(event) => props.click && props.click(props.label)}
      className={classes}
    >
      {props.label}
    </button>
  );
};

// Este evento retorna o conteúdo do botão. O propsclick recebe no botão o conteúdo do botão
// o && faz garantir que só vai entrr na segunda aprte da função se a primeira for válida.

/* O conteúdo de classes = Exibição condicional de classe *ngIf */
