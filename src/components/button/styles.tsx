import styled from "styled-components";
import { Flex } from "../box";

const variantSize = (size?: "sm" | "md" | "lg" | "def") =>
  size
    ? size === "sm"
      ? "14px"
      : size === "md"
        ? "16px"
        : size === "lg"
          ? "18px"
          : "def"
    : "14px";

const variantPadding = (
  size?: "sm" | "md" | "lg" | "def",
  hasIcon?: boolean
) => {
  if ((size && hasIcon) || hasIcon) {
    return "0.8rem 1rem";
  } else {
    return size === "sm"
      ? "0.6rem 1.25rem"
      : size === "md"
        ? "0.85rem 2.2rem"
        : size === "lg"
          ? "1rem 2.2rem"
          : "0.8rem 2rem";
  }
};
const tabVariantPadding = (
  size?: "sm" | "md" | "lg" | "def",
  hasIcon?: boolean
) => {
  if ((size && hasIcon) || hasIcon) {
    return "0.8rem 1rem";
  } else {
    return size === "sm"
      ? "0.3rem 1rem"
      : size === "md"
        ? "0.6rem 2rem"
        : size === "lg"
          ? "1rem 2.2rem"
          : "0.5rem .7rem";
  }
};
const mobileVariantPadding = (
  size?: "sm" | "md" | "lg" | "def",
  hasIcon?: boolean
) => {
  if ((size && hasIcon) || hasIcon) {
    return "0.8rem 1rem";
  } else {
    return size === "sm"
      ? "0.3rem 0.6rem"
      : size === "md"
        ? "0.4rem .7rem"
        : size === "lg"
          ? ".5rem 1.5rem"
          : "0.6rem 1rem";
  }
};

interface ButtonStyleProps {
  bgColor?: string;
  loading?: boolean;
  disabled?: boolean;
  color?: string;
  border?: string;
  size?: "sm" | "md" | "lg" | "def";
  fullwidth?: boolean;
  hasIcon?: boolean;
  borderRadius?: string;
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
  position: relative;
  white-space: nowrap;
  border: none;
  outline: none;
  background: ${({ bgColor, loading, disabled }) =>
    loading || disabled ? "#CDCDCD" : bgColor};
  color: ${({ color, loading, disabled }) =>
    loading || disabled ? "#CDCDCD" : color};
  border: ${({ border }) => border};
  font-size: ${({ size }) => variantSize(size)};
  width: ${({ fullwidth }) => (fullwidth ? "100%" : "max-content")};
  padding: ${({ size, hasIcon }) => variantPadding(size, hasIcon)};
  @media (max-width: 750px) {
    padding: ${({ size, hasIcon }) => tabVariantPadding(size, hasIcon)};
  }
  @media (max-width: 600px) {
    padding: ${({ size, hasIcon }) => mobileVariantPadding(size, hasIcon)};
  }
  border-radius: ${({ borderRadius }) => borderRadius};
  font-weight: 400;
  cursor: ${({ loading, disabled }) =>
    loading || disabled ? "not-allowed" : "pointer"};

  opacity: 1;
  :hover {
    opacity: 0.8;
  }
  :disabled {
    color: #6c6c6c;
  }

`;

export const Loader = styled(Flex)`
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  margin: auto;
`;
