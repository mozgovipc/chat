'use strict';

angular
  .module('myApp.chat')
  .component('chat', {
    templateUrl: 'chat/chat.html',
    controller: ['chatService', function(chatService) {
      var ctrl = this;

      ctrl.users = [];
      ctrl.connected = false;
      
      ctrl.onJoin = function() {
        if (ctrl.nickname) {
          chatService.emit('add user', ctrl.nickname);
        }
      }

      chatService.on('login', function(data) {
        console.log('login:', data);
        ctrl.users = data.users;
        ctrl.connected = true;
      });

      chatService.on('user joined', function(data) {
        console.log('user joined:', data);
        ctrl.users = data.users;
      });
    }],
  });
