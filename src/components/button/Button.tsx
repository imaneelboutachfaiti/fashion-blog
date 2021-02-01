import { FC } from "react";
import "./Button.css";

interface props {
  ButtonType: "WhiteButton" | "ReadingButton";
  ButtonText: string;
}

export const Button: FC<props> = (props) => {
  const className =
    props.ButtonType === "WhiteButton"
      ? "white-button button"
      : "reading-button button";
  const disabled = props.ButtonType === "WhiteButton" ? true : false;
  return (
    <button className={className} disabled={disabled}>
      {props.ButtonText}
    </button>
  );
};
