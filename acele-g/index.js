var b = require('bonescript');

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var b = require('bonescript');
var POT_VALUE = 0

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('read',function(state){
        io.emit('send',{x: b.analogRead('P9_36'), y: b.analogRead('P9_38'), z: b.analogRead('P9_40')})
    })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});