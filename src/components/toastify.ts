import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const StyledContainer = styled(ToastContainer)`
  &&&.Toastify__toast-container {
  }
  .Toastify__toast {
    color: var(--white);
    font-weight: var(--font-weight-1);
    font-size: var(--font-size-2);
    background-color: var(--grey-2);
  }
  .Toastify__toast-body {
  }
  .Toastify__close-button {
    color: var(--white);
    font-weight: var(--font-weight-1);
    font-size: var(--font-size-2);
  }
  .Toastify__progress-bar {
    height: 10px;
  }
`;
