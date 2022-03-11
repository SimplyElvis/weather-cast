import styled from "styled-components";
import { TitleLg, TitleMed } from "../../Typography.jsx";
import { breakPoint } from "../../../utils/breakPoints";

const StyledClock = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: ${breakPoint.tablet}) {
    display: none;
  } ;
`;

export const Clock = () => {
  return (
    <StyledClock>
      <TitleLg>{"time"}</TitleLg>
      <TitleMed>{"date | day"}</TitleMed>
    </StyledClock>
  );
};
