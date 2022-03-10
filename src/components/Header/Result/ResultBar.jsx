import { useContext, useState, useEffect } from "react";
import { ResultContext } from "../../../contexts/resultContext.js";
import styled from "styled-components";
import { CityOptions } from "./CityOptions.jsx";
import { CityName } from "../../CityName.jsx";
import { Result } from "./Result.jsx";
import { breakPoint } from "../../../utils/breakPoints.js";

const ResultWrapper = styled.section`
  flex-grow: 2;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: var(--spacing-base);
  border-radius: var(--border-radius);
  background-color: var(--color-light);

  @media screen and (min-width: ${breakPoint.tablet}) {
    border-radius: var(--border-radius-md);
  }

  @media screen and (min-width: ${breakPoint.laptop}) {
    border-radius: var(--border-radius-lg);
  }
`;

export const ResultBar = () => {
  const { showCityOptions, response } = useContext(ResultContext);
  const [showCities, setShowCities] = useState(false);

  useEffect(() => {
    if (showCityOptions) {
      setShowCities(true);
    } else {
      setShowCities(false);
    }
  }, [showCityOptions]);

  console.log(response);

  return (
    <ResultWrapper>
      {showCities ? (
        <CityOptions />
      ) : (
        <>
          <CityName cityName="Nigeria" countryName="Africa" />
          <Result />
        </>
      )}
    </ResultWrapper>
  );
};
