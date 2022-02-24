import React from "react";
import styled from "styled-components";
import colors from "styles/colors";
import Button from "components/layout/Button";

const DetailHeader = () => {
  return (
    <Header>
      <LinkInfo>
        <Title>로고파일</Title>
        <Url>localhost/7LF4MDLY</Url>
      </LinkInfo>
      <DownloadButton>
        <img referrerPolicy="no-referrer" src="/svgs/download.svg" alt="" />
        받기
      </DownloadButton>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  color: ${colors.grey600};
  margin-bottom: 32px;
`;

const LinkInfo = styled.div`
  overflow: hidden;
  flex-grow: 1;
`;

const Title = styled.h3`
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 28px;
  color: ${colors.grey700};
  font-size: 20px;
`;

const Url = styled.a`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  text-decoration: underline;
  line-height: 20px;
  font-size: 14px;

  :hover {
    color: ${colors.teal700};
  }
`;

const DownloadButton = styled(Button)`
  font-size: 16px;

  img {
    margin-right: 8px;
  }
`;

export default DetailHeader;
