var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const db = require("../db/db");

router.post('/', function(req, res, next) {

  var sqlp = db.selectUsers(req.body.txtLogin);
  sqlp.then(sql => {
     if(sql != ""){
      if(sql[0].Senha == req.body.txtSenha){
        res.json({message: "Usuário logado com sucesso", concluido: true});
        }
      else{
        res.json({message: "Senha incorreta", concluido: false});
      }


      }
      else{
         res.json({message: "Não existe usuário com esse nome", concluido: false});
      }
 })
})
module.exports = router;
