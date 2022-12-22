import { useState, useContext, useEffect } from "react";
import { iTechEdit, TechContext } from "../../../contexts/TechContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../validations/techEdit";
import { Button } from "../../button";
import { StyledDiv } from "../../container/style";
import { StyledForm, StyledLabel } from "../../form/style";
import { StyledInput } from "../../input/style";
import { StyledSelect } from "../../select/style";
import { StyledTypo } from "../../typograph/style";

interface iModalTemplateEdit {
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalTemplateEdit = ({ setEditModal }: iModalTemplateEdit) => {
  const { CloseEditModal, tech, EditTech, setTechId, DeleteTech } =
    useContext(TechContext);
  const [change, setChange] = useState(false);

  const enableBtn = () => {
    setChange(true);
  };

  useEffect(() => {
    if (tech !== null) {
      setTechId(tech.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iTechEdit>({ resolver: yupResolver(schema) });
  return (
    <StyledDiv location="modal">
      <StyledDiv location="modalMain">
        <StyledDiv location="modalHeader">
          <StyledTypo tag={"p"}>Tecnologia Detalhes</StyledTypo>{" "}
          <Button
            location={"modal"}
            onClick={() => CloseEditModal(setEditModal)}
          >
            X
          </Button>
        </StyledDiv>
        <StyledForm onSubmit={handleSubmit(EditTech)}>
          <StyledLabel htmlFor="title">Nome da Tecnologia</StyledLabel>
          <StyledInput
            disabled
            id={"title"}
            type={"text"}
            placeholder={tech?.title}
          ></StyledInput>
          <StyledLabel htmlFor="status">Selecionar Status</StyledLabel>
          <StyledSelect
            id="status"
            defaultValue={tech?.status}
            {...register("status")}
            onChange={() => enableBtn()}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </StyledSelect>
          <StyledTypo tag={"p"}>{errors.status?.message}</StyledTypo>
          <StyledDiv location={"modalBtn"}>
            <Button
              type={!change ? "button" : "submit"}
              location={!change ? "registerModal" : "outline"}
            >
              Salvar Alterações
            </Button>{" "}
            <Button
              type={"reset"}
              location={"register"}
              onClick={() => DeleteTech(setEditModal)}
            >
              Excluir
            </Button>
          </StyledDiv>
        </StyledForm>
      </StyledDiv>
    </StyledDiv>
  );
};
