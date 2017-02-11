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


## 서버오픈
Day02 kys$ cd /Users/kys/Desktop/FDS 

Day02 kys$ clear (초기화.화면정리)

Day02 kys$ ls(폴더목록)

css index.html practice.html

images page.html views

Day02 kys$ ls views/(views디렉토리 목록)

.DS_Store     about.html    contact.html  project.html  service.html

Day02 kys$ http-server -o(서버오픈)


http://localhost:8081/gallery.html