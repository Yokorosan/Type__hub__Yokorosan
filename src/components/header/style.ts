import styled, { css } from "styled-components";
interface iStyledHeader {
  location: keyof typeof HeaderTypeVariations;
}
const HeaderTypeVariations = {
  login: css`
    justify-content: center;
    margin-top: 81px;
  `,
  register: css`
    width: 300px;
    justify-content: space-between;
    margin-top: 81px;
    margin-bottom: 20px;
    @media (min-width: 425px) {
      width: 369px;
    }
  `,
  dashboard: css`
    height: 72px;
    margin: 0 auto;
    background-color: var(--grey-4);
    width: 100vw;
    max-width: 1400px;
    align-items: center;
    padding: 0px 5px;
    justify-content: space-between;
    @media (min-width: 768px) {
      gap: 170px;
      justify-content: space-around;
    }
  `,
};

export const StyledHeader = styled.header<iStyledHeader>`
  ${({ location }) => HeaderTypeVariations[location || "login"]}
  display: flex;

  .login {
  }
  .register {
  }
  .dashboard {
  }
`;
