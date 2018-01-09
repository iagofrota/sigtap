var express = require('express');
var app = express();
app.get('/', function(req, res){
  res.send("Hello World");
});
app.listen(4000, function(){
  console.log('Aplicação está na porta 4000!');
});
