import styled, { css } from "styled-components";

interface iStyledLi {
  location: string;
}

export const StyledLi = styled.li<iStyledLi>`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: var(--grey-4);
  border-radius: 4px;
  width: 100vw;
  max-width: 280px;
  height: 49px;
  h2 {
    font-weight: var(--font-weight-1);
    font-size: var(--font-size-2);
    color: var(--grey-0);
  }
  p {
    font-weight: var(--font-weight-4);
    font-size: var(--font-size-1);
    color: var(--grey-1);
  }
  @media (min-width: 375px) {
    max-width: 345px;
  }
  @media (min-width: 425px) {
    max-width: 385px;
  }
  @media (min-width: 768px) {
    max-width: 728px;
  }
  ${({ location }) => {
    switch (location) {
      case "outline":
        return css`
          background-color: var(--grey-2);
        `;

      default:
    }
  }}
`;
