# 이미지 갤러리 틀 만들기

## Part 1. 갤러리 틀 만들기
1. JSON으로 갤러리에 표시될 이미지 리스트 가져오기
2. 배열에서 개별 이미지에 접근
3. 갤러리에 Image 추가


- 서버 설치 
$ sudo npm install --global http-server
$ npm install http-server -g

- 로컬 서버 연결
$ http-server -o -a localhost -p 8081
: http://localhost:8081로 자동으로 띄워줍니다.

- 버전체크
node --version
npm -version

- 서버오픈
$ http-server -o(서버오픈)
http://localhost:8081/index.html


- classList : 엘리먼트에 적용된 클래스 리스트 랙체
add, remove, toggle 메소드 : 해당 엘리먼트에 클래스를 추가, 삭제, 추가/삭제 기능 제공

- tag의 속성으로 실행되던 event handler에서 this를 호출한 함수의 인자로 전달해 이벤트가 발생한 element에 쉽게 접근
- mouseover event : 마우스 커서가 엘리먼트 위에 올라간 경우 발생하는 이벤트
- mouseout event : 마우스 커서가 엘리먼트에서 밖으로 나간 경우 발생