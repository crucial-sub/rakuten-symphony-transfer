import axios from "axios";
import { useState, useEffect } from "react";
import { linkDataType } from "types/linkTypes";

const useAxios = () => {
  const [linkData, setLinkData] = useState<linkDataType[] | null>(null);
  const url = "/homeworks/links";

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(url);
        setLinkData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return linkData;
};

export default useAxios;
