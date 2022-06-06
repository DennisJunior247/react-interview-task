import React from "react";
import { ButtonStyle, Loader } from "./styles";


interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string,
  size?: "sm" | "md" | "lg" | "def",
  hasIcon?: boolean,
  loading?: boolean,
  bgColor?: string
  fullwidth?: boolean
  borderRadius?: string
  type: "submit" | "reset" | "button" | undefined
  color: string

}
const Button: React.FC<Props> = (props) => {
  return (
    <ButtonStyle
      type={props.type}
      size={props.size}
      hasIcon={props.hasIcon}
      bgColor={props.bgColor}
      loading={props.loading}
      fullwidth={props.fullwidth}
      borderRadius={props.borderRadius}
      color={props.color}
    >
      <Loader />
      {props.text}
    </ButtonStyle>
  );
};
export default Button;
