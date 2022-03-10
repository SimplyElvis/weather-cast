import { useContext, useState } from "react";
import { SearchContext } from "../../../contexts/searchContext.js";
import { ResultContext } from "../../../contexts/resultContext.js";
import { useFetch } from "../../../hooks/useFetch.js";
import styled from "styled-components";
import { SearchInput } from "./SearchInput";
import { SubmitButton } from "./SubmitButton";
import { breakPoint } from "../../../utils/breakPoints";

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
  const { queryString, setQueryString } = useContext(ResultContext);

  const submitCityName = (event) => {
    // Send input data to global state.
    event.preventDefault();
    if (searchTerm === "") return;
    setQueryString(
      `https://genesisrack.herokuapp.com/weather/api/locations?q=${searchTerm
        .trim()
        .toLowerCase()}`
    );
  };
  useFetch(queryString);

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      <StyledSearchForm onSubmit={submitCityName}>
        <label className="offScreen" htmlFor="search">
          Enter City Name.
        </label>
        <SearchInput />
        <SubmitButton />
      </StyledSearchForm>
    </SearchContext.Provider>
  );
};
