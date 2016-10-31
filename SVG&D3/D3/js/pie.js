window.onload = function(){
	//  데이터를 정의한다.
	defineData();
	// svg엘리먼트를 생성한다.
	var object = createSVG();
	// 그래프 표현을 위한 기본 값 설정
	setBaseValue(object);
	// 파이 차트를 그린다.
	drawPie(object);


}

// 함수의 마지막에 아래 코드를 추가한다.

function defineData(){
	window.base = {};
	base.data = [100, 300, 500, 700, 600, 400];
};

function createSVG(){
	return d3.select(document.body)
					.append('svg')
					.attr('id', 'idsvg');
};

function setBaseValue(object){
	base.trbl = {top: 20, bottom: 20};

	//600px 형태로 반환되므로 단위(px)를 제외시켜 숫자로 변환
	base.svgWidth = parseInt(object.style('width'));
	base.sevHeight = parseInt(object.style('height')),
	base.graphHeight = base.svgHeigt - base.trbl.top - base.trbl.bottom;

	// 원의 중심 좌표
	// centeX는 오른쪽에 범례를 작성하기 위해 왼쪽에 표시
	base.centerX = (base.svgWidth - 150) /  2;
	base.centerY = base.graphHeight / 2 + base.trbl.top;
	// 파이 조각에 반영할 색
	base.color = d3.scale.category10();
};

function drawPie(object){
	//레이아웃 인스턴스 생성
	var pie = d3.layout.pie();
	// 내외측 반지름 지정
	var arc = d3.svg.arc()
		// 도너츠 형태일 때 값 지정
		.innerRadius(60)
		.outerRadius(base.graphHeight / 2);

	var obj = object.selectAll('g')
									.data(pie(base.data))
									.enter()
									.append('g')
									.attr("transform", "translate(" + base.centerX + ", ' + base.centerY +')")
	obj.append('path')
		.attr('class', 'pie')
		// d 속성 값을 반환받아 설정하면 파이 차트가 그려진다.
		.attr('d', arc)

		.style("fill", function(data, idx){
			return base.color(idx);
		})

	obj.append('text')
		.attr("transform", function(data){
			return "translate(" + arc.centeroid(data) + ")";
		})
		.attr("text-anchor", "middle")
		.text(function(data){
			return data.value;
		});
};
// 합계를 구해 표시한다.
function showTotal(object){
	object.append('g')
		.attr("transform", "translate(" + base.centerX + ", " + base.centerY + ")")
		.append("text")
		.attr({"font-size": 20, y: 10, "text-anchor": "middle"})
		.text("합계:" + d3.sum(base.data))
}