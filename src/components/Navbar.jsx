import React from "react";
import styled from "styled-components";
import { TextBold } from "./Typography";

const StyledNav = styled.nav`
  min-height: 6vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--color-amber);
  border-radius: var(--border-radius);
  padding: var(--spacing-base-mobile);
`;

const Navbar = () => {
  return (
    <StyledNav>
      <TextBold>WeatherCastA</TextBold>
    </StyledNav>
  );
};

export default Navbar;
