import { FC } from "react";
import './Button.css'

interface props {
    ButtonType : "WhiteButton" | "";
    ButtonText :string;
}

export const Button: FC<props> = (props) => {
   
const className = props.ButtonType === "WhiteButton" ? "white-button" : "";
  return (
    <button className={className}>{props.ButtonText}</button>
  );
};
