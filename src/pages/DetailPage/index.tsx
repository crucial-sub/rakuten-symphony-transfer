import React from "react";
import type { FC } from "react";
import DetailHeader from "components/domain/Detail/DetailHeader";
import DetailArticle from "components/domain/Detail/DetailArticle";

const DetailPage: FC = () => {
  return (
    <>
      <DetailHeader />
      <DetailArticle />
    </>
  );
};

export default DetailPage;
