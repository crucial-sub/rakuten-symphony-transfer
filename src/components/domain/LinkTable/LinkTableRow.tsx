import React, { EventHandler, Fragment, ReactEventHandler } from "react";
import * as S from "./styles";
import Avatar from "components/layout/Avatar";
import type { FC } from "react";
import { linkDataType } from "hooks/useAxios";
import { Link } from "react-router-dom";
import { EnumType } from "typescript";

interface LinkTableRowProps extends linkDataType {
  id: string;
}

const LinkTableRow: FC<LinkTableRowProps> = ({
  summary,
  thumbnailUrl,
  id,
  expires_at,
}) => {
  const hostLocation = window.location.href;

  const calcedExpiresAt = expires_at * 1000;
  const calcedCurrentDate = Number(new Date());

  const errorImageHandler: React.ReactEventHandler<HTMLImageElement> = (
    event
  ) => {
    event.currentTarget.src = "/svgs/default.svg";
  };

  const showFileUrl = () => {
    if (calcedExpiresAt > calcedCurrentDate) {
      return `${hostLocation}${id}`;
    } else {
      return "만료됨";
    }
  };

  const clipBoardHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    const clipBoard = navigator.clipboard;

    if (calcedExpiresAt > calcedCurrentDate) {
      clipBoard.writeText(`${hostLocation}${id}`);
      alert(`${hostLocation}${id} 주소가 복사 되었습니다.`);
    } else {
      return;
    }
  };

  return (
    <Fragment>
      <S.TableRow>
        <Link to={`/${id}`}>
          <S.TableCell>
            <S.LinkInfo>
              <S.LinkImage>
                <img
                  referrerPolicy="no-referrer"
                  src={thumbnailUrl}
                  alt=""
                  onError={errorImageHandler}
                />
              </S.LinkImage>
              <S.LinkTexts>
                <S.LinkTitle>{summary}</S.LinkTitle>
                <S.LinkUrl onClick={clipBoardHandler}>
                  {showFileUrl()}
                </S.LinkUrl>
              </S.LinkTexts>
            </S.LinkInfo>
            <span />
          </S.TableCell>
          <S.TableCell>
            <span>파일개수</span>
            <span>1</span>
          </S.TableCell>
          <S.TableCell>
            <span>파일사이즈</span>
            <span>10.86KB</span>
          </S.TableCell>
          <S.TableCell>
            <span>유효기간</span>
            <span>48시간 00분</span>
          </S.TableCell>
          <S.TableCell>
            <span>받은사람</span>
            <S.LinkReceivers>
              <Avatar text="recruit@estmob.com" />
            </S.LinkReceivers>
          </S.TableCell>
        </Link>
      </S.TableRow>
    </Fragment>
  );
};

export default LinkTableRow;
