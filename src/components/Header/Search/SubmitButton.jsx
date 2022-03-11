import { useContext, useEffect } from "react";
import { ResultContext } from "../../../contexts/resultContext.js";
import styled from "styled-components";

const StyledSubmitButton = styled.button`
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  text-align: center;
  padding: var(--padding-vertical) var(--padding-horizontal);
  border-radius: var(--border-radius);
  border: solid var(--button-border-width) var(--color-dark);
  box-shadow: 0 var(--button-shadow-width) 0 var(--color-dark);
  background-color: var(--color-amber);
  transition: all 50ms ease-in-out;
  margin-bottom: var(--spacing-base-mobile);
  margin-top: 0;

  :focus-within,
  :hover {
    background-color: var(--color-amber-light);
  }
  :active {
    margin-bottom: 0;
    margin-top: var(--spacing-base-mobile);
    box-shadow: none;
  }
`;

export const SubmitButton = () => {
  const { errorMessage, setErrorMessage, isFetching } =
    useContext(ResultContext);

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage("Get City Name");
    }, 3000);
  }, [errorMessage, setErrorMessage]);

  return (
    <StyledSubmitButton type="submit" arial-label="Submit City Name.">
      <i className="fa-solid fa-magnifying-glass"></i>
      {isFetching
        ? "Fetching"
        : errorMessage === ""
        ? "Get City Name"
        : errorMessage}
      {/* {} */}
    </StyledSubmitButton>
  );
};
