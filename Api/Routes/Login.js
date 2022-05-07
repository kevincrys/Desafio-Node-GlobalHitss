var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

router.post('/', function(req, res, next) {
  console.log(req.body.txtLogin);
  console.log(req.body.txtSenha);
     })


module.exports = router;
