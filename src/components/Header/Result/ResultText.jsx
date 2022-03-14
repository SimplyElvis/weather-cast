import { useContext } from "react";
import { ResultContext } from "../../../contexts/resultContext.js";
import styled from "styled-components";
import { TitleLg, TextBold } from "../../Typography";

const StyledResultText = styled.div`
  flex-grow: 1;
  padding: calc(var(--spacing-base) / 2);
`;

export const ResultText = () => {
  const { response } = useContext(ResultContext);
  const { weather, main } = response;
  return (
    <StyledResultText aria-live="assertive">
      {response.weather !== undefined && (
        <>
          <TitleLg>
            {main.temp}
            <span>&deg;C</span>
          </TitleLg>
          <TextBold>Description: {weather[0].description}</TextBold>
          <TextBold>Humidity: {main.humidity}%</TextBold>
          <TextBold>Pressure: {main.pressure}hPa</TextBold>
          <TextBold>
            Feels like: {main.feels_like}
            <span>&deg;C</span>
          </TextBold>
        </>
      )}
    </StyledResultText>
  );
};
