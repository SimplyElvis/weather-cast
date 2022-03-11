import styled from "styled-components";
import { ResultText } from "./ResultText.jsx";
import { WeatherIcon } from "../../WeatherIcon";
import { breakPoint } from "../../../utils/breakPoints";

const StyledResult = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  @media screen and (min-width: ${breakPoint.tablet}) {
    gap: var(--spacing-base);
  }
`;

export const Result = () => {
  return (
    <StyledResult>
      <ResultText />
      <WeatherIcon />
    </StyledResult>
  );
};
