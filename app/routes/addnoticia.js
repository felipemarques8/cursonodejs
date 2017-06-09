var express = require('express');
var router = express.Router();

/* GET noticias page. */
router.get('/', function(req, res, next) {
  res.render('addnoticia', { title: 'Adicionar Notícia', description: 'Descrição da Página de Adicionar Notícia'});
});

module.exports = router;