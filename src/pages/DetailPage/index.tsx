import React, { useEffect, useState } from "react";
import type { FC } from "react";
import DetailHeader from "components/domain/Detail/DetailHeader";
import DetailArticle from "components/domain/Detail/DetailArticle";
import { useParams } from "react-router-dom";
import { linkDataType } from "utils/types";

const DetailPage: FC<{ linkData: linkDataType[] | null }> = ({ linkData }) => {
  const { key } = useParams();
  const [file, setFile] = useState<linkDataType>();

  useEffect(() => {
    if (linkData) {
      const selectedFile = linkData.find((file) => file.key === key);
      setFile(selectedFile);
    }
  }, [linkData]);

  return (
    <>
      <DetailHeader />
      <DetailArticle />
    </>
  );
};

export default DetailPage;
