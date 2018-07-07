'use strict';

angular
  .module('myApp.chat')
  .component('chat', {
    templateUrl: 'chat/chat.html',
    controller: ['chatService', function(chatService) {
      var ctrl = this;

      ctrl.numUsers = 0;
      ctrl.connected = false;
      
      ctrl.onJoin = function() {
        if (ctrl.nickname) {
          chatService.emit('add user', ctrl.nickname);
        }
      }

      chatService.on('login', function(data) {
        ctrl.numUsers = data.numUsers;
        ctrl.connected = true;
      });

      chatService.on('user joined', function(data) {
        ctrl.numUsers = data.numUsers;
        console.log('user joined:', data);
      });
    }],
  });
