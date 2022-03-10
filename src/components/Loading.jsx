import styled from "styled-components";

const StyledLoading = styled.div`
  background-color: var(--color-background);
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  padding: var(--spacing-2x);
  background-color: yellow;

  > div {
    border-radius: var(--border-radius);
    background-color: var(--color-light);
    padding: var(--spacing-2x);

    > div:first-child {
      width: 5em;
      height: 5em;
      border-radius: 50%;
      background-color: var(--color-dark);
      position: relative;

      > div {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(-50%);
        width: 100%;
        height: 1em;
        background-color: white;
      }
    }
  }
`;

export const Loading = () => {
  return (
    <StyledLoading>
      <div>
        <div>
          <div></div>
        </div>
      </div>
    </StyledLoading>
  );
};
