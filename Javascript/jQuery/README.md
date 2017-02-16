# Javascript & jQuery UI개발 기법

- 강사 : 이시영
- 강의자료 : [http://edu.dinoworks.kr](http://edu.dinoworks.kr)
- 실습자료 : [http://edu2.dinoworks.kr/](http://edu2.dinoworks.kr/)
디노짜드학교

## Javascript
- 동작하는 것.
- 비표준언어에서 쓰기 불편한다.
- 크로스브라우징의 문제가 좀 있다.

### 객체(Instance)
- 인스턴스.프로퍼티 : 객체.속성값(값을 나타내는 것이 프로퍼티이다.)
```
예) 영선.연봉 --> 값 5,000
```
    
- 인스턴스.함수() : 객체.동작() 
```
예) 영선.동작() --> Action
```

### javaScript출력
- alert box 출력 : window.alert()
    - Browser Object Model
    - window객체는 생략 가능.
- 브라우저 콘솔(console) 출력 : console.log()
    - 콘솔은 개발자를 위한 창.
- HTML 문서 출력 : document.write()
- HTML 요소(element) 내부 출력 : innerHTML()

### 변수(Variables)
- 데이터 값을 저장하는 공간(어떤 참조할 방을 만드는 것)
- 방을 만들고 데이터를 넣는다.
```js
var x = 5; //이름이 x라는 방을 만들고 5라는 값을 집어넣는다.
var y = 6;
var total = x + y;
```
#### 식별자(identifiers)
- 문자, 숫자, _(underscore), $(dollar sign)만 포함
- 문자나 _, $로 시작
- 예약어(reserved words)는 사용할 수 없다.

#### 할당 연산자(=) 
- 대입하는 것.
- 같다의 의미는 ==로 사용
```js
var x = 5;
var y = '영선';
var anwer = x + y; // 5영선
```

### 연산자(Operators)
```js
var a = 3;
alert(a++); // 4
alert(a--); // 2
alert(a); // 2 (마지막에 저장된 a값이 온다.)
```
- 산술 연산자 (Arithmetic Operators)
: +, -, *, /, %, ++, --

-  할당연산자(Assignment Operators)
: =, +=, -=, *=, /=, %=
```js
var a = 4;
a = a + 2;  ===  a += 2;
```
-  문자열 연산자 (String Operators)
: +, +=

- 비교 및 논리 연산자 (Comparison and Logical Operators)
: ==(값만비교), ===(값과 데이터타입까지 비교), !=, !==(값과 데이터타입까지 비교), >, <, >=, <=

### 데이터형태
- 숫자, 문자열 등 다양한 형태의 값 대입 가능.
- 따옴표안에 내용이 없으면 변수로 인식한다.

### 데이터 타입
- 문자
- 숫자
- 배열(Array): for문에서 많이 사용.
```js
var a = [1, "test", "32"];  //a라는 집하나에 방이 세개있는 것.[index]
alert(a[2]); // "test"
```
- 객체
```js
var x = {방이름1 : "John", 방이름2: "Doe"}; // 객체의 특징은 방이름이 이미 지정되어 있음.
alert(x.방이름1); // John
```
- 블리언

### 함수
- 특정 기능을 수행하기 위해 설게된 코드 블록
- 호출된 경우에만 실행
- 함수는 아무곳에나 정의해 놓아도 상관없다. 실행할때만 불러오기 때문에
```js
var x = myFunction(4, 3);   // Function is called, return value will end up in x
function myFunction(a, b) {
 return a * b;  // Function returns the product of a and b
}
```
### Scope
- 전역변수
    - 함수 외부에서 선언된 변수로 웹 페이지에 존재하는 모든 스크립트와 함수에서 접근 가능. 
    - 다른파일에서도 읽힌다. 
    - 같은 변수를 쓰기 때문에 다른 함수와 충돌 가능..
- 자동 전역번수
- 지역변수: 함수 안에서만 접근 가능하기때문에 충돌 불가능하다.

### JavaScript Core(제어문)

#### if, else, else if
```js
if (time < 10) {
 greeting = "Good morning";
} else if (time < 20) {
 greeting = "Good day";
} else {
 greeting = "Good evening";
}
```
- 삼항식
    - syntax) 조건 ? 참 : 거짓 ;

#### switch, case
break가 없으면 다 실행된다.
```js
switch (new Date().getDay()) {
 case 6:
 text = "Today is Saturday";
 break;
 case 0:
 text = "Today is Sunday";
 break;
 default:
 text = "Looking forward to the Weekend";
}
```

#### for
```js
var text = ""; // 문자열로 초기화 한다.
for (var i = 0; i < 5; i++) {  // for(초기값 ; 종료되는 조건 ; 증감)
text += "The number is " + i + "<br>";
// The number is 0<br>The number is 1<br>The number is 2<br>The number is 3<br>The number is 4<br>
}
```

#### Do / While
- 일단 한번은 실행한다, 저질르고 보는것
```js
var text = "";
do {
 text += "The number is " + i;
 i++;
}
while (i < 10);
```

### JavaScript BOM(Browser Object Model)
- 브라우저를 컨트롤 하는 것.

### JavaScript DOM(Document Object Model)
- 문서를 직접 컨트롤 하는 것.(HTML/CSS)


## jQuery

### Event
- 이벤트 흐름
- 이벤트 핸들러
- 이벤트 객체
- 이벤트 타입

#### 이벤트 흐름
- 이벤트 버블링(Bubbling)
- 이벤트 캡쳐링(Capturing)

#### 이벤트 핸들러
- HTML 이벤트 핸들러
- DOM레벨 0이벤트 핸들러
- ture:왼쪽이 실행(캡쳐링), false: 오른쪽이 실행(버블링)
- 고르고 이벤트를 줌.
- 이벤트 객체

#### 이벤트 객체
- e: 이벤트 자체 동작(많이 사용)
- event: 이벤트 자체 동작

#### 이벤트 타입
##### UI 이벤트
- load
- scroll: 스크롤바가 움직이는 모든 이벤트

##### Focus 이벤트
- blur: 요소가 포커스를 잃을 때 발생. 이 이벤트는 버블링 되지 않음(모든 브라우저 지원)
- focus: 요소가 포커스를 받을 때 발생. 이 이벤트는 버블링 되지 않음(모든 브라우저 지원)
- focusin: 요소가 포커스를 받을 때 발생. HTML 이벤트 focus의 버블링 버전(실무에서 많이 씀)
- focusout: 요소가 포커스를 잃을 때 발생. HTML 이벤트 blur의 버블링 버전(실무에서 많이 씀)

##### HTML5 이벤트
- contextmenu
컨텍스트 메뉴가 표시되려는 순간에 발생. 버블링되어 document 이벤트 핸들러 하나만 할당해서 페이지에서 발생하는 contextmenu 이벤트를 모두 처리 가능. (마우스 이벤트로 간주) - 예: 네이버 메일의 자체 마우스 오른쪽 메뉴

##### 장치 이벤트(모바일)
- orientationchange 
    - 사용자가 장치를 가로 모드나 세로 모드로 바꿀 때 발생 
- deviceorientation 
    - 가속도계가 부착된 장치에서 관련 있는 동작을 감지했을 때 window에서 발생 
    - x, y, z 축의 변화 정도(각도)를 감지(기계의 자세를 알수 있다.)
- devicemotion 
    - 장치가 실제로 움직이고 있을 때 발생 장치가 떨어지고 있거나 누군가가
    - 장치를 걷고 있는지 판단할 때 유용 
    - x, y, z 축의 가속도를 감지(중력 감안여부 선택 가능)
    - 기계의 가속도를 알 수 있다.(뛰거나 걷거나)

##### 터치와 제스처 이벤트(모바일)
- touchstart 
    - 손가락으로 화면을 터치할 때 발생. 이미 다른 손가락을 화면에 대고 있어도 다른 손가락을 대면 또 발생 
- touchmove 
    - 손가락을 화면에서 움직일 때 계속 발생. 
    - 이 이벤트가 일어나는 동안 preventDefault()를 호출하면 스크롤을 막을 수 있음. 
- touchend 
    - 손가락을 화면에서 뗄 때 발생. 
- touchcancel 
    - 시스템에서 터치를 더 이상 추적하지 않을 때 발생. (명확하게 문서화되지는 않음) 
- gesturestart 
    - 한 손가락을 화면에 얹은 채 다른 손가락으로 화면을 터치할 때 발생. 
- gesturechange 
    - 화면에서 두 손가락 중 하나의 위치가 바뀔 때 발생. 
- gestureend 
    - 두 손가락 중 하나를 화면에서 뗄 때 발생.
 

## jQuery (두번째 시간)

### jQuery기초
#### jQuery 개요
```js
$(document).ready(function(){
    $("p").click(function(){
        $(this).hide(); // 여러개의 p중 지금 내가 누른 p만(this) 동작해라..
    });
});
```
#### jQuery 기능
- jQuery이외의 다른 플러그인은 왼만하면 쓰지마라. 설계를 못한다.

#### jQuery 설치
- ie8이하는 1.대 버전, ie9이상은 3.대 버전

#### jQuery 문법
- 기본문법: $(selector).action() ---> 주어.동사
- `$` 표시는 jQuery를 정의하고 접근하게 하는 문자
- `(selector)`는 HTML 요소를 선택하기 위한 요소로 CSS 선택자 문법과 동일
```js
$(this).hide();
$("p").hide();
$(".test").hide();
$("#test").hide().css({‘display’ : ’none’}); // chaining
```
> ※ this: 지금 10개의 p에다 이벤트를 붙여 놓았는데 this는 대상의 전체 이벤트중에 클릭한 요소를 this라 한다.

#### jQuery 선택자(Selctor)
- 문자열이다.
`$('h1');`
- li.eq(3): li중에 네번째 index선택


### Event
#### jQuery 이벤트(일부)
- $('')는 객체이다.--> 한개일수도 있고 여려개일 수도 있다.
- 인스턴스(객체)는 어떤 사물이라 생각해라.
- 인스턴스.프로퍼티 : 객체.연봉 --> 값 5,000 (값을 나타내는 것이 프로퍼티이다.)
- 인스턴스.함수() : 객체.동작() --> Action이다(너는 이거해)
- 객체를 설계할때 각자의 인스턴스를 this라 한다.
- $('').on( 파라미터, [파라미터], [파라미터] )
    - 파라미터(매개변수)에는 아래의 네가지가 들어간다.
        - 숫자: 0, 1000
        - 문자열: 'click' 'on hide'
        - 객체: {'font-size': '12px', 'border': '1px solid red'}
        - 함수: function(){ }

#### 메소드
- .on( '이벤트 종류', 이벤트 동작() ): 이벤트를 붙여주는 메소드     
- .off( '이벤트 종류' ): 이벤트를 떼어네는 메소드(이벤트가 일어나지 않는다.)
- .css({객체}): 스타일을 붙이는 메소드
    - 숫자든 문자든 css를 삽입하고자 하면 ''를 습관하여 구분한다.
```js
$('p').click(function(){
    alert('This is a paragraph');
});
$('p').on('mouseenter focus', function(){
    $(this).css({ 'background-color' : 'red', 'border' : '3px solid blue' });
});
```

#### jQuery GET(가져오는 것)
- 끍어온 데이터(액션한 결과)를 리턴이라 한다.
- text() : 선택한 요소의 텍스트 콘텐츠를 리턴하거나 설정 
- html() : 선택한 요소의 HTML 콘텐츠를 리턴하거나 설정 
- val() : Form 요소의 값(value)를 리턴하거나 설정 
- attr() : 선택한 요소의 값을 리턴하거나 설정


#### jQuery SET(설정하는 것)
- 기존 내용을 들어내고 내가 쓴 내용을 넣는 것.
- attr(): 클래스도 변경할 수 있다. 클래스를 골라서 새로 변경하는 것. 다시쓰는 개념
```js
attr({'class': 'on'})
```

#### jQuery ADD
- append(): 선택된 자식요소의 가장 뒤쪽부터 하나씩 삽입
- prepend(): 선택된 자식요소의 앞쪽부터 하나씩 삽입
- after() : 선택된 요소의 바로 뒤(형제요소)에 콘텐츠 삽입
- before(): 선택된 요소의 바로 앞(형제요소)에 콘텐츠 삽입

#### jQuery Remove
- remove(): 쓰레통과 쓰레기까지 비워와
- empty(): 쓰레기만 비워와

##### jQuery CSS Classes(Classes는 속성이다)
- addClass('on'): 클래스의 값을 추가
- removeClass('on'): 클래스 값을 빼줘
- toggleClass('on'): 넣다 뺐다.(꺼졌다 켜졌다)
- css():
    - syntax) $('').css({'속성명':'속성값',['속성명':'속성값']});


