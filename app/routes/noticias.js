var express = require('express');
var router = express.Router();

/* GET noticias page. */
router.get('/', function(req, res, next) {
  res.render('noticias', { title: 'Notícias', description: 'Descrição da Página de Notícias'});
});

module.exports = router;