##### helloworl

# NETWORKING

## 비동기통신
- view가 update하는 동안에도(data 변경 등) 사용자는 다른 일을 할 수 있습니다. 자바스크립트 객체가 특정 데이터(업데이트 등을 할 데이터)를 서버에 주고받고 하여 그 부분만 업데이트합니다.
- 필요한 부분만 별도로 요청, 응답받아 처리합니다. 모든데이터를 업데이트할 필요없어 불필요한 대역폭 감소가 가능하고 비용절감을 가져옵니다.

- 장점 : 사용자에게 더 나은 사용 경험 제공. 속도, 비용 절감
- 단점 : 접근성에는 열악합니다. -> 해결하기 위해 등장 : WAI-ARIA

## AJAX(Asynchronous JavaScript and XML) 
- 브라우저에서 페이지를 이동하지 않고 자바스크립트를 통해 HTTP Request를 보내고 그 응답을 받아 자바스크립트에서 처리할 수 기술.
- 사용자에게 더 나은 사용 경험 제공, 대부분의 웹사이트에서 사용되고 있는 기술

> 서버 설치 : $ npm install http-server -g
> 로컬 서버 연결(서버구동하기) : 
> - $ http-server -o -a localhost -p 8081
> - $ http-server -o
> : http://localhost:8081로 자동으로 띄워줍니다.
> http-server가 설치되어있는지 확인: $ npm list -g http-server 


1) AJAX를 위한 객체 생성
- AJAX 통신을 하기 위한 생성자를 통해 객체를 만듭니다. 여러개를 만들어 동시다발적으로 수행시킬 수 있습니다.
```javascript
var req = new XMLHttpRequest(); // HTTP 요청을 만들 수 있는 새로운 객체를 생성하는 명령
```
2) open 메소드 : setting 구간. 요청의 방식과 url설정
```javascript
req.open("GET", "./data.json"); // http request method와 URL 설정
```
3) send 메소드 : 요청 전송. 통신 시작
```javascript
req.send();
```
4) 응답 확인
- req.response에 저장됨
- 비동기 방식으로 요청하기 때문에 send 메소드 호출 후, 바로 코드에서 접근하면 데이터가 비어 있음
- AJAX의 진행에 따라 호출되는 callback함수를 활용해야 함.

**<브라우저 옵션>** <br>
> --disable-web-security 옵션(크롬속성 > 대상 > chorm.exe뒤에 --disable-web-security추가 > 계속)
> "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir=""
> 브라우저의 보안 정책을 우회하기 위해 사용하는 옵션(AJAX는 서버를 돌려야 하는데 번거로우니 대신 사용)
> same-origin-policy등을 비활성화 함

> 최신 크롬 버전(48 이상?)에서는 --disable-web-security 뒤에 --user-data-dir=c:\users\사용자이름옵션을 추가로 지정해야합니다.
> "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="c:/chromedev"
> 디렉토리 생략하고, ""만 붙여도 된다.


### readyState 속성
- AJAX 요청에 따라 0~4까지 변화함

readyState | 의미
--------|----------
0 | open 메소드 호출 전
1 | open 메소드 호출 후, send 메소드 호출 전
2 | 보낸 요청에 대해 응답 헤더가 수신된 후
3 | 응답의 바디 부분이 수신중일 때
4 | 모든 응답이 수신되었을 때

### onreadystatechange 속성
- readyState가 변할 때마다 호출되는 콜백 함수

### status 속성
- HTTP response의 응답 헤더에 기록된 코드

Response | Code	의미
--------|----------
200 | OK
404 | Not Found
500 | Internal Error
... | ...

### 응답을 정상적으로 수신한 경우
- readyState : 4
- status : 200

### 기타 callback function 활용 가능한 속성
- onloadstart
- onprogress
- onabort
- onerror
- onload
- ontimeout
- onloadend


## JSON : Javascript Object Notification
- 자바스크립트의 객체를 문자열로 표현하는 방법
	- 프로그램간에 전달하기 편리 (서버 -> 브라우저)

### JSON API
- JSON.stringify( object )
	- 인자로 받은 객체를 JSON 문자열로 반환함
- JSON.parse( sring )
	- 인자로 받은 문자열을 Javascript Object로 변경해 반환함
```javascript
var original_obj = { pi:3.14, str:"string" };

var json_str = JSON.stringify( original_obj );
// 반환 문자열 : {"pi":3.14,"str":"string"}

var parsed_obj = JSON.parse( json_str );

console.log( original_obj ); // {pi: 3.14, str: "string"}
console.log( parsed_obj ); // {pi: 3.14, str: "string"}
```
- undefined, function 은 변환되지 않음에 주의!


## AJAX & JASON

### AJAX를 통해 JSON 데이터를 받아옴
```javascript
var req = new XMLHttpRequest();

req.onreadystatechange = function(){
    if( this.readyState == 4 ){
        // ...
    }
}

req.open("GET", JSON_DATA_URL);
req.send();
```

### JSON.parse API를 이용해 받아온 JSON 문자열 데이터를 Javascript 객체로 변환
```javascript
req.onreadystatechange = function(){
    if( this.readyState == 4 ){
        data = JSON.parse(this.response);
        //...
    }
}
```

### 데이터를 처리하는 Javascript 프로그램 실행 (HTML 문서에 반영)
- 데이터가 여러개인 경우 (배열 형태로 값을 받은 경우) 반복문으로 각각의 데이터에 대해 처리
```javascript
for( var i = 0 ; i < data.length ; i++ ){
    document.write(data[i].id, data[i].msg);
}   
```
