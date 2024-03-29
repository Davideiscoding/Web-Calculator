// jshint esversion: 6

const express = require("express");

// parse information from POST request
const bodyParser = require("body-parser");

const app = express();

// extended: true - in order to post nested objects (Needs to be included in order to use body-parser)
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("The result of the calculation is " + result);
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
