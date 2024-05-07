var express = require('express');
var app = express();

app.get('/barang', function(req, res){
   res,send("Hello World!");
});

app.get('/barang/:id', function(req, res){
   res.send('The id you specified is'+ req.Params.id);
});

app.listen(3000);