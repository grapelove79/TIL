# JAVASCRIPT  Lesson 3

## 내장 객체(Built-in Objects)

- Math: 수학 관련 기능을 포함한다.
- JSON: JSON 문자열을 만들거나 해석한다.
- Date: 날짜와 시간을 다룬다.
- RegExp: 정규 표현식을 만들고 실행한다.

### Math
- 인스턴스를 만들지 않는다.
- 자주 사용하는 상수(항상 고정되어 이미 정해져 있는 값): Math.PI
- 자주 사용하는 메소드: Math.sin( ), Math.cos( ), Math.tan( ), Math.ceil( ): 소숫점 아래 0.0001만 있어도 정수 하나를 올림,
Math.round( ): 반올림, Math.floor( ): 내림(소숫점 이하는 무조건 버리는 것), Math.max( ): 여러개의 인수 전달하면 그중 가장 큰 값을 반환한다, Math.min( ): 가장 작을 값을 반환한다, Math.pow( ): 어떤 숫자의 제곱을 구할때, Math.random( ): 0~1까지의 random한 숫자를 실수로 반환한다.
```javascript
// Math.random(): 범위 0~1까지의 실수를 반환
// 연습 1: 최댓값과 최솟값을 인수로 전달하면 랜덤한 수를 반환하는 함수
function rand(min, max){
	// 0-1 곱하기 3(구간의 크기)을 해주면 원래 반환하는 값의 범위를 3배로 늘린 것(0~3까지). 
	// min은 원래 구간의 최솟값을 이동한다.
	return Math.random() * (max - min) + min; 
}
var young = rand(1, 2);
console.log(young);  

/**
 * ----------------------------------------------------------
 * 연습 2: 최댓값, 최솟값, 소숫점 자리수를 전달하면 랜덤한 수를 반환하는 함수.
 * 예) fn(5, 10, 2) // 5부터 10까지 무작위 실수. 소숫점 둘째자리 
 * ----------------------------------------------------------
 * 자바스크립트에서는 정수까지는 다룰 수 있지만, 소숫점자리수 구하는 함수는 제공되지 않는다. 
 * 하지만 정수와 소숫점을 분리하는 방법은 있다. 
 * 예) 3.1456을 소숫점 둘째자리에서 반올림해서 3.15나오게 한다.
 * 1. 3.1456를 곱하기(*)100을 해주면 소숫점이 314.56가 된다.
 * 2. 그렇게 해서 Math.round()반올림을 한다. 그럼 315가 된다.
 * 3. 그리고 아까 곱했던(*)100을 다시 나누기(/)100을 해준다.
 * 원리) 먼저 내가 다루기 좋은 수로 바꿔놓은 다음에 처리를 하고 다시 원래대로 돌려준다. 
 *      곱했던 100을 다시 나누기 100으로 해주는 것이다. 그 중간에 정수부분만 처리 할 수 있도록 한다.
 * ---------------------------------------------------------- */
function rand2(min, max, 수숫점자리수) {
	var 중간결과 = Math.random() * (max - min) + min;
	var 곱할값 = Math.pow(10, 수숫점자리수);
	return Math.round(중간결과 * 곱할값) / 곱할값; //round는 반올림이다.
}
var result = rand2(5, 10, 2);
console.log(result);
```

### [Date](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)
- 날짜와 시간을 다루는 객체
- 기본 단위는 ms(1/1000초)이다.
- 사용자 시스템의 시간을 기준으로 한다.
- RFC2822 또는 ISO 8601의 시간 포맷 문자열을 다룰 수 있다.
```javascript
var birthday = new Date('1995-12-17T03:24:00');
```
- 아무런 인수없이 인스턴스를 만들면 현재 시각을 표현한다.(오늘날짜, 현재시간)
```javascript
var nowDate = new Date(); // 바뀌는 시간이 아니다. 인스턴스를 만들었던 그 시각을 표현한다.
```
- *FullYear( ): 년도, *Month( ): 월(0부터 시작한다.), *Date( ): 며칠(1~30일), *Hours( ): 시간, *Minutes( ): 분, *Seconds( ): 초, *Milliseconds( ) 각 시간 컴포넌트별 메소드 존재. ( `*` 에는 get 또는 set이 들어간다.)

> set: 값을 설정(수정)한다. <br>
> get: 값을 가져온다.

