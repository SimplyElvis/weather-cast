// import { useState, useEffect } from "react";
import styled from "styled-components";
import { TitleLg, TitleMed } from "../../Typography.jsx";
import { breakPoint } from "../../../utils/breakPoints";

const StyledClock = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: ${breakPoint.tablet}) {
    display: none;
  } ;
`;

export const Clock = () => {
  // const [hour, setHour] = useState("");
  // const [minute, setMinute] = useState("");
  // const [day, setDay] = useState("");
  // const date = new Date();

  // useEffect(() => {
  //   setHour(date.getHours());
  //   setMinute(date.getMinutes());
  //   setDay(date.getFullYear());
  // }, [date]);
  return (
    <StyledClock>
      <TitleLg>223: 23</TitleLg>
      <TitleMed>sun: 23</TitleMed>
    </StyledClock>
  );
};
