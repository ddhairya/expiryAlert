const mailalert = require("./mailalert")



// const cron = require("node-cron")


// cron.schedule('* * * * *', () => {
//     console.log('running a task every minute');
// });


const path = require('path');
const express = require("express")
const app = express()
const port = 8081;

// // sendFile will go here
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '/index.html'));
//   });

const jsonData = require('./model/item.json')

app.get('/', function(req, res){
    res.send(jsonData)
})


app.listen(port)
console.log("Server started at port: " + port)
// mailalert(sub = 'Notify', msg = 'hello');

