import React from "react";
import { LoginInContainer, LoginTitle } from "./styles";
import { Flex, } from "../../components/box";
import Fields from "./fields";

const Signup = () => {
  return (
    <LoginInContainer>
      <Flex
        width={"500px"}
        flexDir={"column"}
        margin={"auto"}
        className="form-container"
      >
        <Flex justifyContent="flex-start">
          <LoginTitle>Signup </LoginTitle>
        </Flex>
        <Fields />
      </Flex>
    </LoginInContainer>
  );
};

export default Signup;