#### jQuery Dimension Methods
- 폭과 높이 구하는 것(리턴개념), 블록요소에만 적용
- width(): 컨텐츠 영역에 폭만 가져옴
- height(): 
- innerWidth() : 패팅영역까지
- innerHeight()
- outerWidth():
- outerHeight(): 보더까지(ture를 써주면 마진까지)
    - blean은 값이기 때문에 따옴표를 붙이지 않는다.

#### DOM 트리 탐색
- parent(): 선택한 요소의 부모를 고르는 것
    - this.parent(): 
- find(): 선택한 요소의 자손요소을 고르는 것
- next(): 선택한 요소의 다음에 오는 형제요소를 고르는 것
- prev(): 선택한 요소의 앞에 오는 형제요소를 고르는 것
- eq(): index를 

#### jQuery Animation
- 변화시킬 css 속성, 속도(ms), 종료 후 호출내용(callback 함수)에 대한 설정 가능
- animate(속성, 시간, [함수()]): css가 a에서 b로 바뀌는 것(기본값이 500(0.5초)이다.)
```js
$('button').click(function(){ 
    $('div.animation').animate({'left':'500px'}, 3000, function(){ 
        alert('Animation is finished'); 
    }); // 3000는 3초(밀리세컨드 단위), 마지막 함수(동작)는 끝나면 실행하는 것이다. 
});
```
- 연속된 애니메이션(Chaining)
```js
$('button').click(function(){
    $('div.animation').animate({'left':'500px'}, 3000).animate({'left':0}, 1000);
});
```
- 애니메이션의 정지
.stop():

#### 기타 Method
- .index(): 이미지가 여러개 있을때 동작하는 것이 몇번째것인지 알아내는 것(지금 클릭한 몇번재 요소)
    - 0부터 시작된다.

    ```js
    $('ul li a').on('click', function(){
        var index = $('ul li').index($(this).parent()); 
        // index이기때문에 변수에 숫자가 저장된다.
        // $(this)는 지금 내가 선택한 $('ul li a')이다.
        // parent()는 this의 부모요소의 $('ul li')이다.
        alert(index);
    });

    ```  
- this: 여러개의 요소 중 지금 내가 누른 요소(this)만 동작해라.
- .each(): 반복문. 여러개를 선택한 다음에 각각의 것을 순환 

- click은 focus를 고려 안해도됨.
- mouseenter는 focus고려.


