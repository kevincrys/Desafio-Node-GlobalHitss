var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const db = require("../db/db");

router.get('/', function(req, res, next) {
res.send("eeeee");
     })


router.post('/', function(req, res, next) {

 var sqlp = db.selectUsers(req.body.txtLogin);
 sqlp.then(sql => {
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
