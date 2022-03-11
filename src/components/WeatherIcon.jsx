import styled from "styled-components";

const StyledWeatherIcon = styled.div`
  flex-grow: 1;
  padding: calc(var(--spacing-base) / 2);
  max-width: 80%;
  min-height: 4em;

  img {
    object-fit: contain;
    object-position: center;
  }
`;

export const WeatherIcon = ({ imgUrl }) => {
  return (
    <StyledWeatherIcon>
      {imgUrl !== undefined && <img src={imgUrl} alt="weather icon" />}
    </StyledWeatherIcon>
  );
};
