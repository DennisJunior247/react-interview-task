

import * as yup from "yup";
import { useForm, } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormContainer } from "./styles";
import { Flex } from "../../components/box";
import Button from "../../components/button";

import { useDispatch } from "../../context";

import {
  Label,
  InputStyle,
  Input,
} from "../../components/input/styles";

import { useNavigate } from "react-router-dom";
import { login } from "../../context/actions";

const Fields = () => {

  type Inputs = {
    email: string,
    password: string,
  };

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required("please provide an email"),
    password: yup.string().min(6).required("please provide a password"),
  }).required();

  const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: Inputs) => {
    await login(dispatch, values)

  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDir={"column"} gap={"30px"}>
          <InputStyle>
            <Label htmlFor="email">Email address</Label>
            <Input bgColor placeholder="Enter your email address"  {...register("email")} />
            {errors.email && <span>{errors.email?.message}</span>}
          </InputStyle>
          <InputStyle>
            <Label htmlFor="password">Password</Label>
            <Input bgColor placeholder="Enter your password" type="password"   {...register("password")} />
            {errors.password && <span>{errors.password?.message}</span>}
          </InputStyle>
          <Button
            text={"Login"}
            bgColor={"#7D5FFF"}
            color={"#fff"}
            size="md"
            fullwidth
            type="submit"
            borderRadius={"5px"}
            disabled={isSubmitting}
            loading={isSubmitting}
          />
        </Flex>
      </form>
    </FormContainer>
  );
};

export default Fields;
