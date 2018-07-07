'use strict';

angular
  .module('myApp.core')
  .factory('chatService', ['socketFactory', function(socketFactory) {
    return socketFactory();
  }]);
