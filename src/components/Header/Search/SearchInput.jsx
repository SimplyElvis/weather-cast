import { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import { XMark } from "./XMark";
import { SearchContext } from "../../../contexts/searchContext";

const StyledSearchInput = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  align-items: center;
  background-color: inherit;
  padding: var(--spacing-base);
  border-radius: var(--border-radius-md);
  border-style: solid;
  border-width: var(--button-border-width);
  border-color: var(--color-dark);
  font-weight: var(--font-weight-bold);
`;

const StyledInput = styled.input`
  flex-grow: 1;
  font-size: var(--font-size-base);
  letter-spacing: var(--letter-spacing-base);
  border: 0;
  outline: 0;
  background-color: transparent;
`;

export const SearchInput = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const inputRef = useRef();
  // const [searchTerm, setSearchTerm] = useState("");
  const [showClearButton, setShowClearButton] = useState(false);

  useEffect(() => {
    if (searchTerm !== "") {
      setShowClearButton(true);
    } else {
      setShowClearButton(false);
    }
  }, [searchTerm]);

  return (
    <StyledSearchInput>
      <StyledInput
        type="text"
        role="searchbox"
        autoComplete="on"
        aria-autocomplete="list"
        placeholder="Enter City Name."
        aria-placeholder="Enter City Name."
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        ref={inputRef}
      />
      {showClearButton && (
        <XMark searchTerm={setSearchTerm} inputRef={inputRef} />
      )}
    </StyledSearchInput>
  );
};
