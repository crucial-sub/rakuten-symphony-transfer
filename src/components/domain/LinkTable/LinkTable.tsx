import React from "react";
import * as S from "./styles";
import Avatar from "components/layout/Avatar";
import LinkTableRow from "./LinkTableRow";

const LinkTable = () => {
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
          <LinkTableRow />
        </S.TableBody>
      </S.Table>
    </>
  );
};

export default LinkTable;
