import Logo from "../../assets/Logo.svg";
import { Img } from "../image";
import { StyledHeader } from "./style";
import { StyledLink } from "../../styles/Link";
import { Button } from "../button";
import { StyledDiv } from "../container/style";
interface iHeader {
  location: "login" | "register" | "dashboard";
  onClick?: () => void;
}
export const Header = ({ location, onClick }: iHeader) => {
  switch (location) {
    case "login":
      return (
        <>
          <StyledHeader location={location}>
            <Img src={Logo} alt={"KenzieHub"} location={"header"} />
          </StyledHeader>
        </>
      );
    case "register":
      return (
        <>
          <StyledHeader location={location}>
            <Img src={Logo} alt={"KenzieHub"} location={"header"} />
            <StyledLink location={location} to="/">
              Voltar
            </StyledLink>
          </StyledHeader>
        </>
      );
    case "dashboard":
      return (
        <>
          <StyledDiv location={"dashboardHeader"}>
            <StyledHeader location={location}>
              <Img src={Logo} alt={"KenzieHub"} location={"header"} />
              <Button onClick={onClick} location={location}>
                Logout
              </Button>
            </StyledHeader>
          </StyledDiv>
        </>
      );

    default:
      return <></>;
  }
};
