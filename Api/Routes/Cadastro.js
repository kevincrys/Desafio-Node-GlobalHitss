var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const db = require("../db/db");


router.post('/', function(req, res, next) {

 var sqlp = db.selectUsers(req.body.txtLogin);
 sqlp.then(sql => {
   //vereifica se não foi retornado usuário com esse nome
    if(sql == ""){

 var insert = db.insertUsers({Login:req.body.txtLogin , Senha:req.body.txtSenha,Email:req.body.txtEmail})
   res.json({message: "usuário criado", concluido: true});
}
else{
  console.log("Já possui usuário com esse login");
  res.json({message: "Já possui usuário com esse login", concluido: false});
}
     })
})
module.exports = router;
