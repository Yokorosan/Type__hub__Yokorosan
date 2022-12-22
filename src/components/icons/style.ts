import { AiFillEye, AiFillEyeInvisible, AiOutlinePlus } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";

export const StyledEye = styled(AiFillEye)`
  position: absolute;
  margin: 13px;
  left: 88%;
`;

export const StyledClosedEye = styled(AiFillEyeInvisible)`
  position: absolute;
  margin: 13px;
  left: 88%;
`;

export const StyledPlus = styled(AiOutlinePlus)`
  font-size: 16px;
`;

export const StyledTrashCan = styled(FaTrashAlt)`
  font-size: 16px;
`;
