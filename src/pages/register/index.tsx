import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useForm, FieldValues, UseFormRegister } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validations/registerUser";
import "../../styles/toast.css";
import { StyledTypo } from "../../components/typograph/style";
import { Header } from "../../components/header";
import { StyledDiv } from "../../components/container/style";
import { StyledForm, StyledLabel } from "../../components/form/style";
import { StyledButton } from "../../components/button/style";
import { StyledInput } from "../../components/input/style";
import { StyledSelect } from "../../components/select/style";
import { PassWord } from "../../components/input/password";
import { ConfirmPassWord } from "../../components/input/confirmpassword";

export type iUserRegistration = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  bio?: string;
  contact?: string;
  course_module?: string;
  register?: UseFormRegister<FieldValues>;
};

export const RegisterPage = () => {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserRegistration>({ resolver: yupResolver(schema) });

  return (
    <StyledDiv location={"register"}>
      <Header location={"register"} />
      <StyledForm onSubmit={handleSubmit(registerUser)}>
        <StyledTypo tag={"h2"}>Crie sua conta</StyledTypo>
        <StyledTypo tag={"span"}>Rapido e grátis, vamos nessa</StyledTypo>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <StyledInput
          id="name"
          type="text"
          {...register("name")}
          placeholder="Digite aqui seu nome"
        />
        <StyledTypo tag={"p"}>{errors.name?.message}</StyledTypo>
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInput
          id="email"
          type="text"
          {...register("email")}
          placeholder="Digite aqui seu email"
        />
        <StyledTypo tag={"p"}>{errors.email?.message}</StyledTypo>
        <StyledLabel htmlFor="password">Senha</StyledLabel>
        <PassWord register={register} />
        <StyledTypo tag={"p"}>{errors.password?.message}</StyledTypo>
        <StyledLabel htmlFor="confirmPassword">Confirmar Senha</StyledLabel>
        <ConfirmPassWord register={register} />
        <StyledTypo tag={"p"}>{errors.confirmPassword?.message}</StyledTypo>
        <StyledLabel htmlFor="bio">Bio</StyledLabel>
        <StyledInput
          id="bio"
          type="text"
          {...register("bio")}
          placeholder="Fale sobre você"
        />
        <StyledTypo tag={"p"}>{errors.bio?.message}</StyledTypo>
        <StyledLabel htmlFor="contact">Contato</StyledLabel>
        <StyledInput
          id="contact"
          type="text"
          {...register("contact")}
          placeholder="Opção de contato"
        />
        <StyledTypo tag={"p"}>{errors.contact?.message}</StyledTypo>
        <StyledLabel htmlFor="course-module">Selecionar módulo</StyledLabel>
        <StyledSelect id="course_module" {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </StyledSelect>
        <StyledButton type={"submit"} location={"register"}>
          Cadastrar
        </StyledButton>
      </StyledForm>
    </StyledDiv>
  );
};
