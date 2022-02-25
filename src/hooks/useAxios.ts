import axios from "axios";
import { useState, useEffect } from "react";
import { LinkDataType } from "types/LinkDataType";

const useAxios = () => {
  const [linkData, setLinkData] = useState<LinkDataType[] | null[]>([]);
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
