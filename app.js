const express = require("express");
const app = express();

app.get("/", function (req, res) {
   //res.sendFile(__dirname + "/example");
    res.send("Hello fr express");
});

app.get('/show', (req, res)=> {
    
    res.sendFile('index.html', {root: __dirname});

})
app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});