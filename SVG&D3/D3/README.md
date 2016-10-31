# D3.js

## D3.js개요
- Data-Driven Documents
	- Data 기반의 시각화 JavaScript라이브러리
	- HTML, SVG, CSS, DOM등의 웹 표준 기술 사용
	- 모든 기능이 아닌 핵심 솔루션 제공이 목표
	- 이를 사용한 프로그램 필요
- 소스 다운로드
	- https://dejs.org
	
### 그래프 작성 방법
- Google Charts
	- 지원 그래프 유형(원, 막대 등) 이 정해져 있음
	- 데이터를 API에 적용하여 그래프 작성
-D3.js
	- 정해진 그패프 유형 없음
	- 데이터를 다큐먼트에 표현하기 위한 기능 제공
	- 좌표, 연산, 색, 레이아웃 등
	- 제공 기능을 사용하열 프로그램으로 그래프 작성
	- 다른 프레임워크 사용 가능
	- D3.js 사이트에 샘플 그래프 유형 제공

### API 대분류
- API이름
	- Core : selections, transitions, data, localization, colors, etc.
	- Scales :  convert between data and visual encodings
	- SVG : utilites for creating SVG
	- Time : parse or format times, compute calendar intervals, etc.
	- Layouts : derive secondary data for positioning elements
	- Geography :  
	- Geometry
	- Behaviors
- API이지만 실체는 오브젝트

#### Core
- selections
- Transitions
- Arrays
- Math
- Requests
- Formatting
- CSV
- Localization
- Colors
- Namespces
- Internals

#### Layouts
- Bundle : 가장자리에 구조적 번들 알고리즘 레이아웃
- Chord  :  Chord다이어그램 레이아웃
- Cluster :  Cluster 레이아웃
- Force : position linked nodes using physical simulation.
- Hierarchy : derive a custom hierarchical layout implementation.
- Histogram : 도수 분포도
- Pack : produce a hierarchical layout using recursive circle=packing.
- Partition : recursively partition a node tree into a  sunburst or icicle.
- Pie : compute the start and end angles for arcs in a pie or donut char.
- Stack :  compute the baseline for each series in a stacked bar or area char.
- Tree :  position a tree of nodes tidily.
- Treemap : use recursive spatial subdivistion to display a tree of nodes.


## D3.js개념

### `<svg>`생성
- 시나리오
	1. `<svg>`를 생성하여`<body>`에 첨부한다.
	1. #id에 'idsvg'를 설정한다.
    1. width: 150, height: 100을 설정한다.
	1. style 속성에 값을 설정한다. 
		- position: "absolute",  top: "200px",  left: "100px"
		- border: "1px solid black"

### `<rect>`생성
- `<rect>`생성
	- `<rect>`을 생성하여 `<svg>`에 첨부
	- `<rect x=10 y=10 width=100 height=50 stroke=blue fill=lime stroke-width=5 rx=5 ry=5 />`

### select()
- d3.select() 개요, 기능
	-	Selector, Node :  문자열 selector, 또는 Element
	-	반환 : Selector에 매치되는 엘리먼트를 포함한 d3인스턴스 반환
- document.querySelector()
	- Document에서 select와 매치되는 엘리먼트 반환
- d3.select()
	- querySelector()와 기능 같음
	- method chain을 할 수  있도록 d3인스턴스 반환

### selectAll()
- document.querySelectorAll()
	- Document에서 select와 매치되는 엘리먼트 반환
- d3.selectAll()
	- querySelectorAll()와 기능 같음
	- method chain을 할 수  있도록 d3인스턴스 반환

### attr()
- selection.attr() 개요 기능
	- name: 속성이름
	- value: (선택)속성 값
- selection.attr()
	- d3.select()로 엘리먼트가 포함된 d3 인스턴스(selection)를 생성하고
	- 인스턴스에 포함된 attr() 메소드를 호출하는 형태
	- 복수일때 attrs()
	- 두번째 파라미터를 작성하면 selection에 포함된 엘리먼트의 속성 값 설정
	- {x: "100", y: "200"}형태로 다수 작성 가능
	- 두 번째 파라미터를 작성하지 않으면 selection에 포함된 엘리먼드의 속성 값 반환

### append()
- selection.append() 개요 기능
	- name: 엘리먼트를 생성하여 selection에 포함된 엘리먼트에 첨부
- selection.append()
	-  파라미터에 문자열로 엘리먼트 이름작성
	-  엘리먼트를 생성하여 selection에 포함된 엘리먼트에 첨부

### style()
- selection.style()
	- name:  style속성 이름
	- value: (선택) style 속성 값
	- priority: (선택) important
-  파라미터 작성 기준
	-  name에 style속성 이름 작성
	-  value를 작성하지 않으면 selection에 포함된 엘리먼트의 style 값 반환
	-  value에 값을 작성하면 elelction에 포함된 엘리먼트의 style값 설정
	-  value에 함수를 작성하면 함수를 호출하고 반환된 값 사용
	-  priority에 "important"작성

### 코딩 문제
1. 정삼각형 2개를 연결하여 표현한다.
2. 밑변의 길이는 100픽셀이다.

### data(), enter()

- selection.data()
	- 개요, 기능
		- values :  기준 데이터
		- key: (선택) 함수
	- selection 인스턴스에서 사용할 데이터 지정
	- .data([12, 32, 56])
- selection.enter()
	- 데이터를 설정하고 반복 처리를 위한 환경 설정

## Bar 그래프
- 개요
	- 값을 막대 길이로 표현
	- 2개 이상의 값을 비교하는데 사용
	- 막대를 가로/세로 방향으로 표시

#### 시나리오
- 데이터
	- 1월에서 12월 까지 월별 매출액을 갖고 있다.
	- 금액 범위는 0에서 1000까지 이다.
- 그래프
	1. 가로축에 월을 표시하고 세로축에 금액을 표시한다.
	2. 금액을 100단위로 표시하고 월은 월 단위로 표시한다
	3. 가로(width)는 670 픽셀이고 세로(height)는 450픽셀이다.
	4. 막대 width는 데이터 수로 균등 분할한다.
- 개념 이해와 코드 정리 단계로 나누어 진행
	- `<svg>`생성
	- bar표시
	- x, y축 기준선 표시
	- y축 텍스트
	- x축 텍스트


## Line
## Pie
#### 시나리오
#### pie차트
## Scatter
## Histogram
## 서버데이터
## HeatMap
## TreeMap
## Pack Layout