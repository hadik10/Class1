const express = require("express");
const app = express();

// set the view engine to ejs
app.set('view engine','ejs');

let myName = 'Hardik';

app.get("/", function (req, res) {
   //res.sendFile(__dirname + "/example");
    res.send(`<h3>Hi, ${myName} </h3>`);
});

app.get('/show', (req, res)=> {
    
    res.sendFile('index.html', {root: __dirname});

})

app.get('/ejs', (req, res)=> {

    //ejs stuff goes here.

    //use res.render to load up an ejs view file
    res.render('index');
})

app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});