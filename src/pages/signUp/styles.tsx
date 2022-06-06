import styled from "styled-components";
import { Container } from "../../components/box";

export const LoginInContainer = styled(Container)`
  min-height: 100vh;
  padding-top: 10vh;
  background-color:#fff;
  width: 100%;

  @media screen and (max-width: 600px) {
    padding: 10vh 4% 20px;
    .form-container {
      width: 100%;
    }
  }
`;

export const LoginTitle = styled.h1`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 44px;
line-height: 53px;
letter-spacing: -0.05em;
color: #101828;
@media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

export const FormContainer = styled(Container)`
  background: #ffffff;
  width: 100%;
  margin-top: 20px;
  /* padding: 30px; */
  form{
    width: 100%;
  }
`;

