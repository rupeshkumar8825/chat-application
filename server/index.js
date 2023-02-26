// this is the nodejs server that we will be running and client is already running on a different port 
console.log("Hi this is nodejs server");

const express = require("express")
const app = express();
const WebSocket = require('ws')
const path = require('path')
const PORT = 8567;

// serving the html files by the server
// we will use this on root for this purpose 
app.use("/", express.static(path.resolve(__dirname, '../client/')))


// here we can add the callback function 
const server = app.listen(9876)

// we have to define the websocket server
const webSocketServer = new WebSocket.Server({
    // port : PORT
    // server: server
    noServer : true

    // we can use verifyclient in websockets to verify the user or client 
    // this helps in checking whether we want to connect with the client or not 

}, ()=>{
    console.log("Web socket server is running\n")
})


// now we have to set up the code for connection 
// here the on connection is an event 
webSocketServer.on('connection', function(ws){
    ws.send("Hello from the server!! your connection request has been approved");
    console.log("The details of the client is as follows \n", ws);

    // now here we can keep on waiting for the message event 
    // we will define the new event for receiving the message 
    ws.on('message', (data)=>{
        console.log("The message from the client side is as follows \n\n", data.toString());

        // here i am broadcasting the message to all the clients present or has been subscribed with this server for this purpose 
        webSocketServer.clients.forEach(function each(client){
            // checking if the connection is open or not then only we will send the data 
            if(client.readyState == WebSocket.OPEN){

                // sending the data to the client which is active right now or connected right now for this purpose
                client.send(data)
            }

        })
        // say everything went fine 
    })
    // say everything went fine 
})




// this end point will hit whenever the new client wants to connect 
// then this server will try to upgrade 
// this shows that this connection can be upgraded hence we have defined the following one 
server.on('upgrade', async function upgrade(request, socket, head)
{
    // do what you normally you do in verifyclient() here and then use the
    // handleupgrade method to call the web socket server to establish the connection with this particular client for this purpose 

    //test for authentication 


    // once the authentication is done then we will call the handleupgrade function to upgrade to web scoket server and once the upgradation is complete then we will emit the connection event on the callback for this purpose 
    webSocketServer.handleUpgrade(request, socket, head, function done(ws){

        // here we are emitting the connection event to connect to the web socket server 
        webSocketServer.emit('connection', ws, request, [])
    })

    // say everything went fine 
    return true;
})