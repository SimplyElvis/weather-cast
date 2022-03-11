import { useEffect, useContext } from "react";
import { ResultContext } from "../contexts/resultContext.js";

export const useFetch = (url) => {
  const { setResponse, setIsFetching, setShowCityOptions, setErrorMessage } =
    useContext(ResultContext);

  useEffect(() => {
    if (url === "") return;
    const fetchData = async () => {
      setIsFetching(true);
      const response = await fetch(url);
      if (response.status === 400) {
        setErrorMessage("Invalid input");
        setIsFetching(false);
        return;
      }
      if (url.includes("locations")) {
        setShowCityOptions(true);
      } else {
        setShowCityOptions(false);
      }
      setResponse(await response.json());
      setIsFetching(false);
      setErrorMessage("");
    };

    fetchData();
  }, [url, setResponse, setShowCityOptions, setIsFetching]);
};
