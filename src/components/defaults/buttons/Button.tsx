import VectorArrow from "./VectorArrow";
import "./button.scss";
import React from "react";

type Button = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
};

const Button = (props: Button) => {
  return (
    <button id="defaultButton" onClick={props.onClick}>
      <div className="arrow">
        <VectorArrow />
      </div>
      <div className="title">{props.children}</div>
      <div className="arrow arrow-hover">
        <VectorArrow />
      </div>
    </button>
  );
};

export default Button;
