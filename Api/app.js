var express = require('express');
var app = express();
app.use(require("cors")());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var Cadastro = require('./routes/Cadastro');
var Login = require('./routes/Login');


app.use('/cadastro', Cadastro);
app.use('/login', Login);



app.listen(3010, function(){});