```javascript
var nowDate=new Date();

// *Year()
nowDate.getYear();  // 116(2000년 이전에 년도를 표현할때 2자리로 표현했다.)
nowDate.getFullYear();  // 2016

// *Month()
nowDate.getMonth();  // 9 (월만 0부터 시작하기 때문에 주의 해야한다.)
```
#### *Day( )
요일을 구하거나 설정( 0(일요일)~6(토요일)까지의 숫자로 반환)
```javascript
// 연습: 날짜를 인수로 전달하면 요일을 한국어로 반환하는 함수
var 날짜 = new Date();

// 방법1
function 요일1(날짜){
	var 요일인덱스 = 날짜.getDay();
	console.log(요일인덱스);
	var 요일이름 = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

	return 요일이름[요일인덱스];
} 

var result = 요일1(날짜);
console.log(result);


// 방법2
function 요일2(날짜){
	var 요일인덱스 = 날짜.getDay();

	return ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'][요일인덱스];
}

var result = 요일2(날짜);
console.log(result);


// 방법3
function 요일3(날짜){
	var 요일인덱스 = 날짜.getDay();

	return ['일', '월', '화', '수', '목', '금', '토'][요일인덱스] + '요일';
}

var result = 요일3(날짜);
console.log(result);

// 방법4
function 요일4(날짜){
	var 요일인덱스 = 날짜.getDay();

	return '일월화수목금토'[요일인덱스] + '요일';
}

var result = 요일4(날짜);
console.log(result);
```
#### * UTC *( ) 
- 세계 표준시 기준 시간 메소드
- 다국어 웹사이트를 만들때 세계 어디서 접속할지 모르기 때문에 접속한 사람마다 시간에 맞춰 보여줘야 할때 UTC를 활용해서 사용한다.
-  서버에서 나한테 준 시간 그리고 이 시간을 다시 세계표준시 기간으로 맞춰서 세계표준시고, 그기고 그 나라 사람, 그 사람이 사는 시간대에 맞춰서 시간을 표시해 줘야 한다.
```javascript
var nowDate = new Date();
var nowUTC = nowDate.getUTCHours();
```

#### getTimezoneOffset( ) 
- 세계 표준시와 지역시(우리가 사는 이 시간대)의 차이(분 단위)
```javascript
var nowDate = new Date();
var nowUTC = nowDate.getTimezoneOffset( ) // -540(9시간)
```

### JSON
- JSON(JavaScript Object Notation)은 자바스크립트에서 객체를 표현하는 형식으로 데이터를 표현한 것. 다른 방식에 비해 가볍고 JS와 호환성이 높아 널리 사용된다.
- 그 밖의 JSON 정보는 [http://json.org](http://json.org)참고
- Math와 마찬가지로 인스턴스를 만들지 않는다.

#### JSON.parse( )
- JSON 문자열을 자바스크립트 객체로 변환

#### JSON.stringify( )
- JS 객체를 JSON 문자열로 변환
```javascript
var obj = {
	이름: "홍길동",
	나이: "30",
	소속: "없음"
}
obj;  // Object {이름: "김영선", 소속: "없음", 나이: "30"}

var json = JSON.stringify(obj);  
json;  // "{"이름":"김영선","소속":"없음","나이":"30"}"

JSON.parse(json);  // Object {이름: "김영선", 소속: "없음", 나이: "30"}
var info = JSON.parse(json);
info.이름;  // "김영선"
```

### RegExp (정규표현식)
- 정규표현식:  특정한 규칙을 가진 문자열의 집합을 표현. `정규식`이라고 줄여서 표현하기도 한다. 영어로는 `Regular Expression`, `Regex`, `RegExp` 등으로 표현한다.
- 널리 사용되는 형식은 `POSIX`와 `PCRE`(Perl Compatible Regular Expressions) 이다.

> **PCRE**: JS에서는 PCRE의 일부만 지원

- 생성자에 정규표현식 문자열과 플래그(modifier)를 전달한다.
```javascript
var regex = new RegExp('ab+c', 'i');
```

- 정규식을 슬래시로 감싸는 리터럴 형식도 지원한다.
```javascript
var regex = /ab+c/i;
```

- **test(문자열)**: 문자열이 정규식에 일치하는지 확인. 일치하면 true
```javascript
/ab+c/i.test("abc")
```

- **exec(문자열)**: 일치하는 부분의 정보를 반환. 없으면 null
```javascript
/a(bc)/i.exec("abc")
```

![closure](../Assets/regexp.png)
- **패턴(pattern)**
	- 특수 문자를 제외하면 모두 문자 그대로를 찾는다.
	예를 들어 /ab/는 "ab"라는 문자열을 찾는다.
	- 괄호로 묶으면 서브 패턴(subpattern)이 되어 `exec()`가 반환한 객체에서 인덱스를 통해 접근할 수 있음.
	- 서브 패턴의 인덱스 번호는 여는 괄호가 출현한 순서대로 매겨짐.
	- `test()` 실행 후 `RegExp.$1 ~ $9`를 사용해 서브 패턴 접근 가능.
	- 수량자(quantifier)
		- {n1, n2}: 앞에 나온 패턴을 n1개부터 n2개까지 매칭.
		- +: 1개 이상 {1, }와 같다.
		- *: 0개 이상 {0, }와 같다.
		- ?: 0개 또는 1개 {0, 1}과 같다.
	- 문자 패턴:  일치할 문자를 정한다. 예를 들어`[abc]`라고 쓰면 'a' 또는 'b' 또는 'c'라는 의미이다. 패터 가장 앞에 ^를 사용하면 일치하지 않는 문자를 찾는다. `[^abc]`는 a, b, c가 아닌 문자에 일치
- **변경자(modifier)**
	- i (ignore case) 대소문자 구분 안함
	- g (global) 일치하는 패터 모두 찾음
	- m (multiline) 문자열을 여러 줄에 걸쳐 검색
- [정규표현식 패턴사이트](http://regexr.com/)

