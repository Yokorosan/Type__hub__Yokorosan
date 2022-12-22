import { useContext } from "react";
import { iTechAdd, TechContext } from "../../../contexts/TechContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../validations/techAdd";
import { Button } from "../../button";
import { StyledDiv } from "../../container/style";
import { StyledForm, StyledLabel } from "../../form/style";
import { StyledInput } from "../../input/style";
import { StyledSelect } from "../../select/style";
import { StyledTypo } from "../../typograph/style";

interface iModalCadastro {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalTemplateCadastro = ({ setModal }: iModalCadastro) => {
  const { CloseModal, AddTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iTechAdd>({ resolver: yupResolver(schema) });
  return (
    <StyledDiv location="modal">
      <StyledDiv location="modalMain">
        <StyledDiv location="modalHeader">
          <StyledTypo tag={"p"}>Cadastrar Tecnologia</StyledTypo>{" "}
          <Button location={"modal"} onClick={() => CloseModal(setModal)}>
            X
          </Button>
        </StyledDiv>
        <StyledForm onSubmit={handleSubmit(AddTech)}>
          <StyledLabel htmlFor="title">Nome</StyledLabel>
          <StyledInput
            id={"title"}
            type={"text"}
            {...register("title")}
            placeholder={"Qual tecnologia você conhece?"}
          ></StyledInput>
          <StyledTypo tag={"p"}>{errors.title?.message}</StyledTypo>
          <StyledLabel htmlFor="status">Selecionar Status</StyledLabel>
          <StyledSelect id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </StyledSelect>
          <Button type={"submit"} location={"register"}>
            Cadastrar Tecnologia
          </Button>
        </StyledForm>
      </StyledDiv>
    </StyledDiv>
  );
};
