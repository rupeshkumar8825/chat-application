// this is the nodejs server that we will be running and client is already running on a different port 
console.log("Hi this is nodejs server");

const express = require("express")
const app = express();
const WebSocket = require('ws')
const PORT = 8567;


// we have to define the websocket server
const webSocketServer = new WebSocket.Server({
    port : PORT
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

        // say everything went fine 
    })
    // say everything went fine 
})

