import { useState, createContext } from "react";

export const ResultContext = createContext({});

export const ResultContextProvider = ({ children }) => {
  const [queryString, setQueryString] = useState("");
  const [response, setResponse] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [showCityOptions, setShowCityOptions] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <ResultContext.Provider
      value={{
        queryString,
        setQueryString,
        response,
        setResponse,
        isFetching,
        setIsFetching,
        showCityOptions,
        setShowCityOptions,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};
