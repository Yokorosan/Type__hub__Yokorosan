import styled from "styled-components";

interface iStyledInput {
  placeholder: string;
  type: "text" | "password";
  id: string;
}

export const StyledInput = styled.input.attrs(({ placeholder, type, id }) => ({
  id: id,
  type: type,
  placeholder: placeholder,
}))<iStyledInput>`
  width: 100%;
`;
