const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const server = express();
const PORT = 5500



//controllers for middleware when using plain javascript
// const handleMiddleware = (req, res, next) => {
//     console.log("This is from the Middleware");
//     next();
// }

// //serving static file using javascript middleware
// const handleFiles = (req, res) => {
//     //locate static file
//     const staticFiles = path.join(__dirname, "public", "index.html");
//     //send the static file
//     res.sendFile(staticFiles)
// }

//controller for handling login
const handleLogin = (req, res) => {
    // let body = "";
    // req.on('data', (chunk) =>{
    //     body += chunk;
    // });
    // req.on('end', () => {
    //     console.log(body);
    // });
    console.log(req.body);
    res.send("Done")
}


//routes and methods
server.use(bodyParser.urlencoded({extended: false}));
server.use(express.static(path.join(__dirname, "public")));
server.post("/login", handleLogin);
// server.post("/", handleMiddleware); using the plain javascript middleware function
// server.get("/", handleFiles);





//listen on port
server.listen(PORT, () => {
  console.log(`Server is live on https://localhost:${PORT}`);
});