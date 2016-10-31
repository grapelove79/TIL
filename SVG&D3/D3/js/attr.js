window.onload = function(){
	var node = d3.select("#idcircle");
	node.attr("cx", 100)
			.attr("cy", 70)
			.attr("r", 50);

	// 다수 일괄 지정
	node.attr({
		stroke: "blue",
		fill: "lime"
	});
	// 함수를 호출하고 반환된 값 사용
	node.attr("stroke-width", function(){
		return 5;
	});

}