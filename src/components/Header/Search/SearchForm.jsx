import { useState } from "react";
import styled from "styled-components";
import { SearchInput } from "./SearchInput";
import { SubmitButton } from "./SubmitButton";
import { SearchContext } from "../../../contexts/searchContext";
import { breakPoint } from "../../utils/breakPoints";

const StyledSearchForm = styled.form`
  flex-grow: 1;
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: var(--spacing-base);

  @media screen and (min-width: ${breakPoint.tablet}) {
    align-items: center;
  }
`;

export const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const submitCityName = (event) => {
    event.preventDefault();
    let searchString = searchTerm.trim().toLowerCase();
  };

  return (
<<<<<<< HEAD
    <StyledSearchForm onSubmit={submitCityName}>
      <label className="offScreen" htmlFor="search">
        Enter City Name.
      </label>
      <SearchInput />
      <SubmitButton />
    </StyledSearchForm>
=======
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      <StyledSearchForm onSubmit={submitCityName}>
        <label className="offScreen" htmlFor="search">
          Enter City Name.
        </label>
        <SearchInput />
        <SubmitButton />
      </StyledSearchForm>
    </SearchContext.Provider>
>>>>>>> dev
  );
};
