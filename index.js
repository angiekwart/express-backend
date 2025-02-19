const express = require('express')

const server = express()
const PORT = 5500

//handlers
const handleCreate = (req, res) =>{
    res.send('Data is successfully created')
}
const handleRetrieve =(req, res) =>{
    res.send('Data is successfully retrieved')
}
const handlePut =(req, res) =>{
    res.send('Data is successfully added')
}
const handleDelete =(req, res) =>{
    res.send('Data is successfully deleted')
}

//routes and methods
server.post("/", handleCreate);
server.get("/about", handleRetrieve);
server.put("/contact", handlePut);
server.delete("/service", handleDelete);

server.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost: ${PORT}`)
})