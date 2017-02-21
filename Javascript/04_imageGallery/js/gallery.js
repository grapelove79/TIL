var req = new XMLHttpRequest(); // MLHttpRequest()클래스의 req인스턴스 생성
req.open("GET", "./json/gallery.json"); // 접근 연산자를 이용한 함수(메서드) 호출: 클래스 내부에 들어 있는 기능을 이용ㅎ기 위해서는  "인스턴스 생성 후 접근 연산자를 이용해 사용한다."
req.onreadystatechange = function() {
	if(this.readyState === 4) {
		//console.log(this.response);
		var data = JSON.parse(this.response);
		var template = " ";
		var photos = data.results;
		//console.log(photos.length);
		for(var i = 0 ; i < photos.length; i++) {
			var div = document.createElement('div');
			div.setAttribute("class", "image");
			div.onclick = function() {
				/* if( this.getAttribute("class").indexOf("image-selected") == -1 ){
					this.setAttribute("class", "image image-selected");
				} else {
					this.setAttribute("class", "image");
				} */
				this.classList.toggle("image-selected");
			}
			div.onmouseover = function() {
				var element = this;
				this.timerId = setTimeout(function() {
					element.classList.add("image-magnified");
				}, 500);
			}
			div.onmouseout = function() {
				clearTimeout(this.timerId);
				this.classList.remove("image-magnified");
			}
			var img = document.createElement("img");
			img.src = photos[i].image;
			img.alt = photos[i].alt;
			div.appendChild(img);
			document.body.appendChild(div);
		}
	}
}
req.send();

function selectAll(btn){
	var images = document.getElementsByClassName("image");
	for(var i = 0 ; i < images.length ; i++) {
		if(btn.value == "Unselect All"){
			images[i].classList.remove("image-selected");
		} 
		else{
			images[i].classList.add("image-selected");
		}
	}
	if(btn.value == "Unselect All"){
		btn.value = "Select All"
	} 
	else{
		btn.value = "Unselect All"
	}
}

function slideShow(btn) {
	var images = document.getElementsByClassName("image");
	var index = 0;
	images[index].classList.add("image-magnified");

	var intervalId = setInterval(function() {
		images[index].classList.remove("image-magnified");
		index++;
		if(index < images.length ) {
			images[index].classList.add("image-magnified");
		} 
		else {
			clearInterval(intervalId);
		}	
	}, 1000);
}