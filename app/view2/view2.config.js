'use strict';

angular
  .module('myApp.view2')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view2', {
      template: '<view2></view2>',
    });
  }]);
