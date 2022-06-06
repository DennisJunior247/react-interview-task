import { LoginInContainer, LoginTitle } from "./styles";
import { Flex, } from "../../components/box";
import Fields from "./fields";

const Login = () => {
  return (
    <LoginInContainer>
      <Flex
        width={"500px"}
        flexDir={"column"}
        margin={"auto"}
        className="form-container"
      >
        <Flex justifyContent="flex-start">
          <LoginTitle>Login </LoginTitle>
        </Flex>
        <Fields />
      </Flex>
    </LoginInContainer>
  );
};

export default Login;
