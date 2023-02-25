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



