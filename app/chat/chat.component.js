'use strict';

angular
  .module('myApp.chat')
  .component('chat', {
    templateUrl: 'chat/chat.html',
    controller: ['chatService', function(chatService) {
      var ctrl = this;

      ctrl.users = [];
      ctrl.connected = false;
      ctrl.message = '';
      ctrl.messages = '';

      ctrl.addMessage = function(message) {
        ctrl.messages += '\n' + message;
      };
      
      ctrl.onJoin = function() {
        if (ctrl.nickname) {
          chatService.emit('add user', ctrl.nickname);
        }
      };

      ctrl.onMessageKeydown = function($event) {
        if ($event.keyCode == 13) {
          if (ctrl.message.length) {
            chatService.emit('new message', ctrl.message);
            ctrl.addMessage(ctrl.nickname + ': ' + ctrl.message);
            ctrl.message = '';
          }
        }
      };

      chatService.on('login', function(data) {
        console.log('login:', data);
        ctrl.users = data.users;
        ctrl.connected = true;
        ctrl.addMessage('You are connected under nickname ' + ctrl.nickname);
      });

      chatService.on('user joined', function(data) {
        console.log('user joined:', data);
        ctrl.addMessage(data.username + ' joined the chat');
        ctrl.users = data.users;
      });

      chatService.on('user left', function(data) {
        console.log('user left:', data);
        ctrl.addMessage(data.username + ' left the chat');
        ctrl.users = data.users;
      });

      chatService.on('new message', function(data) {
        console.log('new message:', data);
        ctrl.addMessage(data.username + ': ' + data.message);
      });
    }],
  });
