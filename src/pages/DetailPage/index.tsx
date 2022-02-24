import React, { useEffect, useState } from "react";
import type { FC } from "react";
import DetailHeader from "components/domain/Detail/DetailHeader";
import DetailArticle from "components/domain/Detail/DetailArticle";
import { useParams } from "react-router-dom";
import { linkDataType } from "types/linkTypes";

const DetailPage: FC<{ linkData: linkDataType[] | null }> = ({ linkData }) => {
  const { key } = useParams();
  const [link, setLink] = useState<linkDataType>();

  useEffect(() => {
    if (linkData) {
      const selectedLink = linkData.find((data) => data.key === key);
      setLink(selectedLink);
    }
  }, [linkData]);

  if (!link) return <div>로딩 중</div>;

  return (
    <>
      <DetailHeader linkTitle={link.sent ? link.sent.subject : "무제"} />
      <DetailArticle
        linkContent={link.sent ? link.sent.content : "내용 없음"}
        downloadCount={link.download_count}
        thumbnailUrl={link.thumbnailUrl}
        files={link.files}
        fileCount={link.count}
        createdAt={link.created_at}
      />
    </>
  );
};

export default DetailPage;
