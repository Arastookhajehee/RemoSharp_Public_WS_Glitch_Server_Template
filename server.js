
const WebSocket = require('ws');

const PORT = 5000;

const wsServer = new WebSocket.Server({
    port: PORT
});

wsServer.on('connection', function(socket) {
    // some feedback
    console.log('A Client just Connected');
    // attach some behaiviour to the socket
    socket.on('message',function(msg){

        console.log('recived msg from the client: ' + msg);

        // socket.send(message + "");
        // broadcasting the message to the clients
        // Making sure the message is not the Keyword Message
        // the Keyword message is used only to stay connected to the 
        // echo server, iow, keep the server alive
        if (msg != "YAY! Still Friends!") {
          wsServer.clients.forEach(function(client){
              client.send(msg + "");
          });
        }  

    });
});

console.log((new Date()) + "Server: " + PORT);
