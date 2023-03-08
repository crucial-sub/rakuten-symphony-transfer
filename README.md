<h1 align="center"> API로 제공받은 데이터를 시각화하여 보여주는 웹 페이지 </h1>

<h3 align="center"> <del>서비스 링크: https:<k>//<k>fluffy-mandazi-fe2be2.netlify.app</del></h3>

<h4 align="center">(과제에서 주어진 API가 만료되어 데이터를 불러올 수 없게 되었습니다.)</h4>

<p align="center"><img width="800" src="https://user-images.githubusercontent.com/43867711/155720368-756e7b23-6d3e-49aa-8f55-81adc2a0dd21.gif" /></p>

## 🚀 스택

`React` `TypeScript` `styled-components`

## ✨ 구현 사항

> **`맡은 역할`** <br>
> 링크 상세 화면, 라우터 설정, API 연동

링크 목록 화면

- [x] 링크 목록 확인
- [x] 링크 아이템 클릭하면 상세 페이지로 이동
- [x] 제목 아래 URL 표시
  - 유효 기간 이내: 도메인 주소를 포함한 상세페이지로 이동하는 경로
  - 유효 기간 만료: 만료됨
- [x] URL 클릭 시 동작
  - 유효 기간 이내: URL을 클립보드에 복사, ${링크 제목} 주소가 복사 되었습니다 alert
  - 유효 기간 만료: 아무 동작 하지 않음
- [x] 파일 개수 숫자 3자리 단위마다 콤마 - utils
- [x] 파일 사이즈 표시 - utils
  - 소수점 둘째 자리까지
  - 단위는 B, KB, MB, GB, TB로 표기 (ex. 10.86KB)
- [x] 유효 기간 표시는 실시간 반영 - utils
  - 48시간 미만: XX시간 XX분
  - 48시간 이상: X일
  - 만료: 만료됨
- [x] 받은 사람 <Avatar /> 컴포넌트 이용해 표시

**링크 상세 화면**

- [x] 링크가 가지고 있는 파일 목록 확인, 공유
- [x] 링크 정보 표시
- [x] 받기 버튼 누르면 alert로 '다운로드 되었습니다.' 띄움
- [x] 유효 기간 이내일 경우만 파일 목록 표시

⚠️ API에 명세된 유효 기간이 전부 만료된 날짜로 확인되어 편의 상 날짜를 조절했습니다. 날짜를 조절하지 않은 코드는 [여기](https://github.com/console-lo9/rakuten-symphony-transfer/blob/no-time-change/src/utils/getExpires.ts)에서 확인 가능합니다.

⚠️ REST API에서 불러오는 정보 중 svg 파일에 한해서 403 권한오류가 발생했습니다. 저희는 실제 서비스에서 데이터를 불러오는데 실패한 경우를 가정하여 이미지 로드 오류시 대체 이미지를 렌더링 하는 방법으로 위의 문제를 해결하였습니다.

⚠️ 더 자세한 개발 정보는 팀의 wiki 에서 확인 가능합니다. <a href='https://github.com/console-lo9/rakuten-symphony-transfer/wiki/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%A7%84%ED%96%89%EA%B3%BC%EC%A0%95%EA%B3%BC-%EA%B3%A0%EB%AF%BC
'>팀 위키 바로가기</a>

## ⚙ 설치

```
# clone the project
$ git clone https://github.com/console-lo9/rakuten-symphony-transfer.git

# install modules
$ cd rakuten-symphony-transfer
$ npm install || yarn

# start
$ npm start || yarn start

⠀
⠀  You can now view this project in the browser.
⠀  http://localhost:3000/
⠀
```

## 🔗 의존성

```
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.1",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.4.0",
    "@types/node": "^16.11.19",
    "@types/react": "^17.0.38",
    "@types/react-dom": "^17.0.11",
    "@types/react-router-dom": "^5.3.3",
    "axios": "^0.24.0",
    "date-fns": "^2.28.0",
    "filesize": "^8.0.6",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^6.2.1",
    "react-scripts": "5.0.0",
    "styled-components": "^5.3.3",
    "styled-normalize": "^8.0.7",
    "typescript": "^4.5.4",
    "web-vitals": "^2.1.3"
  },
```

## 📂 파일 구조

        ├── public
        │   └── svgs
        └── src
            ├── components
            │   ├── domain
            │   │   ├── Detail
            │   │   └── LinkTable
            │   └── layout
            ├── hooks
            ├── pages
            │   ├── DetailPage
            │   └── LinkPage
            ├── styles
            ├── types
            └── utils
