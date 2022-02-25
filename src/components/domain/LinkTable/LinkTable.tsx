import React from "react";
import * as S from "./styles";
import Avatar from "components/layout/Avatar";
import LinkTableRow from "./LinkTableRow";
import useAxios from "hooks/useAxios";
import { linkDataType } from "types/LinkDataType";

const LinkTable = () => {
  const linkData: linkDataType[] | null[] = useAxios();
  return (
    <>
      <S.Title>마이 링크</S.Title>
      <S.Table>
        <S.TableHead>
          <S.TableRow>
            <S.TableCell>제목</S.TableCell>
            <S.TableCell>파일개수</S.TableCell>
            <S.TableCell>크기</S.TableCell>
            <S.TableCell>유효기간</S.TableCell>
            <S.TableCell>받은사람</S.TableCell>
          </S.TableRow>
        </S.TableHead>

        <S.TableBody>
          {linkData.length !== 0 &&
            linkData.map((link) => (
              <LinkTableRow
                key={link!.key}
                count={link!.count}
                size={link!.size}
                expires_at={link!.expires_at}
                sent={link!.sent}
              />
            ))}
          {linkData.map((link) => console.log(link))}
        </S.TableBody>
      </S.Table>
    </>
  );
};

export default LinkTable;
