import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TechContext } from "../../contexts/TechContext";
import "../../styles/toast.css";
import { Header } from "../../components/header";
import { StyledDiv } from "../../components/container/style";
import { StyledTypo } from "../../components/typograph/style";
import { StyledMain } from "../../components/main/style";
import { LoadingSpinner } from "../../components/loading";
import { Button } from "../../components/button";
import { StyledPlus } from "../../components/icons/style";
import { UlList } from "../../components/listbody";
import { ModalTemplateCadastro } from "../../components/modal/Cadastro";
import { ModalTemplateEdit } from "../../components/modal/Edicao";

export const DashBoard = () => {
  const navigate = useNavigate();
  const { user, userTech } = useContext(UserContext);
  const { DefineModal } = useContext(TechContext);
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const newUserTech = userTech.sort((a, b) => a.title.localeCompare(b.title));

  const warning = () => {
    toast.warning("Até a Proxima!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
    });
  };

  const logout = () => {
    localStorage.removeItem("@kenzieHub:token");
    localStorage.removeItem("@kenzieHub:UserId");
    warning();
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <StyledDiv location={"dashboard"}>
      {!modal ? <></> : <ModalTemplateCadastro setModal={setModal} />}
      {!editModal ? <></> : <ModalTemplateEdit setEditModal={setEditModal} />}
      <Header location={"dashboard"} onClick={logout} />
      <StyledDiv location={"dashboardProfile"}>
        {user === null ? (
          <LoadingSpinner />
        ) : (
          <>
            <StyledTypo tag={"h2"}>{`Olá, ${user.name}`}</StyledTypo>
            <StyledTypo tag={"p"}>{`${user.course_module}`}</StyledTypo>
          </>
        )}
      </StyledDiv>
      <StyledMain>
        <StyledDiv location={"dashboardMain"}>
          <StyledDiv location={"dashboardTechHeader"}>
            <StyledTypo tag={"h2"}>Tecnologias</StyledTypo>{" "}
            <Button
              location={"dashboardAdd"}
              onClick={() => DefineModal(setModal)}
            >
              <StyledPlus />
            </Button>
          </StyledDiv>
          {userTech.length !== 0 ? (
            <UlList userTech={newUserTech} setEditModal={setEditModal} />
          ) : (
            <></>
          )}
        </StyledDiv>
      </StyledMain>
    </StyledDiv>
  );
};
