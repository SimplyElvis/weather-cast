import { TitleMed } from "./Typography";
import styled from "styled-components";
import { breakPoint } from "../utils/breakPoints";

const StyledCityName = styled.div`
  height: 3em;
  display: grid;
  place-content: center;
  background-color: var(--color-dark);
  border-radius: var(--border-radius);
  color: var(--color-light);
  background-color: var(--color-dark);

  @media screen and (min-width: ${breakPoint.tablet}) {
    border-radius: var(--border-radius-md);
  }

  @media screen and (min-width: ${breakPoint.laptop}) {
    border-radius: var(--border-radius-lg);
  }
`;

export const CityName = ({ cityName, countryName }) => {
  return (
    <StyledCityName>
      <TitleMed aria-live="assertive">
        {cityName} | {countryName}
      </TitleMed>
    </StyledCityName>
  );
};
