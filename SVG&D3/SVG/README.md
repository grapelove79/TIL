#SVG

#### 강사 소개 : 김영보 님
- 소프트웨어 개발 경력 37년, www.corechain.com 사이트 운영
- 저서 : 몰입 자바스크립트(2015), HTML5 차세대 웹 표준 기술(2010), 자바스크립트 정규표현식(2010), Ajax DOM 스크립팅(2008) 등

> D3, 캔버스, 웹젤

## 주요내용
#### SVG
- 개요, 기본 도형, 선(line)
- 직선/곡선 연결, 공통엘리먼트
- 텍스트, Marker, 이미지, 도형 제어
#### D3.js
- Bar, Line, Pie, Scatter 그래프
- Histogram, HeatMap, TreeMap 그래프
- Pack Layout, 서버 데이터
#### 기본이 중요
- 기본의 바탕 위에 활용
- 사람을 생각하는 마인드

## 이미지 비교
#### 라스터(raster)이미지
- 픽셀(pixel, dot)로 이미지 표현
- 이미지를 확대하면 이미지가 깨짐
- png, jpeg, bmp등
####SVG 이미지
- 바이너리(binary)로 표현
- 이미지를 확대해도 깨지지 않음

## SVG
- Scalable Vector Graphics
- Scalable
- 사전적 의미:
	-  확장/축소에 나조가 생기지 않음
	- 자동으로 확대/축소에 대응
- Vector
	- 라스터 이미지 : 픽셀 사용
	- Vector: 좌표 사용
- Graphics
	- 그래픽으로 표현

## HTML5와 SVG
- SVG 스펙 발표
	- 2001년 9월
	- 컴퓨터 사양 등으로 인해 사용 부진
- HTML5 와 함께 두각
	- `<svg>`로 SVG표현, 구현
	- HTML, CSS를 조합하여 UI/UX 제공

## SVG 사각형
```html
<svg>
	<rect x='100' y='30' width='200' height='100' fill='blue'></rect>
</svg>
```

## SVG 키워드
- 좌표
	- X, Y좌표
	- 콘텐츠 표현 시작 위치
- 사이즈
	- 높이(height), 너비(width)
	- 콘텐츠 사이즈
- 뷰포트

## D3.js
- 특징
	- D3: Data-Driven Docments
	- Data 기반의 시각화 JavaScript 라이브러리
	- HTML, CSS, SVG 등의 웹 표준 기술 사용
- D3.js 기본 방향
	- 모든 기능이 아닌 핵심 기능 제공
	- 이를 사용하여 프로그램 개발
	- 다양한 UI/UX 제공 불가

## 향후 전망
- 데이터 시각화
	- 데이터로 그래프 표현은 필수
	- 인포그래픽
- 모바일 적용 확대
	- 아이콘, 메뉴 버튼에 사용
	- 확대/축대 대응

## SVG(Scalable Vector Graphics)
###  브라우저 지원
- SVG스펙 상태
	- SVG1.1
	- SVG2

### SVG 에디터
- Adobe Illustrator
- svg-edit
	- https://code.google.com/p/svg-edit/
	- svg-edit
- inkscape
	- https://www.inksacpe.org/ko

### SVG 작성형태
- HTML에 인라인 엘리먼트로 작성
	- 파일확장자
	- `<svg widt="150" height="100"></svg>`
- XML로 작성
	- 파일 확장자: svg
-` <svg>`엘리먼트
	- `<svg>`와`</svg>`사이에 svgㄹ관련 엘리먼트 작성
- 주소 사용하는 속성
	- width, height: SVG 너비, 높이
	- class, style: CSS Style
	- x, y: `<svg>`위치 좌표
- SVG 속성과 CSS Style
	- style 기능의 SVG 속성은 CSS Style로 작성 가능
	- style 지원이 늘어나고 있으며 w3c의 기본 방향임.

### 주요 용어
- 글리프(glyph)
- SVG 갠버스(canvas)
- 뷰포트(viewport)

