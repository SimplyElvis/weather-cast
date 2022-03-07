import styled from "styled-components";

const StyledWeatherIcon = styled.div`
  flex-grow: 1;
  padding: calc(var(--spacing-base) / 2);
`;

export const WeatherIcon = () => {
  return (
    <StyledWeatherIcon>
      <img src="" alt="weather icon" />
    </StyledWeatherIcon>
  );
};
