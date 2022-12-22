import styled, { css } from "styled-components";
import { BaseTypo } from ".";
export const StyledTypo = styled(BaseTypo)`
  color: ${({ fontColor }) => fontColor};

  ${({ fontSize }) => {
    switch (fontSize) {
      case "one":
        return css`
          font-weight: var(--font-weight-1);
          font-size: var(--font-size-4);
          line-height: 28px;
        `;
      case "two":
        return css`
          font-weight: var(--font-weight-4);
          font-size: var(--font-size-3);
          line-height: 24px;
        `;
      default:
    }
  }}
`;
