import styled, { css } from "styled-components";

export const StyledLabel = styled.label``;
interface iStyledForm {
  location?: string;
  onSubmit: () => void;
}
export const StyledForm = styled.form<iStyledForm>`
  background-color: var(--grey-3);
  padding: 34px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: var(--border-radius-4);

  h2 {
    text-align: center;
    font-weight: var(--font-weight-1);
    font-size: 16px;
  }
  label {
    color: var(--grey-0);
    font-weight: var(--font-weight-4);
    font-size: 12px;
  }
  span {
    text-align: center;
    color: var(--grey-1);
    font-weight: var(--font-weight-2);
    font-size: 9px;
    margin: 20px 0px 10px 0px;
  }
  p {
    color: var(--white);
    font-weight: var(--font-weight-2);
    font-size: 16px;
    padding: 0px 10px;
    border-radius: var(--border-radius-4);
  }
  input {
    background-color: var(--grey-2);
    border: 0.98px solid var(--grey-0);
    height: 40px;
    padding: 0px 13px;
    color: var(--grey-0);
    outline: none;
  }

  select {
    background-color: var(--grey-2);
    border: 0.98px solid var(--grey-0);
    height: 40px;
    padding: 0px 13px;
    color: var(--grey-0);
    outline: none;
  }

  @media (min-width: 320px) {
    width: 310px;
  }
  @media (min-width: 425px) {
    width: 369px;
  }

  ${({ location }) => {
    switch (location) {
      case "login":
        return css`
          margin-top: 20px;
        `;

      default:
    }
  }}
`;
