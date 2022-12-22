import styled, { css } from "styled-components";
interface iStyledDiv {
  location: string;
}
export const StyledDiv = styled.div<iStyledDiv>`
  display: flex;
  ${({ location }) => {
    switch (location) {
      case "login":
        return css`
          flex-direction: column;
          align-items: center;
          margin: 0 auto;
        `;
      case "register":
        return css`
          flex-direction: column;
          align-items: center;
          margin: 0 auto;
        `;
      case "registerTitle":
        return css``;

      case "dashboard":
        return css`
          width: 100vw;
          flex-direction: column;
          align-items: center;
          margin: 0 auto;
        `;
      case "dashboardHeader":
        return css`
          background-color: var(--grey-4);
          width: 100vw;
        `;
      case "dashboardProfile":
        return css`
          max-width: 1440px;
          width: 100vw;
          height: 118px;
          background-color: var(--grey-4);

          flex-direction: column;
          justify-content: center;
          gap: 10px;

          padding: 0px 5px;
          border: 1px solid var(--grey-3);
          h2 {
            font-weight: var(--font-weight-1);
            font-size: var(--font-size-4);
            line-height: 28px;
          }
          p {
            font-weight: var(--font-weight-2);
            font-size: var(--font-size-1);
            color: var(--grey-1);
            line-height: 18px;
          }

          @media (min-width: 768px) {
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            gap: 0px;
          }
        `;
      case "dashboardTechHeader":
        return css`
          width: 100vw;
          max-width: 768px;
          justify-content: space-between;
          padding: 0px 20px 18px 20px;
        `;
      case "dashboardMain":
        return css`
          width: 100vw;
          max-width: 768px;
          align-items: center;
          flex-direction: column;
        `;

      case "password":
        return css`
          position: relative;
        `;

      case "modal":
        return css`
          position: absolute;
          width: 100vw;
          height: 100vh;
          background-color: var(--grey-4-50);
        `;
      case "modalMain":
        return css`
          position: relative;
          top: 40vh;
          flex-direction: column;
          margin: 0 auto;

          form {
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
          }
        `;
      case "modalHeader":
        return css`
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          background-color: var(--grey-2);
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          p {
            font-weight: var(--font-weight-1);
            font-size: var(--font-size-2);
            color: var(--grey-0);
          }
          button {
            background-color: transparent;
            border: 1px solid transparent;
            font-weight: var(--font-weight-2);
            font-size: var(--font-size-2);
            color: var(--grey-1);
          }
        `;
      case "modalBtn":
        return css`
          justify-content: space-between;
          button:nth-child(1) {
            /* background-color: var(--color-primary-negative); */
            border-radius: var(--border-radius-3);
            width: 204px;
            height: 48px;
          }
          button:nth-child(2) {
            background-color: var(--grey-1);
            border-radius: var(--border-radius-3);
            width: 94px;
            height: 48px;
          }
        `;
      default:
    }
  }}
`;
