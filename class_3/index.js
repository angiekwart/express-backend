// importing the http  module
const http = require('http');


//callback function for handling all requests once server starts
const handleAllRequests = (requestObject) => {
    console.log("Server has beeen started");
    console.log(requestObject);
}

//create server
const server = http.createServer(handleAllRequests);
const PORT = 5000;


// creating function to handle all requests
const handlePostRequest = (req, res) => {
    res.send("Welcome to my Node.js Server");
}
const handleGetRequest = (res, req) => {
    req.send("This is the About Page");
}
const handlePutRequest = (res, req) => {
    req.send("Contact us at: example@example.com");
}

//routes and methods
server.post("/", handlePostRequest);
server.get("/about", handleGetRequest);
server.get("/contact", handlePutRequest);


//listen on port 5000
server.listen(PORT, "localhost", ()=>{
    console.log(`Server is running on port ${PORT}`)
});