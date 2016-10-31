window.onload = function(){
	var acumY = 0, circleData = [30, 40, 50];
	var dataObj = d3.select("#idsvg")
									.selectAll("circle")
									// 인스턴스에 circleData 설정 환경 작성
									// 데이터를 설정하지 않음
									.data(circleData);
	// data()와 enter()결과를 보기 위해 코드를 분리하였다.

	// 데이터를 설정하고 반복 처리를 위한 환경 설정
	var obj = dataObj.enter();
	// debugger로 dataObj와 obj 형태를 살펴 본다.

	// 여기서 부터 끝까지 circleDat.length 만클 반복 수행
	obj.append('circle')
		.attr({cx: 100, fill: 'blue'})
		.attr('cy', function(value, index) {
			acumY = acumY + value;
			if(index > 0){

				acumY = acumY + circleData[index - 1 ];
				// debugger;
			}
			return acumY;
		})
		.attr('r', function(value, index){
			return value;
		}); 
}