import axios from "axios";
import { useState, useEffect } from "react";

export interface linkDataType {
  count: number;
  created_at: number;
  download_count: number;
  expires_at: number;
  files: File[];
  key: string;
  size: number;
  summary: string;
  thumbnailUrl: string;
  sent: Sent;
}
export interface File {
  key: string;
  thumbnailUrl: string;
  name: string;
  size: number;
}
export interface Sent {
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
