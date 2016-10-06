# AngularJs Lesson 3

## Services : Weather forecast App

- [코드카데미](https://www.codecademy.com) 
- [결과물 바로가기](https://grapelove79.github.io/TIL/AngularJS/03_Services/index.html)

### 1. Services I

So far we've made AngularJS apps by adding data to a controller, and then displaying it in a view.

But what happens when the data contains hundreds of items, or if it's constantly changing like weather or financial data? Hardcoding data into a controller won't work anymore.

A better solution is to read the live data from a server. We can do this by creating a service.

#### 1) forecast.json
```json
{
  "city_name": "New York",
  "country": "US",
  "days": [
    {
      "datetime": 1420390800000,
      "icon": "https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/sun.svg",
      "high": 68,
      "low": 37
    },
    {
      "datetime": 1420477200000,
      "icon": "https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/clouds.svg",
      "high": 68,
      "low": 37
    }
    ...
  ]
}
```
- It's a JSON object containing a` city_name` and an array `days` containing weather data for the next five days

#### 2) js/services/forecast.js
Create a service named `forecast` that fetches the weather data from the server. 
```javascript
app.factory('forecast',['$http', function($http) {
	return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json')
  .success(function(data){
    return data;
  })
  .error(function(err){
    return err;
  });
}]);
```
1. First in **js/services/forecast.js**, we made a new service. We used `app.factory` to create a new service named `forecast`.

1. The `forecast` service needs to use AngularJS's built-in `$http` to fetch JSON from the server. Therefore, we add `$http` to the `forecast` service as a dependency, like this:
```javascript
['$http', function($http) {
   // ...
 }]
```
Now `$http` is available to use inside forecast.

3. Then, inside `forecast`, we use `$http` to construct an HTTP `GET` request for the weather data. If the request succeeds, the weather data is returned; otherwise the error info is returned.

#### 3) js/controllers/MainController.js
```javascript
app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
  forecast.success(function(data){
    $scope.fiveDay = data;
  });
}]);
```
1. Next in the controller, we used the `forecast` service to fetch data from the server. First we added `forecast` into `MainController` as a dependency so that it's available to use. 

1. Then within the controller we used `forecast` to asynchronously fetch the weather data from the server and store it into `$scope.fiveDay`

#### 4) index.html
```html
<h1>{{ fiveDay.city_name }}</h1>

<!-- Services -->
<script src="js/services/forecast.js"></script>
```
-  As before, any properties attached to $scope become available to use in the view. This means in index.html, we can display the city_name using an expression as done before.

### 2. Services II

#### 1) forecast.json
```json
{
  "city_name": "New York",
  "country": "US",
  "days": [
    {
      "datetime": 1420390800000,
      "icon": "https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/sun.svg",
      "high": 68,
      "low": 37
    },
    {
      "datetime": 1420477200000,
      "icon": "https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/clouds.svg",
      "high": 68,
      "low": 37
    }
    ...
  ]
}
```
- Looking at the format of the data in the `days` array, each day has four pieces of data - `datetime`, `icon`, `high`, and `low`.

#### 2) index.html
```html
<div class="forecast" ng-repeat="day in fiveDay.days">
   <div class="day row">
   
     <!-- datetime -->
     <div class="weekday col-xs-4">
	    {{ day.datetime | date }}
     </div>

     <!-- icon -->
     <div class="weather col-xs-3">
		<img ng-src="{{ day.icon }}">
     </div>
     <div class="col-xs-1"></div>

     <!-- high -->
     <div class="high col-xs-2">{{ day.high }}</div>

     <!-- low -->
     <div class="low col-xs-2">{{ day.low }}</div>
   </div>
 </div>
```
1. Notice in the view, we're using `ng-repeat` to loop through each item in the `days` array. Inside this loop, display a day's four pieces of data.

2. Use the `date` filter to format the `datetime`.

### 3. Generalizations
Why are services useful? Instead of filling the controller with code to fetch weather data from a server, it's better to move this independent logic into a service so that it can be reused by other parts of the app.

What can we generalize so far?

Directives are a way to make standalone UI components, like `<app-info>`
Services are a way to make standalone communication logic, like `forecast` which fetches weather data from a server.
