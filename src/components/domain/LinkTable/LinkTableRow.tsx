import { Fragment } from "react";
import * as S from "./styles";
import Avatar from "components/layout/Avatar";
import { Sent } from "types/LinkDataType";
import { getThreeComma, getFileSize, getExpires } from "utils";

const LinkTableRow = ({
  count,
  size,
  expires_at,
  sent,
}: {
  count: number;
  size: number;
  expires_at: number;
  sent?: Sent;
}) => {
  return (
    <Fragment>
      <S.TableRow>
        <S.TableCell>
          <S.LinkInfo>
            <S.LinkImage>
              <img
                referrerPolicy="no-referrer"
                src="/svgs/default.svg"
                alt=""
              />
            </S.LinkImage>
            <S.LinkTexts>
              <S.LinkTitle>로고파일</S.LinkTitle>
              <S.LinkUrl>localhost/7LF4MDLY</S.LinkUrl>
            </S.LinkTexts>
          </S.LinkInfo>
          <span />
        </S.TableCell>
        <S.TableCell>
          <span>파일개수</span>
          <span>{getThreeComma(count)}</span>
        </S.TableCell>
        <S.TableCell>
          <span>파일사이즈</span>
          <span>{getFileSize(size)}</span>
        </S.TableCell>
        <S.TableCell>
          <span>유효기간</span>
          {/* {getExpires(expires_at)} */}
          <span>{getExpires(expires_at)}</span>
        </S.TableCell>
        <S.TableCell>
          <span>받은사람</span>
          {sent && (
            <S.LinkReceivers>
              {sent.emails.map((email, index) => (
                <Avatar key={index} text={email} />
              ))}
            </S.LinkReceivers>
          )}
        </S.TableCell>
      </S.TableRow>
    </Fragment>
  );
};

export default LinkTableRow;
