'use strict';

angular
  .module('myApp.chat')
  .component('chat', {
    templateUrl: 'chat/chat.html',
    controller: ['chatService', function(chatService) {
      var ctrl = this;

      ctrl.numUsers = 0;
      
      chatService.emit('add user', 'hello');

      chatService.on('login', function(data) {
        ctrl.numUsers = data.numUsers;
      });

      chatService.on('user joined', function(data) {
        ctrl.numUsers = data.numUsers;
        console.log('user joined:', data);
      });
    }],
  });
