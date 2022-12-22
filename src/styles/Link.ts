import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

interface iStyledLinkProps {
  location?: string;
}

export const StyledLink = styled(Link)<iStyledLinkProps>`
  padding: 7px;
  text-decoration: none;
  text-align: center;
  color: var(--grey-0);
  height: 38.5px;
  border-radius: var(--border-radius-4);
  font-weight: var(--font-weight-3);
  font-size: var(--font-size-2);

  background-color: var(--grey-1);

  ${({ location }) => {
    switch (location) {
      case "register":
        return css`
          padding: 10px;
          background-color: var(--grey-3);
        `;
      default:
    }
  }}
`;
