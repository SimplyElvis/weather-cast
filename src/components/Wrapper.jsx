import styled from "styled-components";
import { breakPoint } from "../utils/breakPoints";

const Wrapper = styled.div`
  margin-inline: auto;
  padding-inline: calc(var(--spacing-base) / 2);
  padding-block: var(--spacing-base-mobile);
  width: 100%;

  @media (min-width: ${breakPoint.tablet}) {
    max-width: var(--viewport-tablet);
  }
  @media (min-width: ${breakPoint.laptop}) {
    max-width: var(--viewport-laptop);
  }
  @media (min-width: ${breakPoint.desktop}) {
    max-width: var(--viewport-desktop);
  }
`;

export default Wrapper;
