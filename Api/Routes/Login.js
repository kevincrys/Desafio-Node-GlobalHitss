var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

router.post('/', function(req, res, next) {
  console.log(req.body.txtLogin);
  console.log(req.body.txtSenha);

  var sqlp = dbsql.selectUsers(req.body.txtLogin);
  sqlp.then(sql => {
    var featured;
    if(sql[0] != undefined){
    if(sql[0].featured==0){featured=false}
    else{featured=true}
     }
 })

module.exports = router;