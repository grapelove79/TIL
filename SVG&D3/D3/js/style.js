window.onload = function(){

	d3.select('#idsvg')
		.append('circle')
		.attr({
			cx: 100, cy: 70, r: 50
		})
		// 엘리먼트의 style속성에 작성된다.
		.style({
			stroke: 'blue', 
			fill: 'name'
		})
		// 함수를 호출하고 반환된 값을 사용
		.style('stroke-width', function(){
			return 4;
		});

}