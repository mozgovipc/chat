'use strict';

angular
  .module('myApp.chat')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/chat', {
      template: '<chat></chat>',
    });
  }]);
