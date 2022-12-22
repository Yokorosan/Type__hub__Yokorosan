import { StyledTypo } from "../../typograph/style";
import { StyledLi } from "./style";

export interface iElement {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}
interface iTechLiCard {
  element: iElement;
  key: number;
  index?: number;
  DefineEditModal: (
    element: iElement,
    setEditModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  focus: string;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const TechLiCard = ({
  element,
  index,
  DefineEditModal,
  focus,
  setEditModal,
}: iTechLiCard) => {
  return (
    <StyledLi
      key={index}
      location={focus === element.title ? "outline" : ""}
      onClick={() => DefineEditModal(element, setEditModal)}
    >
      <StyledTypo tag={"h2"}>{element.title}</StyledTypo>{" "}
      <StyledTypo tag={"p"}>{element.status}</StyledTypo>
    </StyledLi>
  );
};
