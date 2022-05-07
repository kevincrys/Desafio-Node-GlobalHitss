var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

router.get('/', function(req, res, next) {
res.send("eeeee");
     })


router.post('/', function(req, res, next) {
 console.log(req.body.txtLogin);
 console.log(req.body.txtSenha);
 console.log(req.body.txtEmail);
     })


module.exports = router;
