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
      <TitleLg>09:02 am</TitleLg>
      <TitleMed>Saturday | Jun 28</TitleMed>
    </StyledClock>
  );
};
