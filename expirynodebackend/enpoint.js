const express = require("express")
const jsonData = require('./model/item.json');
const locData = require('./model/loc.json');
const app = express()
const cors = require("cors")
const port = 8081;
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
const fs = require('fs');

app.use(cors())

// // sendFile will go here
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '/index.html'));
//   });


// GET all data
app.get('/items', function(req, res){

    res.send(jsonData)
})

// GET all data
app.get('/locs/', function(req,res){
    // const loc = locData.locs.find(loc => loc.comp === req.params.comp)
    // console.log(loc.locations)
    res.send([""])
})

// GET  loc data
app.get('/locs/:comp', function(req,res){
    const loc = locData.locs.find(loc => loc.comp === req.params.comp)
    // console.log(loc.locations)
    res.send(loc.locations)
})

// GET particular item
app.get('/items/:id',(req,res) => {
    const item = jsonData.items.find(item => item.id === parseInt(req.params.id))
    if(!item) res.status(404).send("The item didn't found ")

    res.send(item)
})


// POST /endpoint expects JSON body
app.post('/items', jsonParser,  function (req, res) {
    // Use req.body here
    // console.log(req.body)
    const item = {
        id: jsonData.items.length+1,
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        user: req.body.user,
        status: req.body.status,
        expiryDate: req.body.expiryDate,
        alert: req.body.alert,
        frequency: req.body.frequency,
        note: req.body.note,
    }
    jsonData.items.push(item)
    // console.log(jsonData)
    
    fs.writeFile('./model/item.json', JSON.stringify(jsonData), function(err){
        if (err) return console.log(err)
    } );

    res.send(item)

})

// UPDATE an item / expecting JSON body
app.put('/items/:id', jsonParser, function(req, res){
    // console.log(req.params.id)
    // console.log(req.body)
    const item = jsonData.items.find(item => item.id === parseInt(req.params.id))
    // console.log(item)
    item.title = req.body.title,
    item.company = req.body.company,
    item.location = req.body.location,
    item.user = req.body.user,
    item.status = req.body.status,
    item.expiryDate = req.body.expiryDate,
    item.alert = req.body.alert,
    item.frequency = req.body.frequency,
    item.note = req.body.note,  
    // console.log(jsonData)
    
    fs.writeFile('./model/item.json', JSON.stringify(jsonData), function(err){
        if (err) return console.log(err)
    } );
    res.send(item)

})

app.listen(port)
console.log("Server started at port: " + port)





