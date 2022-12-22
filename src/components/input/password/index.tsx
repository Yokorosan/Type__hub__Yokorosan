import { StyledDiv } from "../../container/style";
import { StyledInput } from "../style";
import { StyledClosedEye, StyledEye } from "../../icons/style";
import React, { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface iPassWord {
  register: UseFormRegister<FieldValues>;
}

export const PassWord = ({ register }: iPassWord) => {
  const [passwordShow, setPasswordShow] = useState(false);

  const showPass = () => {
    setPasswordShow(!passwordShow);
  };
  return (
    <StyledDiv location="password">
      <StyledInput
        id="password"
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
