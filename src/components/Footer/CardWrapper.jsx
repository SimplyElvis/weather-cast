import styled from "styled-components";
import { breakPoint } from "../utils/breakPoints.js";

export const CardWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: flex-start;
  gap: var(--spacing-base-mobile);
  overflow: scroll;

  @media screen and (min-width: ${breakPoint.laptop}) {
    justify-content: space-evenly;
  }
`;
