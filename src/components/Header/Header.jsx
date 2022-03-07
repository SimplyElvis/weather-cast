import styled from "styled-components";
import { breakPoint } from "../utils/breakPoints.js";
import { SearchBar } from "./Search/SearchBar.jsx";
import { ResultBar } from "./Result/ResultBar.jsx";

const StyledHeader = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 50vh;
  max-height: 60vh;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-base-mobile);

  @media screen and (min-width: ${breakPoint.tablet}) {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-evenly;
    gap: var(--spacing-base);
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <SearchBar />
      <ResultBar />
    </StyledHeader>
  );
};

export default Header;
