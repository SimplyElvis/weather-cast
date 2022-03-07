import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {}, []);

  return { isLoading, data, message };
};
