###### Day01

# JAVASCRIPT

##변수(Variables)
변수는 값이 바뀔 수 있다.

- `var + 공백 + 변수이름`형태로 선언한다.
```javascript
var num;
```

- `변수이름 = 값`형태로 값을 할당한다.
```javascript
num = 1;
```

- 선언과 할당을 동시에 할 수도 있다.
```javascript
var num = 1;
```

- 쉼표로 구분하면 여러 변수를 선언할 수도 있다.
```javascript
var num = 1, num2 = 2;
```

- 변수의 값을 다른 변수에 할당할 수 있다.
```javascript
var num = 1, num2 = 2;

num = num2;
console.log(num); // 2
```

- 변수 이름은 $, _를 제외한 공백, 특수 문자, 구두점을 사용할 수 없다. 숫자로 시작할 수 없다. 유니코드 문자도 사용 가능하지만 예약어는 사용할 수 없다.
[변수사용규칙](https//developer.mozilla.org/en-US/Web/JavaScript/Reference/Lexical_grammar)

- 선언되어 있지 않은 변수 이름에 var 키워드 없이 값을 할당하면 전역 변수가 된다.

## 자료형(Data Types)
- 원시 자료형(Primitive Types): 숫자, 문자열, 불리언, null, undefined
- 객체 자료형(Object Types): 배열, 오브젝트, 날짜 객체, `함수` 등 원시 자료형을 제외한 전부.

> **함수** <br>
> In JavaScipt, functions are first-class citizens.<br>
> 자바스크립트에서 함수는 1급 객체이다.<br>
> `= 함수도 다른 자료형처럼 할당, 저장 복사가 가능하다.`

### 원시 자료형
- 해당하는 `리터럴(literal)` 표현이 있다.
> **리터럴** <br>
> 소스 코드에서 고정된 값을 표현할 때 사용. <br>
> ex) 1, ture, "이름"

- 다른 언어의 원시 자료형과 비슷하지만, 자바스크립트는 모든 값을 객체처럼 다루므로 원시 자료형에도 프로퍼티와 메소드가 존재하는 것처럼 보인다.
```javascript
"Hello, world".length; // 12
```
- 원시 자료형이 저장된 변수를 다른 변수에 할당하면 값 자체가 복사되고 복사된 변수를 변경해도 원래 변수는 변하지 않는다.
```javascript
var color1 = "green";
var color2 = color1;
color2 = "blue";
```
**Variable Object**

Variable | Value
-------|-------
color1 | "green"
color2 | "blue"

- typeof 연산자를 사용해서 타입을 확인하기 쉽다.
```javascript
typeof "Hello, world" // "string"
typeof 100 // "number"
typeof undefined // "undefined"
typeof false // boolean"
typeof null // "object" -> 자바스트립트 설계한 사람들의 실수
```

- 원시 자료형이지만 각 자료형을 표현하는 생성자가 있다.
String, Number, Boolean

####  1. 숫자(Number)
- 정수, 실수 등을 표현하는 원시타입
- 리터럴로 표현하는 숫자는 10진수가 기본이나 8진수 16진수 형태도 표현할 수 있다.
	- 10진수:  10이되면 한자리가 올라간다.
	- 16진수:
	 0x라고 붙이면 16진수 숫자라고 인식하다.
	한자리가 15가 표현된고 16이되면 한자리가 올라간다.(대소문자 구분안한다.)
	1~9 A(10)~F(15)
	- 8진수: 
	8진수는 앞에 0을 붙인다.
	첫번째(한자리) 자리가 1~7까지 쓸 수 있다. 
	8이되면 한자리가 올라간다.
