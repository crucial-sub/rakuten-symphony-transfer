import axios from "axios";
import { useState, useEffect } from "react";

interface linkDataType {
  created_at: number;
  key: string;
  expires_at: number;
  download_count: number;
  count: number;
  size: number;
  summary: string;
  thumbnailUrl: string;
  files: File[];
  sent: Sent;
}
interface File {
  key: string;
  thumbnailUrl: string;
  name: string;
  size: number;
}
interface Sent {
  subject: string;
  content: string;
  emails: string[];
}

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
