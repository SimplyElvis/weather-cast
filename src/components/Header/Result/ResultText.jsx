import styled from "styled-components";
import { TitleLg, TextBold } from "../../Typography";

const StyledResultText = styled.div`
  flex-grow: 1;
  padding: calc(var(--spacing-base) / 2);
`;

export const ResultText = () => {
  return (
    <StyledResultText aria-live="assertive">
      <TitleLg>
        {"34"}
        <span>&deg;</span>
      </TitleLg>
      <TextBold>Description</TextBold>
      <TextBold>Humidity</TextBold>
      <TextBold>Pressure</TextBold>
    </StyledResultText>
  );
};
