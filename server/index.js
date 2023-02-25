// this is the nodejs server that we will be running and client is already running on a different port 
console.log("Hi this is nodejs server");

const express = require("express")

const app = express();

const PORT = 8000;

app.get("/root", (req, res) => {
    console.log("The server is up and running and this is the root path for this purpose")

    res.send("the server is up")
})

// we also have to listen this server at some port for this purpose 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)

    // say everything went fine 
})