import styled from "styled-components";
import { CityName } from "../../CityName.jsx";
import { Result } from "./Result.jsx";
import { breakPoint } from "../../utils/breakPoints.js";

const ResultWrapper = styled.section`
  flex-grow: 2;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: var(--spacing-base);
  border-radius: var(--border-radius);
  background-color: var(--color-light);

  @media screen and (min-width: ${breakPoint.tablet}) {
    border-radius: var(--border-radius-md);
  }

  @media screen and (min-width: ${breakPoint.laptop}) {
    border-radius: var(--border-radius-lg);
  }
`;

export const ResultBar = () => {
  return (
    <ResultWrapper>
      <CityName cityName="Nigeria" countryName="Africa" />
      <Result />
    </ResultWrapper>
  );
};
