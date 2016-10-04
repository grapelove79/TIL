# AngularJs

## first_app : This Month's Bestsellers App

- [코드카데미](https://www.codecademy.com) Lesson 1. Your First App 공부 후 github에 정리하기
- [결과물 바로가기](https://grapelove79.github.io/TIL/AngularJS/01_first_app/index.html)

### 1, 2 Hello AngularJsI
####1) js/app.js

```js
var app = angular.module("myApp",[]);
```
- created a new module named myApp. 
**A module contains the different components of an AngularJS app.**

#### 2) index.html

```html
<body ng-app="myApp">

<!-- Modules -->
<script src="js/app.js"></script>

<!-- Controllers -->
<script src="js/controllers/MainController.js"></script>
```
- added `<body ng-app="myApp">`. 
The ng-app is called a directive. It tells AngularJS that the `myApp` module will live within the `<body>` element, termed the application's scope. 
In other words, **we used the `ng-app` directive to define the application scope.**

#### 3) js/controllers/MainController.js
```javascript
app.controller('MainController', ['$scope', function($scope) {
  $scope.title = "Best Sellers in Books";
  $scope.promo = "Discover Our's Most Popular Books";;
}]);
```
- created a new controller named `MainController`. 
A controller manages the app's data. Here we use the property `title` to store a string, and attach it to `$scope`.

#### 4) index.html
```html
<div class="main" ng-controller="MainController">
	<div class="container">
	
		<h1>{{ title }}</h1> <!-- expression -->
		<h2>{{ promo }}</h2>
		
	</div>
</div>
```
- we added `<div class="main" ng-controller="MainController">`. Like` ng-app`, `ng-controller` is a directive that defines the controller `scope`. This means that properties attached to $scope in `MainController` become available to use within `<div class="main">`.

- Inside `<div class="main">` we accessed `$scope.title` using` {{ title }}`. **This is called an expression. Expressions are used to display values on the page**.

- The value of `title` showed up when we viewed the app in the browser.

- Both the controller `MainController` and the view index.html have access to `$scope`. This means we can use `$scope` to communicate between the controller and the view. In the controller, change the value of title to your own string.

### 3.  Workflow
So far this is our typical workflow when making an AngularJS app:

1. Create a module, and use ng-app in the view to define the application scope.
1. Create a controller, and use ng-controller in the view to define the controller scope.
1. Add data to $scope in the controller so they can be displayed with expressions in the view.

###4.  FilterI
```html
<p class="title">{{ product.name | uppercase }}</p> <!-- 대문자로 -->
<p class="price">{{ product.price | currency }}</p> <!-- $, 소숫점 두자리 -->
<p class="date">{{ product.pubdate | date}} </p> <!-- 날짜표현 -->
```
- Converts string to `uppercase`.
- Formats a number as a `currency` (ie $1,234.56). When no currency symbol is provided, default symbol for current locale is used.
- Formats `date` to a string based on the requested format.
- [more built-in filters 더보기](https://docs.angularjs.org/api/ng/filter)

###5.  FilterII
The product price changed from a number to a formatted currency.
1. AngularJS gets the value of `product.price`.
It sends this number into the `currency` filter. The pipe symbol (`|`) takes the output on the left and "pipes" it to the right.
1. The filter outputs a formatted currency with the dollar sign and the correct decimal places.
1. In this way, filters help to separate the content in the controller from its presentation in the view.

###6, 7 ng-repeat
- A `module` contains the different components of an AngularJS app
- A `controller` manages the app's data
- An `expression` displays values on the page
- A `filter` formats the value of an expression
#### MainController.js
```javascript
$scope.products =
    [
      {
        name: 'The Book of Trees',
        price: 19,
        pubdate: new Date('2014', '03', '08'),
        cover: 'img/the-book-of-trees.jpg'
      },
      {
        name: 'Program or be Programmed',
        price: 8,
        pubdate: new Date('2013', '08', '01'),
        cover: 'img/program-or-be-programmed.jpg'
      }
    ]

```
#### index.html
```html
<div ng-repeat="product in products" class="col-md-6">
  <div class="thumbnail">
    <img ng-src="{{ product.cover }}">
    <p class="title">{{ product.name | uppercase }} </p>
    <p class="price">{{ product.price | currency }} </p>
    <p class="date">{{ product.pubdate | date}} </p>
  </div>
</div>
```
1. In the controller, we used products to store an array containing two objects.
1. Then in the view, we added `<div ng-repeat="product in products">`. 
Like ng-app and ng-controller, the ng-repeat is a directive. It loops through an array and displays each element. 
Here, the ng-repeat repeats all the HTML inside `<div class="col-md-6">` for each element in the products array.
1. The ng-src is a directive that sets the `<img>` element's src to a property in the controller.
ng-src가 컨트롤러의 속성에 `SRC <img>` 요소를 설정하는 지시자입니다.

In this way, `ng-repeat` shows both products in the `$scope.products` array. Instead of writing the same HTML twice as before, we just use` ng-repeat` to generate the HTML twice.

###8. Directives
- We've used a few directives so far - ng-app, ng-controller, ng-repeat, and ng-src.

우리는 지금까지 ng-app, ng-controller, ng-repeat, ng-src등  몇 가지 지시자를 사용했다.

- Directives bind behavior to HTML elements. 
When the app runs, AngularJS walks through each HTML element looking for directives. When it finds one, AngularJS triggers that behavior (like attaching a scope or looping through an array).

지시자는 HTML요소에 동작을 결합(bind)합니다.
응용 프로그램이 실행되면, AngularJS는 지시자를 찾아 각 HTML요소를 통해서 안내한다. 
하나를 발견하면 AngularJS는 (스코프를 첨부 또는 배열을 통해 반복하도록)동작을 트리거 합니다.

###9. ng-click
- So far we've made a static AngularJS app by adding properties in the controller and displaying them in the view. AngularJS is a framework for building dynamic web apps, so let's start to make this app interactive.
####MainController.js
```javascript
$scope.products =
	[
	  {
	    name: 'The Book of Trees', 
	    price: 19, 
	    pubdate: new Date('2014', '03', '08'), 
	    cover: 'img/the-book-of-trees.jpg',
	    likes: 0 
	  },
	  ...
	];
$scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
  }
```
- in the controller after `$scope.products`, attach a new property to `$scope` named `plusOne`.
####index.html
```html
<p class="likes" ng-click="plusOne($index)">{{ product.likes }}</p>
```
- View the AngularJS app in the browser. Click on the +0 in each product tile.
- Each time you click on the number of likes, the number goes up.
-  The `ng-click` is a directive. When `<p class="likes">` is clicked, `ng-click` tells AngularJS to run the `plusOne()` function in the controller.
- The `plusOne()` function gets the index of the product that was clicked, and then adds one to that product's `likes` property.
- Notice that the `plusOne()` doesn't interact with the view at all; it just updates the controller. Any change made to the controller shows up in the view.

###Generalizations
1. user visits the AngularJS app.
1. The view presents the app's data through the use of expressions, filters, and directives. Directives bind new behavior HTML elements.
1. A user clicks an element in the view. If the element has a directive, AngularJS runs the function.
1. The function in the controller updates the state of the data.
1. The view automatically changes and displays the updated data. The page doesn't need to reload at any point.
