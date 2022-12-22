import { ReactNode } from "react";
import { StyledButton } from "./style";
interface iButtonProps {
  location:
    | "login"
    | "disabled"
    | "register"
    | "dashboard"
    | "dashboardAdd"
    | "modal"
    | "registerModal"
    | "outline";
  onClick?: () => void;
  type?: "submit" | "button" | "reset" | undefined;
  children: ReactNode;
}
export const Button = ({ location, onClick, type, children }: iButtonProps) => (
  <StyledButton location={location} type={type} onClick={onClick}>
    {children}
  </StyledButton>
);
