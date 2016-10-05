# AngularJs Lesson 2

## Directives : app market

- [코드카데미](https://www.codecademy.com) Lesson 2
- [결과물 바로가기](https://grapelove79.github.io/TIL/AngularJS/02_Directives)

### 5, 6, 7. installApp
- Directives are a core feature of AngularJS. So far we've used custom directives to simply display static content, but they can do more than this. It's possible to bake interactivity into directives.

#### 1) js/directives/installApp.js
```javascript
app.directive('installApp', function(){
  return {
    restrict: 'E',
    scope: {
      
    },
    templateUrl: 'js/directives/installApp.html',
    link: function(scope, element, attrs) {
        scope.buttonText = "Install",
            scope.installed = false,
            
            scope.download = function() {
              element.toggleClass('btn-active');
              if(scope.installed) {
                scope.buttonText = "Install";
                sceop.installed = false;
              } else {
                scope.buttonText = "Uninstall";
                scope.installed = true;
              }
          }
    }
  };                                         
});
```
We used `app.directive` to create a new directive named `'installAp'`.

- The directive contains the three options `restrict`, `scope`, and `templateUrl` that we saw before in the `'appInfo'` directive.
- It also contains a fourth option `link`. The `link` is used to create interactive directives that respond to user actions.

The link function takes three inputs:

1. `scope` refers to the directive's scope. Any new properties attached to `$scope` will become available to use in the directive's template.
1. `element` refers to the directive's HTML element.
1. `attrs` contains the element's attributes.

Inside the `link` function, there are two properties `buttonText` and `installed`, and the function `download()`. We'll use these in the directive's template next.

#### 2) js/directives/installApp.html
```javascript
<button class="btn btn-active" ng-click="download()">
  {{ buttonText }}
</button>
```
The template uses Angular's built-in `ng-click` directive. When the button is clicked, `ng-click` will tell AngularJS to run the `download()` function in the directive.

The `download()` function uses the `scope.installed` property to check if an app is installed. When an app is installed, `download()` does three things:

- toggles the `.btn-active` class
- changes the button text to "Uninstall"
- changes `scope.installed` to `true`

#### 3) index.html
```html
<div class="card" ng-repeat="app in apps">
  <app-info info="app"></app-info>
  <install-app info="install"></install-app>
</div>
```
- add the new `<install-app>`

### 8. Generalizations(종합)
An "Install" button now shows up under each app. When you click the button, it changes to an "Uninstall" button. When you click it again, it changes back to an "Install" button.

What can we generalize so far?

- Directives are a powerful way to create self-contained, interactive components. Unlike jQuery which adds interactivity as a layer on top of HTML, AngularJS treats interactivity as a native component of HTML.
