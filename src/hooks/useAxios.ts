import axios from "axios";
import { useState, useEffect } from "react";
import { linkDataType } from "types/LinkDataType";

const useAxios = () => {
  const [linkData, setLinkData] = useState<linkDataType[] | null[]>([]);
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
