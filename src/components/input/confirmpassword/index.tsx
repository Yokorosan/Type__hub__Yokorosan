import { StyledDiv } from "../../container/style";
import { StyledInput } from "../style";
import { StyledClosedEye, StyledEye } from "../../icons/style";
import { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface iConfirmPassWord {
  register: UseFormRegister<FieldValues>;
}

export const ConfirmPassWord = ({ register }: iConfirmPassWord) => {
  const [passwordShow, setPasswordShow] = useState(false);

  const showPass = () => {
    setPasswordShow(!passwordShow);
  };
  return (
    <StyledDiv location="password">
      <StyledInput
        id="confirm-password"
        type={passwordShow ? "text" : "password"}
        placeholder="Digite aqui sua senha"
        {...register("password")}
      />
      {passwordShow ? (
        <StyledEye onClick={() => showPass()} />
      ) : (
        <StyledClosedEye onClick={() => showPass()} />
      )}
    </StyledDiv>
  );
};
