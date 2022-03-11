import styled from "styled-components";

import { TitleMed } from "../../Typography.jsx";
import { SearchForm } from "./SearchForm.jsx";
// import { Clock } from "./Clock.jsx";
import { breakPoint } from "../../../utils/breakPoints.js";

const StyledSearch = styled.section`
  flex-grow: 1;
  width: inherit;
  display: flex;
  flex-direction: row;
  padding: var(--spacing-base);
  border-radius: var(--border-radius);
  background-color: var(--color-light);

  @media screen and (min-width: ${breakPoint.tablet}) {
    flex-direction: column;
    border-radius: var(--border-radius-md);
  }
  @media screen and (min-width: ${breakPoint.laptop}) {
    border-radius: var(--border-radius-lg);
  }
`;

export function SearchBar() {
  return (
    <StyledSearch>
      {/* <Clock /> */}
      <TitleMed className="offScreen">Search City Name Entry.</TitleMed>
      <SearchForm role="search" />
    </StyledSearch>
  );
}
