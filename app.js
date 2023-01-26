const express = require("express");
const app = express();

// set the view engine to ejs
app.set('view engine','ejs');

let myName = 'Hardik';

app.get("/", function (req, res) {
   //res.sendFile(__dirname + "/example");
  
   /*let result = await res.send(`<h3> Hi, ${myName} </h3>`);
    console.log(myName);

   res.send(`<h3>Hi, ${myName} </h3>`);
*/

});

app.get('/show', (req, res)=> {
    
    res.sendFile('index.html', {root: __dirname});

})

app.get('/ejs', (req, res)=> {

    //ejs stuff goes here.

    console.log("in /ejs before render:", myName);
    
    //use res.render to load up an ejs view file
    res.render('index', { myName: myName }); //left one is ejs, right side is node land
    console.log("after res render /ejs", myName);
})

app.get('/name',(req,res)=> {

    console.log("in get to slash name:", req.query.ejsFormName);
})

app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});