```
1234   123.4   0.81   .5   // 10진수
0xFF	// 16진수 -> (15*16)+(15*1)=255
0x1F	// 16진수 -> (1*16)+(15*1)=31
017 // 8진수 -> (1*8)+(7*1)=15
```
- 숫자 자료형에는 NaN(Not a Number)도 있다.
- NaN은 isNaN( )함수를 통해 확인한다.
```javascript
isNaN(NaN);	//ture
```
- 연산자
	- 사칙연산(+, -, *, /) 
	- 나머지 연산(%): 홀수, 짝수 체크할때, 일정한 구간에서 반복될 때 
	- 증감 연산(++, --)
	- 비트연산(&, |, ^, ~, >>, <<,  >>>): 컴퓨터의 1비트는 1과 0이다. 2진수 레밸에서 숫자를 다룬다. 
	- 단항 연산자(+, -)
	- 각 연산에 사용되는 기호(+, -, *, %, ++등)를 가리켜 `연산자(operator)`라고 한다.
	- 수학에서 곱하기/나누기나 더하기/빼기에 우선하듯 연산자 사이에 **[우선 순위(precedence)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)**가 존재한다.

####  2. 문자열(String)
- 0개 이상 연속된 문자 집합을 표현하는 원시 타입
- 따옴표 또는 작은 따옴표로 묶은 연속된 문자
```javascript
"Hello, world"  "문자열"  '작은 따옴표'
```

- `[ ]`연산자로 특정 인덱스의 글자만 가져올 수 있다.
```javascript
"Hello, world"[1] // "e"
"문자열"[0] // "문"
```

- `+`연산자로 문자열 두 개를 연결할 수 있다.
```javascript
"Hello, world" + "는 문자열" // "Hello, world는 문자열"
```
- 사실, 문자열 외에 다른 자료형도 연결할 수 있다.
- 다른 값을 문자열로 변활할 때는 String생성자를 사용하거나 빈 문자열(" ")과 더하면 된다.
```javascript
String(30)		 // "30"
"" + 30			 // "30"
"숫자" + 7		// "숫자7"
"숫자" + 7 * 3	// "숫자21" (연산자 +는 연산자 *보다 우선순위가 뒤다.)

"숫자" + 7 + 3	// "숫자73" 

/*
"숫자" + 7 + 3 
(우선순위가 똑같은 연산자가 똑같은 형태로 나타나면 먼저 나타난게 먼저 계산된다. 똑같은 연산자는 왼쪽부터 계산된다.)
--> "숫자 7" + 3
--> "숫자 73"
*/
```

- 문자열을 숫자로 바꿀 때는 `parseInt`(정수) 또는 `paseFloat`(실수)함수를 사용하거나 `단항 연산자(+, -)`를 사용한다.
	- parseInt는 문자열의 첫번째 자리가 숫자면 숫자가 아닐때까지만 인식한다. 첫번째 숫자 뒤에 오는 문자나 문자 뒤에 숫자가 나와도 무시한다.
	- 단항 연산자 뒤에는 완벽한 숫자가 와야한다. 문자가 있으면 NaN이다.
```javascript
parseInt("30")	// 30
parseInt("30", 16)	// 48 ("30", 진법(16진수)) --> (1*16)+(0*1)=48
parseInt("30a")	// 30
parseInt("a30")	// NaN
parseInt("30.5")	// 30
parseFloat("30.5")	// 30.5
+"30"	// 30
+"30.5"	// 30.5
+"30a"	// NaN
-"30"	// -30
```

- 활용도가 높은 메서드 :  [charAt( )](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/charAt), [charCodeAt( )](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt), [replace( )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace), [indexOf( )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf), [lastIndexOf( )](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf), [search( )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search), [slice( )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice), [split( )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split), [substr( )](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substr), [substring( )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring), [trim( )](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/trim), [String.fromCharCode( )](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
> 구글검색 : Javascript MDN string 함수이름

- 활용도가 높은 이스케이프 문자:  \r(windows 줄바꿈), \n(줄바꿈), \t(탭), \xNN, \uNNN
```javascript
"안녕\"하세요"	// "안녕"하세요"
'안녕\'하세요'	// "안녕'하세요"
'안녕"하세요'	// "안녕"하세요"
'I\'m a boy'  // "I'm a body"
```
