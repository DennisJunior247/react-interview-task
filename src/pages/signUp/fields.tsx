import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormContainer } from "./styles";
import { Flex } from "../../components/box";
import Button from "../../components/button";

import { useDispatch } from "../../context";
import { signup } from "../../context/actions";

import {
  Label,
  InputStyle,
  Input,
  Select,
} from "../../components/input/styles";


const Fields = () => {

  type Inputs = {
    email: string,
    password: string,
    fullName: string
    userType: string
  };

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required("please provide an email"),
    password: yup.string().min(6).required("please provide a password"),
    fullName: yup.string().required("please provide your full name"),
    // useType: yup.string().required("please provide user type"),
  }).required();

  const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: Inputs) => {
    const res = await signup(dispatch, values)
    if (res?.data) {
      navigate("/login")
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDir={"column"} gap={"30px"}>
          <InputStyle>
            <Label htmlFor="email">Email address</Label>
            <Input placeholder="Enter your email address"  {...register("email")} />
            {errors.email && <span>{errors.email?.message}</span>}
          </InputStyle>
          <InputStyle>
            <Label htmlFor="password">Password</Label>
            <Input placeholder="Enter your password" type="password"   {...register("password")} />
            {errors.password && <span>{errors.password?.message}</span>}
          </InputStyle>
          <InputStyle>
            <Label htmlFor="fullName">Full Name</Label>
            <Input placeholder="Enter your full Name" type="text"   {...register("fullName")} />
            {errors.fullName && <span>{errors.fullName?.message}</span>}
          </InputStyle>
          <InputStyle>
            <Label htmlFor="userType">What is your role</Label>
            <Select placeholder="Enter your password" >
              <select {...register("userType")}>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </Select>
            {errors.userType && <span>{errors.userType?.message}</span>}
          </InputStyle>
          <Button
            text={"Signup"}
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
