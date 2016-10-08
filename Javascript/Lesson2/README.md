# JAVASCRIPT  Lesson 2

## 원시 자료형

### 문자열(String)
- `ES6`(정식명칭 ES2015) backtick문자(`)로 묶으면 템플릿 문자열이 된다.
```javascript
var name = "김영선";
"안녕하세요, " + name + "님";  // "안녕하세요, 김영선님"
`안녕하세요, ${name}님`;  // "안녕하세요, 김영선님"
```

- `ES6`템플릿 문자열 안에서 표현식도 사용할 수 있다.
```javascript
var num = 30;
"인생은 " + (num * 2) + "부터";  // "인생은 60부터"
`인생은 ${num * 2}부터`;  // "인생은 60부터"
```

### 불리언(Boolean)
- true또는 false 라는 값을 가지는 자료형
- 두 값을 비교하거나 어떤 값을 부정(!)하면 불리언 값이 된다.
- 빈문자열(" ")만 false고 그 나머지는  true이다.
- 모든 숫자(음수, 양수) 중에 0(false)만 제외하곤 true이다.
- 숫자 중에서 NaN은 false이다.
- 조건식에서 쓰인다.
```javascript
var num1 = 10, num2 = 20;
num1 < num2;	// true
num1 > num2;	// false
num1 == num2;	// false
!true	// false
!10		// false 
!0		// true

!""		// true
!"0"	// false

!guess	// false
!!guess	// true

![]		// false
+![]	// 0 (+를 붙이면 숫자로 바뀐다.)
+true	// 1
```

### null
- 아무 것도 없이 비어있는 값을 가리킨다.
```javascript
var obj = null;  // obj에는 아무 값도 없다.
```
- 원시 자료형 중 특이하게 typeof 연산자를 사용한 결과가 "object"로 나타난다.

### undefined
- 변수를 선언하고 아무런 값도 할당하지 않을 때의 기본값
```javascript
var name;  // undefined
```

- 직접 할당할 수도 있다.
```javascript
var name = undefined;
```

- 배열을 선언하고 값을 넣지 않으면 undefined가 나온다. 
- 배열에서 공간만 잡아 넣고 값을 채우지 않으면 undefined가 나온다. 
```javascript
- var arr2 = new Array(10);  // 크기가 10인 배열 --> [undefined × 10] undefined가 쭉 10 개 들어있다는 뜻
```
- undefined는 예약어가 아니라서 다른 값을 할당해도 문법 에러가 발생하지 않는다.

### 객체(object)
- 자바스크립트의 모든 값을 `객체처럼` 다루어진다.

> **객체** <br>
> 각 타입마다 고유한 `속성`(프로퍼터: property)과 `실행 동작`(메소드: method)이 있다.

```javascript
var 문자열 = "프론트엔드 갬프";
문자열.length;  // 8
문자열.indexOf('캠프');  // 6
			  		// 0프1론2트3엔4드5 6캠7프(문자 사이사이 index 번호가 있다고 생각한다.)
```

- 각 타입에는 타입의 성격을 정하는 생성자(constructor)가 있다.
- 예를 들어, 앞서 배웠던 숫자는 Number라는 생성자가 있고,
문자열은 String이라는 생성자가 있다.
- 생성자의 이름은 대문자로 시작하는 관례가 있다.
- 각 프로퍼티와 메소드에는 고유한 이름과 값이 있다.
  ![붕어빵틀](../Assets/constructor.jpg)

	> 생성자: 각 타입의 특성을 정한다.<br>
	> 인스턴스(instance): 실제로 사용할 수 있는 값

## 객체 자료형
- 참조 자료형(Reference Type)이라고도 부른다.
- 객체 자료형의 값은 객체의 인스턴스(instance)이다.
- 객체값은 순서가 없는 프로퍼티(peroperty)로 이루어지며, 프로퍼티는 문자열인 이름과 값으로 구성되어 있다.
- new 연산자를 사용해 인스턴스로 만든다.
```javascript
var name = new Object();  // Object는 생성자 이다.
```
- typeof 연산자를 사용하면 대체로 `"object"`가 반환된다. (단, 함수는 "function", 정규표현식 "regexp" 반환)
- 변수에 저장 후 다른 변수로 복사해도 참조(= 연결고리)만 복사되고, 값 자체를 복제하지는 않는다.
따라서, 복사된 값을 변경하면 원래 값도 변경된다.(메모리에서 같은 곳을 가리키기 때문이다.)
```javascript
var obj1 = new Object();
var obj2 = obj1;
obj1;  // Object {}
console.log(obj1);  // Object {}

obj2.name = 'value';
obj2;  // Object {name: "value"}
obj1;  // Object {name: "value"}
```

- 참조타입
```javascript
var arr1 = [10, 20, 30];
arr2 = arr1;

arr2[2] = 100;

console.log(arr1);  // [10, 20, 100]
console.log(arr2);  // [10, 20, 100]

arr2 == arr1;  // true

var arr3 = [10, 20, 30];
arr1 == arr3;  // false --> 메모리에서 가리키는 값이 다르다.
```
	![객체 자료형 참조](../Assets/object.jpg)
	
- instanceof 연산자를 통해 생성자 - 인스턴스의 관계를 알 수 있다.
```javascript
var arr = new Array();
arr instanceof Array  // true --> Array(생성자이름)
```

### 배열(Array)
- Array타입
- 여러 값을 하나의 이름으로 묶어두고 사용할 수 있다.
```javascript
var 장볼거1 = '돼지고기';
var 장볼거2 = '대파';
var 장볼거3 = '당근';
var 장볼거4 = '당면';

var 장볼거 = new Array('돼지고기', '대파', '당근', '당면');
```

- 배열의 각 값을 **원소(element)**라고 부른다.
- 배열의 크기는 .length프로퍼티를 통해 알 수 있다.
```javascript
console.log(장볼거.length);  // 4
```

- 생성자에 숫자를 한 개만 넣으면 배열의 크기가 되지만,
여러 개를 넣으면 배열의 원소가 된다.
```javascript
var arr1 = new Array();  // 크기가 0인 배열
var arr2 = new Array(10);  // 크기가 10인 배열 --> [undefined × 10] undefined가 쭉 10 개 들어있다는 뜻
var arr3 = new Array(10, 20, 30);  // 원소가 3개인 배열
```

- 배열은 리터럴 표현이 있다.
```javascript
var arr4 = [];  // 원소가 없는 배열
var arr5 = [10, 20, 30];  // 원소가 3개인 배열
```

-  각괄호 + 인덱스를 통해 각 원소에 접근할 수 있다.
```javascript
var arr5 = [10, 20, 30];  // 원소가 3개인 배열
arr5[0];  // 10
```
- 각괄호를 통해 특정 위치에 원소를 저장 할 수도 있다.
```javascript
var arr = [10, 20, 30];
arr[1] = 50;  // 10, 50, 30

arr[10] = 100;
arr;  // [10, 50, 30, undefined × 7, 100]
```
- 명시적으로 자리를 만들았던 만들지 않았던 이미 배열은 만들었지만 배열의 범위를 넘어서는 자리를 접근해도 undefined가 나온다.
- 변수는 만들지 않고 접근하면 에러가 나오는데 배열은 안그렇다. 만들지 않은 인덱스에 접근해도 에러는 안나오고 단지 undefined가 나온다. 
<br>
- 리터럴 생성과 원소에 접근할 수 있다.
```javascript
[10, 20, 30][1];  // 20
[1][1];  // undefined
[1][0];  // 1
```
- 활용도가 높은 메소드: [concat( )](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [filter( )](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [forEach( )](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [indexOf( )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), [join( )](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join), [map( )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [pop( )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop), [push( )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push), [reverse( )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse), [shift( )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift), [slice( )](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [sort( )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), [unshift( )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

#### join()
- join()은 배열을 문자열로 만든다.
```javascript
var arr = [10, 20, 30];
arr.join('+');  // "10+20+30" --> join()은 배열을 문자열로 만든다.
arr.length;  // 3
arr;  // [10, 20, 30]
arr.length = 2;  // length에 다른 값을 넣을 수 있다. 그럼 크기가 달라진다.
arr;  // [10, 20]
arr.length = 0; 	
arr;  // []
arr.length = 10;
arr;  // [undefined * 10]
```
#### slice()
- slice (시작index, 마지막index3): 마지막 인덱스 이후부터 잘라낸다. 인덱스는 사이 사이에 있다.
- 마지막 index는 생략할 수 있다.
```javascript
arr = [10, 20, 30, 40, 50];
arr.slice(2, 3);  // [30]	--> slice는 (시작index, 마지막index3): 마지막 인덱스 이후부터 잘라낸다. 인덱스는 사이 사이에 있다.
arr.slice(2, 4);  // [20, 40
arr.slice(2);  // [30, 40, 50] --> 마지막index는 생략할 수 있다.
```

### 오브젝트(Object)  타입
- 객체지향일때의 복잡한 참조타입을 부를때는 객체(소문자 object)  VS  자바스크립트 내의 타입 중 Object(대문자) 타입으로 구분된다.
- 한 그룹으로 묶을 수 있는 값, 각 값에는 고유한 이름이 있다.(배열은 Array타입 각각 원소 지칭하는 번호는 있어도 이름은 없다. )

> new Object([value])

```javascript
var 강사 = new Object();
강사.이름 = "김태곤";
강사.성별 = "남자";
강사.이름  // "김태곤"
```
- 사실, 여기서 각 값은 오브젝트 타입 값의 프로퍼티이다.
- 프로퍼티의 이름을 가리켜 `키(key)`라고 부르고, 프로퍼티의 값을 가리켜 `값(value)`이라고 부른다.
<br>
- 리터럴 표현을 사용하면 객체와 프로퍼티를 동시에 만들 수 있다.
```javascript
var obj = {
	키(key): 값(value),
	newPorperty: "value",
	"property": 123
};
```
- 리터럴 표현에서 키와 값 사이에는 콜론을 두어 구분하고, 키-값 쌍끼리는 쉼표를 구분한다.
- 원칙적으로 모든 키는 문자열이므로 따옴표로 묶어줘야 하지만, **변수 이름 규칙을 따른다면**따옴표를 생략 할 수 있다. 
- 점 문법을 통해 프로퍼티에 접근하고 생성한다.
- 변수 이름 규칙에 어긋나면 점 문법을 사용 못한다.(예: 키이름에 @, 키이름에 공백, 기타등등)
```javascript
var obj = new Object();
obj.newProperty = "value";
obj.newProperty // "value"
```
- 각괄호 문법을 통해서도 프로퍼티에 접근하고 생성할 수 있다.
```javascript
obj["newProperty"] = "value";
obj["newProperty"]  // "value"
```
- delete 연산자를 사용해 프로퍼티를 제거할 수 있다.
```javascript
delete obj.newPorperty1;
delete obj["newProperty2"];
```
- in 연산자를 통해 특정 프로퍼티 이름이 객체에 존재하는지 확인 할 수 있다.
```javascript
"propertyName" in Obj  // ture or false
```
- 활용도가 높은 메소드: 'ES6' [Object.assign( )](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign),  [Object.create( )](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create), [Object.defineProperty( )](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), [Object.defineProperties( )](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), [Object.keys( )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), [hasOwnProperty( )](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) 
```javascript
var obj = { "number": 123 };
/* in 연산자는 내가 직접 넣었는지 안넣었는지 모른다. 있으면 있는가 보다가 in이다. */
"hasOwnProperty" in obj;  // ture --> obj에는 기본적으로 hasOwnProperty를 가지고 있다.
"number" in obj  // ture

/* hasOwnProperty()는 내가 직접 집어 넣은 것만 찾는다. */
obj.hasOwnProperty("number")  //  ture
obj.hasOwnProperty("hasOwnProperty")  // false
```
- 사실, 자바스크립트의 모든 객체는 Object타입이기도 하다.
- 동시에 각각의 고유의 타입니다.

> **object instanceof constructor**
> object : 테스트 대상인 오브젝트, constructor: 테스트할 함수

```javascript
[] instanceof Array  // true --> Array는
[] instanceof Object  // true
(function(){}) instanceof Object  // true
```
```javascript
var arr = [1, 2, 3];
arr["안녕"] = "하세요";
arr  // [1, 2, 3]
arr.안녕  // "하세요"
```