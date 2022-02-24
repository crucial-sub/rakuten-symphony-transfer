import React, { FC } from "react";
import styled from "styled-components";
import colors from "styles/colors";
import { File } from "types/linkTypes";
import { getCreatedAt } from "utils/getCreatedAt";
import { getFileSize } from "utils/getFileSize";

const DetailArticle: FC<{
  linkContent: string;
  downloadCount: number;
  files: File[];
  fileCount: number;
  thumbnailUrl: string;
  createdAt: number;
}> = ({
  linkContent,
  downloadCount,
  files,
  fileCount,
  thumbnailUrl,
  createdAt,
}) => {
  const creationDate = getCreatedAt(createdAt);

  return (
    <Article>
      <Descrition>
        <Texts>
          <Top>링크 생성일</Top>
          <Bottom>{creationDate}</Bottom>
          <Top>메세지</Top>
          <Bottom>{linkContent}</Bottom>
          <Top>다운로드 횟수</Top>
          <Bottom>{downloadCount}</Bottom>
        </Texts>
        <LinkImage>
          <Image src={thumbnailUrl} />
        </LinkImage>
      </Descrition>
      <ListSummary>
        <div>총 {fileCount}개의 파일</div>
        <div>10.86KB</div>
      </ListSummary>
      <FileList>
        <FileListItem>
          <FileItemInfo>
            <span />
            <span>logo.png</span>
          </FileItemInfo>
          <FileItemSize>10.86KB</FileItemSize>
        </FileListItem>
      </FileList>
    </Article>
  );
};

const Article = styled.article`
  border-radius: 4px;
  border-color: ${colors.grey200};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0 0 0 1px rgb(0 20 61 / 8%), 0 3px 3px 0 rgb(0 20 61 / 4%);
  background-color: ${colors.white};
  color: ${colors.grey600};
  font-size: 14px;
  font-weight: 400;
`;

const Descrition = styled.div`
  display: flex;
  padding: 36px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 24px;
  }
`;

const Texts = styled.div`
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Top = styled.label`
  font-weight: 600;
  line-height: 20px;
`;

const Bottom = styled.p`
  color: ${colors.grey700};
  margin: 8px 0 24px;
`;

const LinkImage = styled.div`
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
  border-radius: 4px;
  justify-content: center;
  background-color: ${colors.grey50};

  @media (max-width: 768px) {
    margin-bottom: 32px;
    max-width: 100%;
  }
`;

const Image = styled.img`
  width: 120px;
  height: 100%;
  display: inline-block;
  padding: 50% 0;
`;

const ListSummary = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 36px;
  font-weight: 600;
  border-top: 1px solid;
  border-color: ${colors.grey200};

  @media (max-width: 768px) {
    padding: 12px 24px;
  }
`;

const FileList = styled.ul`
  border-top: 1px solid;
  border-color: ${colors.grey200};
  padding: 0;
  margin: 0;
  padding: 0 36px;
  color: ${colors.grey700};

  @media (max-width: 768px) {
    padding: 0 24px;
  }

  & > li + li {
    border-top: 1px solid;
    border-color: ${colors.grey200};
  }
`;

const FileListItem = styled.li`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FileItemInfo = styled.div`
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;
  display: flex;
  align-items: center;

  span:first-child {
    width: 40px;
    height: 40px;
    margin-right: 12px;
    display: inline-block;
    background-image: url(/svgs/default.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const FileItemSize = styled.div``;

export default DetailArticle;
