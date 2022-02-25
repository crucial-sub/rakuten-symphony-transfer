import axios from "axios";
import { useState, useEffect } from "react";

const useAxios = <T>(url: string) => {
  const [linkData, setLinkData] = useState<T>();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(url, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },
        });
        setLinkData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return linkData;
};

export default useAxios;
