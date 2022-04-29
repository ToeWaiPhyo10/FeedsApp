import axios from "axios";
import { useEffect, useState } from "react";

export default (url) => {
  const baseUrl = "http://conduit.productionready.io/api";
  const [isloading, setLoading] = useState(false);
  const [response, setRespones] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});
  const doFetch = (options = {}) => {
    setOptions(options);
    setLoading(true);
  };

  useEffect(() => {
    if (!isloading) {
      return;
    }
    axios(baseUrl + url, options)
      .then((res) => {
        setRespones(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response.data);
        setLoading(false);
      });
  }, [isloading]);
  return [{ isloading, response, error }, doFetch];
};
