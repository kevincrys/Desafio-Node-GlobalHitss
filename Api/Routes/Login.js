var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const db = require("../db/db");

router.post('/', function(req, res, next) {
  console.log(req.body.txtLogin);
  console.log(req.body.txtSenha);

  var sqlp = db.selectUsers(req.body.txtLogin);
  sqlp.then(sql => {
    console.log(sql);
    console.log(sql[0]);
    if(sql[0] == undefined){
  console.log('undefined');
     }
     if(sql == ""){
   console.log('Vazio');
      }
 })
})
module.exports = router;
