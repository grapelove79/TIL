window.onload = function(){
	d3.select(document.body) // d3오브젝트에 저장할거야,(document.body)객체를 선택한다.
		.append('svg') // append는 요소를 첨부한다, 점(.)은 메소드체인이고 점 뒤에 메소드는 d3에 포한되어 있는 것들이다.
		.attr('id', 'idsvg')
		.attr('width', 150)
		.attr('height', 100)
		.styles({
			position: 'absolute',
			top: '200px',
			left: '100px',
			border: '1px solid blue'
		});

	// 연결해서 작성해도 되지만 보기 쉽게 하기 위해 분리
	// #idsvg.svg로 엘리먼트를 반화 받음.
	d3.select("#idsvg")
		.append("rect")
		.attrs({
			x: 10,
			y: 10,
			width: 100,
			height: 50,
			stroke: "blue",
			fill: "lime",
			"stroke-width": 5, rx: 5, ry: 5
		});
}