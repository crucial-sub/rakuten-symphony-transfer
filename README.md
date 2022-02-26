<h1 align="center"> 라쿠텐 심포니 코리아 과제 </h1>

<h3 align="center"> 서비스 링크: https://console-lo9-transfer.netlify.app/</h3>

<p align="center"><img width="800" src="https://user-images.githubusercontent.com/43867711/155720368-756e7b23-6d3e-49aa-8f55-81adc2a0dd21.gif" /></p>

## 🙋‍♀️🙋‍♂️ 팀원

|                                           프로필                                           |                    이름                     | 담당 기능                                       |
| :----------------------------------------------------------------------------------------: | :-----------------------------------------: | :---------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/Ubermensch0608" width="100" height="100"/> | [우종원](https://github.com/Ubermensch0608) | 링크 목록 화면(URL 표시, 클립보드), 라우터 설정 |
|  <img src="https://avatars.githubusercontent.com/crucial-sub" width="100" height="100"/>   |  [박중섭](https://github.com/crucial-sub)   | 링크 상세 화면, 라우터 설정                     |
|    <img src="https://avatars.githubusercontent.com/ttaerrim" width="100" height="100"/>    |    [이태림](https://github.com/ttaerrim)    | 링크 목록 화면(파일 크기, 유효 기간)            |
|                                                                                            |                    공통                     | API 연동, 초기 파일 컴포넌트 분리               |

## 🚀 스택

`React` `styled-components` `TypeScript`

## ✨ 구현 사항

링크 목록 화면

- [x] 링크 목록 확인
- [x] 링크 아이템 클릭하면 상세 페이지로 이동
- [x] 제목 아래 URL 표시
  - 유효 기간 이내: 도메인 주소를 포함한 상세페이지로 이동하는 경로
  - 유효 기간 만료: 만료됨
- [x] URL 클릭 시 동작
  - 유효 기간 이내: URL을 클립보드에 복사, ${링크 제목} 주소가 복사 되었습니다 alert
  - 유효 기간 만료: 아무 동작 하지 않음
- [x] 파일 개수 숫자 3자리 단위마다 콤마
- [x] 파일 사이즈 표시
  - 소수점 둘째 자리까지
  - 단위는 B, KB, MB, GB, TB로 표기 (ex. 10.86KB)
- [x] 유효 기간 표시는 실시간 반영
  - 48시간 미만: XX시간 XX분
  - 48시간 이상: X일
  - 만료: 만료됨
- [x] 받은 사람 <Avatar /> 컴포넌트 이용해 표시

링크 상세 화면

- [x] 링크가 가지고 있는 파일 목록 확인, 공유
- [x] 링크 정보 표시
- [x] 받기 버튼 누르면 alert로 '다운로드 되었습니다.' 띄움
- [x] 유효 기간 이내일 경우만 파일 목록 표시

⚠️ API에 명세된 유효 기간이 22.02.25 기준 전부 만료된 날짜로 확인되어 편의 상 날짜를 조절했습니다. 날짜를 조절하지 않은 코드는 [여기](https://github.com/console-lo9/rakuten-symphony-transfer/blob/no-time-change/src/utils/getExpires.ts)에서 확인 가능합니다.

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

## 💡 과제 후기

### **우종원** 🍀

실무에서도 생길 수 있는 데이터 오류에 대비하여 사용자가 깔끔한 화면만 볼 수 있도록 처리하는 것, 사용자에게 기능을 뽐내기 위한 데이터가 아닌, 있는 그대로를 전달하는 것 등
사용자에게 실제 서비스를 제공한다는 생각을 가지고 사용자 경험에 높은 가치를 두고 진행할 수 있어 유익했던 프로젝트였습니다.

### **박중섭** ✨
주어진 api 데이터를 받아오면서 이미지 액세스 거부, 모든 링크의 유효 기간 만료 등의 문제를 발견했고 팀원들과 함께 이러한 오류가 발생했을 시 어떻게 대처할지에 대해 논의할 수 있었던 유익한 시간이었습니다. 특히 img 태그에서 src 속성으로 주어진 url을 불러오는 과정에서 에러가 발생할 때 onError 속성을 더해주어 public에 저장해놓은 default.svg 파일을 불러오는 방식으로 처리하는 방식을 배울 수 있었습니다.

### **이태림** 🐯

유효 기간을 계산하는 과정에서 Date 함수의 쓰임을 더 자세히 알 수 있었고, utils 폴더에서 index 파일을 만들어 import 과정을 더 줄이는 방법을 배웠습니다. API 연동 및 배포하는 과정에서 proxy 설정을 따로 해 CORS 에러 또한 해결할 수 있었습니다. src/components의 구조를 이전 프로젝트와 달리 하며 새로운 디렉토리 구조도 설계해 보았던 좋은 경험이 되었습니다.
