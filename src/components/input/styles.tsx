import styled from "styled-components";

export const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  width: 100%;
  > span:last-child {
    color: red;
    margin-top: 7px;
    font-size: 14px;
    font-weight: normal;
  }
  span::before {
    display: inline;
    content: "⚠ ";
  }
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #667085;
`;

interface InputProps {
  bgColor?: boolean
}

export const Input = styled.input`
  border: 1px solid #eaeced;
  background: #f3f4f5;
  background: ${({ bgColor }: InputProps) => (bgColor ? "#f3f4f5" : "#fff")};
  border-radius: 7px;
  height: 50px;
  /* width: 94%;
   */
  width: 100%;
  padding: 0 15px;
  color: #667085;
  outline: none;
  font-size: 14px;
  &::placeholder {
    font-size: 12px;
    color: #8d94a4;
  }
`;

export const Select = styled.div`
  width: 100%;
  background: #f9fbfc;
  border: 1px solid #eaeced;
  border-radius: 7px;
  select {
    outline: none;
    box-shadow: none;
    border: none;
    margin-left: 10px;
    background: #f9fbfc;
    width: 97%;
    padding: 10px 0;
  }
`;
