import styled from "styled-components";

const StyledSubmitButton = styled.button`
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  text-align: center;
  padding: var(--padding-vertical) var(--padding-horizontal);
  border-radius: var(--border-radius);
  border: solid var(--button-border-width) var(--color-dark);
  box-shadow: 0 var(--button-shadow-width) 0 var(--color-dark);
  background-color: var(--color-red-03);
  transition: all 50ms ease-in-out;
  margin-bottom: var(--spacing-base-mobile);
  margin-top: 0;

  :focus-within,
  :hover {
    background-color: var(--color-light);
  }
  :active {
    margin-bottom: 0;
    margin-top: var(--spacing-base-mobile);
    box-shadow: none;
  }
`;

export const SubmitButton = () => {
  return (
    <StyledSubmitButton type="submit" arial-label="Submit City Name.">
      <i className="fa-solid fa-magnifying-glass"></i> Get City Name
    </StyledSubmitButton>
  );
};
