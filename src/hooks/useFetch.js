import { useEffect, useContext } from "react";
import { ResultContext } from "../contexts/resultContext.js";

export const useFetch = (url) => {
  const { setResponse, setIsFetching, setShowCityOptions } =
    useContext(ResultContext);

  useEffect(() => {
    if (url === "") return;
    const fetchData = async () => {
      setIsFetching(true);
      const response = await fetch(url);
      if (url.includes("locations")) {
        setShowCityOptions(true);
      } else {
        setShowCityOptions(false);
      }
      setResponse(await response.json());
      setIsFetching(false);
    };

    fetchData();
  }, [url, setResponse, setShowCityOptions, setIsFetching]);
};
