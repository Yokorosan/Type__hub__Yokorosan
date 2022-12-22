import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useForm, FieldValues, UseFormRegister } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "../../styles/toast.css";
import { Header } from "../../components/header";
import { StyledForm, StyledLabel } from "../../components/form/style";
import { Button } from "../../components/button";
import { StyledLink } from "../../styles/Link";
import { StyledTypo } from "../../components/typograph/style";
import { StyledDiv } from "../../components/container/style";
import { StyledInput } from "../../components/input/style";
import { schema } from "../../validations/loginUser";
import { PassWord } from "../../components/input/password";

export type iUserLogin = {
  email?: string;
  password?: string;
  register?: UseFormRegister<FieldValues>;
};

export const Login = () => {
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLogin>({ resolver: yupResolver(schema) });

  return (
    <StyledDiv location={"login"}>
      <Header location={"login"} />
      <StyledForm location={"login"} onSubmit={handleSubmit(loginUser)}>
        <StyledTypo tag={"h2"}>Login</StyledTypo>
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInput
          id={"email"}
          type={"text"}
          placeholder={"Digite aqui seu email"}
          {...register("email")}
        />
        <StyledTypo tag={"p"}>{errors.email?.message}</StyledTypo>
        <StyledLabel htmlFor="password">Senha</StyledLabel>
        <PassWord register={register} />
        <StyledTypo tag={"p"}>{errors.password?.message}</StyledTypo>

        <Button location={"login"} type={"submit"}>
          Logar
        </Button>
        <StyledTypo tag={"span"}>Ainda não possui uma conta?</StyledTypo>
        <StyledLink to="/register">Registro</StyledLink>
      </StyledForm>
    </StyledDiv>
  );
};
