<h1 align="center"> 라쿠텐 심포니 코리아 과제 </h1>

<h3 align="center"> 서비스 링크: </h3>

<p align="center"><img width="500" src="https://bit.ly/3HyINHE" /></p>

## 🙋‍♀️🙋‍♂️ 팀원

|                                           프로필                                           |                    이름                     | 담당 기능 |
| :----------------------------------------------------------------------------------------: | :-----------------------------------------: | :-------- |
| <img src="https://avatars.githubusercontent.com/Ubermensch0608" width="100" height="100"/> | [우종원](https://github.com/Ubermensch0608) |           |
|  <img src="https://avatars.githubusercontent.com/crucial-sub" width="100" height="100"/>   |  [박중섭](https://github.com/crucial-sub)   |           |
|    <img src="https://avatars.githubusercontent.com/ttaerrim" width="100" height="100"/>    |    [이태림](https://github.com/ttaerrim)    |           |
|   <img src="https://avatars.githubusercontent.com/penguin311" width="100" height="100"/>   |   [임수영](https://github.com/penguin311)   |           |

## 🚀 스택

`React`

## ✨ 구현 사항

링크 목록 화면

- [ ] 링크 목록 확인
- [ ] 링크 아이템 클릭하면 상세 페이지로 이동
- [ ] 제목 아래 URL 표시
  - 유효 기간 이내: 도메인 주소를 포함한 상세페이지로 이동하는 경로
  - 유효 기간 만료: 만료됨
- [ ] URL 클릭 시 동작
  - 유효 기간 이내: URL을 클립보드에 복사, ${링크 제목} 주소가 복사 되었습니다 alert
  - 유효 기간 만료: 아무 동작 하지 않음
- [ ] 파일 개수 숫자 3자리 단위마다 콤마
- [ ] 파일 사이즈 표시
  - 소수점 둘째 자리까지
  - 단위는 B, KB, MB, GB, TB로 표기 (ex. 10.86KB)
- [ ] 유효 기간 표시는 실시간 반영
  - 48시간 미만: XX시간 XX분
  - 48시간 이상: X일
  - 만료: 만료됨
- [ ] 받은 사람 <Avatar /> 컴포넌트 이용해 표시

링크 상세 화면

- [ ] 링크가 가지고 있는 파일 목록 확인, 공유
- [ ] 링크 정보 표시
- [ ] 받기 버튼 누르면 alert로 '다운로드 되었습니다.' 띄움
- [ ] 유효 기간 이내일 경우만 파일 목록 표시

## 🗺 구현 기능

1. 첫 번째 기능

   <img width="500" src="https://bit.ly/3HyINHE" />

2. 두 번째 기능

   <img width="500" src="https://bit.ly/3HyINHE" />

## ⚙ 설치

```
# clone the project
$ git clone https://github.com/console-lo9/rakuten-symphony-transfer.git

# install modules
$ cd rakuten-symphony-transfer
$ npm ci || yarn

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
    "axios": "^0.25.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "styled-components": "^5.3.3",
    "web-vitals": "^2.1.4"
  },
```

## 📂 파일 구조

     ├── public
     └── src
         ├── components
         │   ├── BuyerRecommendImg
         │   └── UploadImages
         ├── layout
         │   ├── Inputs
         │   └── Section
         ├── pages
         ├── store
         │   └── Contexts
         └── utils
             └── svg

> 작성 후 삭제
> 참고 (https://www.lesstif.com/lpt/linux-tree-54952142.html)
>
> ```
> $ tree -N -L 2 -d -I "node_modules"
> ```
>
> 또는 vscode File-tree-generator extension 사용

## 💡 과제 후기

### **우종원** 🍀

### **박중섭** ✨

### **이태림** 🐯

### **임수영** 🐧
