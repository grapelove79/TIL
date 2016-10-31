window.onload = function(){
	console.log('--document.querySelectorAll("em");--');
	var nodes =  document.querySelectorAll('em');
	console.log('nodes.length:', nodes.length);

	console.log('');
	// 개발자 도구 창에서 반환된 형태를 살펴본다.
	// d3node[0]의 [0]과 [1]에 em엘리먼트가 있다.
	// lengh가 1인 것은 d3.js의 구조이기 때문이다.
	var d3node = d3.selectAll('em');
	console.log('d3node.length:', d3node.length);
}


 	console.log('');
 	console.log('--d3.selectAll("circle");--');
 	d3node = d3.selectAll('circle');

 	// <circle>을 작성하지 않았는데 length가 1인 것은
 	// 값이 있을 때의 구조와 맞추기 위해서이다.
 	console.log('d3node.length:', d3node.length);
	