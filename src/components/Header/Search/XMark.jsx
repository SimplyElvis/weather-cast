import styled from "styled-components";

const StyledMark = styled.div`
  position: absolute;
  right: var(--spacing-base);
  color: var(--color-dark);

  :hover,
  :focus-within {
    color: var(--color-red-03);
    cursor: pointer;
  }

  i {
    font-family: "Font Awesome 6 Free";
    font-size: var(--font-size-1x);
    color: inherit;
  }
`;

export const XMark = ({ searchTerm, inputRef }) => {
  const clearSearchTerm = () => {
    searchTerm("");
    inputRef.current.focus();
  };
  return (
    <StyledMark
      role="button"
      tabIndex={0}
      aria-label="Clear City Name."
      onClick={clearSearchTerm}
    >
      <i className="fa-solid fa-xmark"></i>
    </StyledMark>
  );
};
