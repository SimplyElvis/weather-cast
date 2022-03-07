import styled from "styled-components";
import { SearchInput } from "./SearchInput";
import { SubmitButton } from "./SubmitButton";

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

const submitCityName = (event) => {
  event.preventDefault();
  console.log("submitting...");
};

export const SearchForm = () => {
  return (
    <StyledSearchForm onSubmit={submitCityName}>
      <label className="offScreen" htmlFor="search">
        Enter City Name.
      </label>
      <SearchInput />
      <SubmitButton />
    </StyledSearchForm>
  );
};
