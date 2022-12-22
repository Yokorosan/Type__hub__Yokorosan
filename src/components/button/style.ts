import styled, { css } from "styled-components";
interface iStyledButton {
  location: keyof typeof ButtonTypeVariations;
}

const ButtonTypeVariations = {
  login: css`
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    &:hover {
      background-color: var(--color-primary-focus);
    }
  `,
  disabled: css`
    background-color: var(--grey-1);
    &:hover {
      background-color: var(--grey-2);
    }
  `,
  register: css`
    margin-top: 10px;
    background-color: var(--negative);
    color: #fff;
    &:hover {
      background-color: var(--color-primary-focus);
    }
  `,
  dashboard: css`
    background-color: var(--grey-3);
    width: 75px;
  `,
  dashboardAdd: css`
    background-color: var(--grey-3);
    width: 32px;
    height: 32px;
  `,
  modal: css`
    background-color: var(--grey-3);
    width: 32px;
    height: 32px;
  `,
  registerModal: css`
    margin-top: 10px;
    background-color: var(--color-primary-negative);
    color: #fff;
    &:hover {
      background-color: var(--color-primary-negative);
    }
  `,
  outline: css`
    margin-top: 10px;
    background-color: var(--color-primary);
  `,
};

export const StyledButton = styled.button<iStyledButton>`
  height: 38.5px;
  border-radius: var(--border-radius-4);
  color: var(--grey-0);
  font-weight: var(--font-weight-3);
  font-size: var(--font-size-2);
  ${({ location }) => ButtonTypeVariations[location || "login"]}
`;
