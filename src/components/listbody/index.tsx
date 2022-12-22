import { StyledUl } from "./style";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { iElement, TechLiCard } from "./cardtech";
import { iUserLoggedTech } from "../../contexts/UserContext";
interface iUlList {
  userTech: iUserLoggedTech[] | [];
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const UlList = ({ userTech, setEditModal }: iUlList) => {
  const { DefineEditModal, focus } = useContext(TechContext);
  return (
    <StyledUl>
      {userTech.map((element: iElement, index: number) => (
        <TechLiCard
          element={element}
          key={index}
          DefineEditModal={DefineEditModal}
          focus={focus}
          setEditModal={setEditModal}
        />
      ))}
    </StyledUl>
  );
};