### line
- [`<line>` spec](https://www.w3.org/)
- 개요
	- (x1, y1)에서 (x2, y2)까지 선을 긋고 속성으로 선 표현
	- transform에 translate()를 작성하여 선 이동
	- <line>spec의 presentation(표현)으로 분류된 속성 사용 가능
	- onclick과 같은 이벤트 설정 가능
- 선 긋기
	- `<line x1="100" y1="100"`
	- `x2="100" y2="300" stroke="red"/>`
- 좌표
	- 시작 좌표: x1, y1
	- 끝 좌표: x2, y2
- stroke 속성
	- 라인 색 표현
	- 지정하지 않으면 선이 보이지 않음.
```vbscript-html
<svg width="600" height="400">
	<line x1="100" y1="100" x2="100" y2="200" stroke="red"/>
	<line x1="100" y1="200" x2="200" y2="200" stroke="green"/>
	<line x1="100" y1="100" x2="200" y2="200" stroke="blue"/>
</svg>
```

### CSS Style
- https://www.w3.org/TR/SVG11/styling.html
- SVG와 CSS
	- SVG1.1은 CSS2 기준
- CSS Style작성 방법
	- <line style="stroke:blue"/>와 같이 style속성에 작성
	- <style></style>d에 작성
**SVG 코드**

### stroke
- 선(line) 표현
	- stroke를 작성하지 않으면 선이 보이지 않음
	- stroke 이외 속성은 디폴트 값이 있음

### stroke-width
-  선 너비
	-  stroke-width="6"(문자열),  stroke-width=6(숫자), 디폴트:1
	-  stroke-width가 높이( height)도 됨
- 선 좌표 기준
	- stroke-width의 가운데가 좌표
	- 좌표를 기준으로 좌우상하로 표시
- y1 값(150)이 가운데 표신된 것으로 상하로 1/2씩 표시하기 때문
```vbscript-html
<svg width="600" height="400">
		<line x1="10" y1="150" x2="110" y2="150" stroke="lime" stroke-width="40"/>
		<line x1="30" y1="150" x2="150" y2="150" stroke="blue" stroke-width="1"/>
</svg>
```

### stroke-dasharray
- 점섬과 점선 간격
	- stroke-dasharray="20.5".20픽섹을 긋고 간격을 5픽셀 띄움
	- 선 끝까지 반복
- 복수 형태
	- stroke-dasharray="30,10,7,3"
	- 30픽셀 긋고 10 픽셀 띄우고 7픽셀 긋고 3픽셀 띄움
	- 예제와 같이 width가 모자라면 끝이 맞지 않을 수 있음

### stroke-linecap
- 선끝 모습

### stroke-opacity
- 불투명도
	- 1에서 0으로 갈수록 투명하게 표현. 디폴트: 1
- rgba(0,0,255,0.3)형태

### stroke-linejoin
- 모퉁이 형태
- `<polyline>`: 선을 연결하는 것

### stroke-miterlimit
- 문제점
	- 첫 번째 선에 stroke-linejoin="miter"를 지정했는데

### stroke-dashoffset
- offset 값 지정
	- stroke-dasharray와 같이 사용

### 기본 도형
#### rect
- 사각형
	- 직사각형, 정사각형 : width와 height에 따라 결정
```html 
<rect x="100" y="100" width="150" height="75" />
```
- 둥근 사각형
	- 사각형의 모퉁이를 둥글게 표시
```html  
<rect x="100" y="100" width="150" height="75" rx="10" ry="10" />
```

#### fill
- 도형 내부에 표현
	- 도형 안에 색을 칠하거나 칠하는 기준 변경
	- 불투명도를 사용하여 투과
- 도형 내부읠 색
	- fill의 디폴트 값:  black
```html
// fill 속성값 "none":칠하지 않음
<rect x="100" y="100" width="150" height="75" rx="10" ry="10" fill="none"/> 
// fill 속성과 rx, ry작성
<rect x="100" y="100" width="150" height="75" rx="10" ry="10" fill="blue" rx="10" ry="10"/>
```

#### fill-opacity
- 도형내의 불투명도

#### circle
- 반지름이 같은 원
```html
<circle cx="200" cy="170" r="50"/>
```

#### ellipse
- 타원형
```html
<ellipse cx="200" cy="120 rx="60" ry="40" fill="blue" />
```

#### polyline
- 선이 연결되지 않아 열려 있는 상태라도
- fill에 색상을 작성하면 작성한 색으로 도형 내부를 칠한다.
```html
<polyline points="100,150 150,100 200,100 200,150" fill="lime" stroke-width="3" stroke="blue" />
```

- 도형 내부를 칠하지 않으려면 fill="none"을 지정한다.

#### polygon
-  다각형
	-  직선과 직선을 연결하여 도형 표현

#### fill-rule
- nonezero
	- 영역 전체를 페인트
```html
<polygon points="50,50 165,50 70,125 110,10 150,125" fill="lime" stroke="green" stroke-width="1" fill-rule="nonezero" />
```
- evenodd
	- 선이 겹치는 부분을 칠하지 않음
	- 단, 두 값 모두 선의 시작 방향등에 달라 달라질  수 있음
```html
<polygon points="50,190 165,190 70,265 110,150 150,265" fill="lime" stroke="green" stroke-width="1" fill-rule="evenodd" />
```
#### `<path>`
- 개요
	- 좌표를 직선 또는 곡선으로 연결하여 선, 도형을 그림
	- fill, stroke 등으로 선, 도형을 표현

####`<d>`
- `<path>`형태
	- `<path d="M100,160 L160,100 L200,160 z"`
	- `fill="lime" stroke-width=3 stroke="blue" />`

#### `<d>` 속성 구성

#### `<d>`속성 작성 기준
- `<path>`형태

#### 절대/상대 좌표

#### 코딩 예제
- 목적
	- `<path>` 기본 이해
- 시나리오
	1. 왼쪽의 이등변 사각형을 그린다.
		1. 위변의 길이: 100픽셀
		1. 아래변의 길이: 200픽셀
		1. 높이: 100픽셀
	1. 절대값과 상댓값을 사용한다.
	1. fill과 stroke, stroke-width를 사용한다.
	1. `<path>`를 사용한다.
 
#### `<g>`
#### `<use>`

### 수평선

### 타원호 반지름

### 타원호

### 타원호 선택, 방향

### 타원호 선택, 방향

### 타원호 선택

###  타원호 크기 구하기
console.log('width: ', hash.width);

### 2차 베지어 곡선
- 2차 베지어 곡선(quadratic Bezier curve)
	- 시작점에서 제어점을 경우하여 끝점으로 포물선을 그린다.

### 2차 베지어 곡선

### 3차 베지어 곡선 1
- 시작점에서
- C, c: 3차 베지어 곡선(curveto)
	- 시작점에서 

### 3차 베지어 곡선 2
- S. s: 3차 베지어 곡선
	- 시작점에서 2개의 제어점을 경유하여 끝점으로 포물선을 그린다.
	- 두 번째 제어점의 대칭점이 첫 번째 제어점이 됨.

### viewBox

### viewBox 음수 영역
- 앞 viewBox에서 음수 영역을 웹 페이지에 표시하려면
- viewBox에 음수 좌표로 영역 지정

### viewBox 축소
- 음수 영역 표시
	- 앞 viewBox에서 모든 도형을 웹 페이지에 표시하려면
	- 웹페이지 영역에 맞게 도형 축소
	- 각 도형 사이즈, 위치를 조정하지 않고  viewBox로 조정
- 비율로 축소
	- `<svg>` width/height는 변경하지 않고
	- 표시할 전체 영역을 viewbox의 width/height에 지정

### transform

### translate
- 도형 이동
	- x(top), y(left)

### sclae
이동과 확대 축소를 같이 한다.

### scale-음수
###  rotate-회전
- rotate(totate-angle. cx, cy)
	- rotate-angel:  도형 회전 각도
	- 양수: 시계 방향, 음수: 시계 반대 방향
	- cx, cy

### skewX(경사)

### matrix
- transform="matrix(a,b,c,d,e,f)"
	- a: x축 확대/축소
	- b: y축 기울기
	- c: x축 기울기
	- d: y축 확대/축수
	- e: x축 이동
	- f: y축 이동
	
### `<text>`
- 텍스트(문자)표현

### lengthAdjust

### rotate
- 텍스트 회전

### text-anchor
- 텍스트 위치 맞춤
	- 텍스트를 text-anchor 속성 값에 맞추어 표현한다.

### writing-mode

###`<g>`그룹핑
- 그룹화
	- 관련된 엘리먼트를 그룹화
	- `<g id="group"><rect><line></>`
	- `<g>`안에 `<g>`를 작성 가능
- 장점
	- <g>에 속한 엘리먼트의 공통 속성 작성
		-각 엘리먼트에서 작성하지 않음
		각 엘리먼트에 이벤트를 설정하지 않고 `<g>`에 설정
- 대체
	- `<g>`에 작성한 속성을 차일드 엘리먼트에 작성하면
	- 값이 대체되어 차일드 엘리먼트의 속성이 반영
