import styled from "styled-components";
import { CityName } from "../CityName";
import { breakPoint } from "../../utils/breakPoints";
import { CardWrapper } from "./CardWrapper";
import { DataCard } from "./DataCard";

const StyledFooter = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing-base) / 2);
  padding: calc(var(--spacing-base) / 2);
  border-radius: var(--border-radius);
  background-color: var(--color-background);

  @media screen and (min-width: ${breakPoint.tablet}) {
    border-radius: var(--border-radius-md);
  }

  @media screen and (min-width: ${breakPoint.laptop}) {
    border-radius: var(--border-radius-lg);
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <CityName cityName="Abuja" countryName="Nigeria" />
      <CardWrapper>
        <DataCard />
        <DataCard />
        <DataCard />
        <DataCard />
        <DataCard />
      </CardWrapper>
    </StyledFooter>
  );
};
