import { TitleMed } from "./Typography";
import styled from "styled-components";

const StyledCityName = styled.div`
  height: 3em;
  display: grid;
  place-content: center;
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
