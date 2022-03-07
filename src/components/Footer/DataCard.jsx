import styled from "styled-components";
import { Text, TextBold, TitleMed } from "../Typography.jsx";
import { WeatherIcon } from "../WeatherIcon.jsx";

const StyledDataCard = styled.div`
  min-width: 8em;
  min-height: 8em;
  border-radius: var(--border-radius);
  padding: calc(var(--spacing-base) / 3);
  background-color: hsl(var(--color-accent));
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
`;

export const DataCard = () => {
  return (
    <StyledDataCard>
      <TitleMed>27 Sun</TitleMed>
      <WeatherIcon />
      <Text>Description</Text>
      <TextBold>Humidity</TextBold>
      <TextBold>Pressure</TextBold>
    </StyledDataCard>
  );
};
