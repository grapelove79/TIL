window.onload = function(){
	
	var object = createSVG();
	drawBar(object);
	// x, y축 선을 긋는다.
	drawXYLine(object);
	// y축에 눈금자와 금액을 표시한다.
	drawYAxis(object);
	// x축에 눈금자와 월을 표시한다.
	drawXAxis(object);
}

/**
 * ----------------------------------------------------------
 * x축 눈금자 표시
 * ---------------------------------------------------------- */
 // x축에 눈금자와 월을 표시한다.
function drawXAxis(object){
	var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	var xScale = d3.scale.ordinal()
												.rangeRoundBands([0, 600], 0);
	xScale.domain(data.map(function(value){return value}));

	// domain()에서 설정한 data 값 만큼 반복한다.
	var xAxis = d3.svg.axis()
										.scale(xScale)
										.orient('bottom');
	object.append('g')
				.attr('class', 'axis')
				.attr('transform', 'translate(50, 420)')
				.call(xAxis);
}


/**
 * ----------------------------------------------------------
 * y축 눈금자 표시
 * ---------------------------------------------------------- */
// y축에 눈금자와 금액을 표시한다.
function drawYAxis(object){
	var yScale = d3.scale.linear()
												.domain([0, 1000])
												.range([400, 0]);
	// domain, range는 간격을 만들어 준다.
	var yAxis = d3.svg.axis()
										.scale(yScale)
										.orient('left');
	object.append('g')
				.attr('class', 'axis')
				.attr('transform', 'translate(50, 20)')
				.call(yAxis);
}


/**
 * ----------------------------------------------------------
 * 그래프 기준선
 * ---------------------------------------------------------- */
// x, y축 선을 긋는다.
function drawXYLine(object){
	// 가로축과 세로축 선을 긋는 좌표 값
	var axisValue = [
		{x: 50, y: 20},
		{x: 50, y: 420},
		{x: 650, y: 420}
		];
	var line = d3.svg.line()
										.x(function(value){return value.x})
										.y(function(value){return value.y});
	// x, y축 선을 긋는다.
	object.append('g')
				.attr('class', 'axis')
				.append('path')
				.attr('d', line(axisValue));
}

/**
 * ----------------------------------------------------------
 * 막대 그래프
 * ---------------------------------------------------------- */

function drawBar(object){
	var salesData = [950, 550, 450, 350, 250, 150, 180, 250, 350, 450, 550, 850];
	//막대 폭을 계산한다. 20픽셀은 막대 간격
	var barWidth = 600 / salesData.length - 20;
	var posList = [];
	var obj = object.append('g')
									.attr('class', 'bar')
									.selectAll('rect')
									.data(salesData);

	// 데이터를 하나씩 읽어가면서 <rect>을 그린다.
	obj.enter()
		.append('rect')
		// 좌표 표시 시작점을 0으로 사용하기 위해
		// x축을 50픽셀, y축을 20픽셀 이동한다.
		.attr('transform', 'translate(50,20)')
		.attr('width', barWidth)
		.attr('height', function(value, index){
			// 세로축 높이가 400픽셀이므로
			// 데이터가 700이면 280 픽셀이 된다.
			posList.push(Math.round(400 * value/1000));
			return posList[index];
		})
		// <rect> 이 시작점에서 우측에서 하측으로 사각형을 그리므로
		// 시작점을 지정한다.
		.attr('x', function(value, index){
			//첫 번째 x좌표는 10이며 공간을 띄운다.
			//두 번째는 (30*1) + (20*1) - 10의 결과인 60이 된다.
			return (barWidth * index) + (20 * index) + 10;
		})
		.attr('y', function(value, index){
			return 400 - posList[index];
		});
};

// 앞 코드 사용
function createSVG(){
	return d3.select(document.body)
					.append('svg')
					.attr('id', 'idsvg')
}
