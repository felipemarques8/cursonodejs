var express = require('express');
var router = express.Router();

/* GET noticias page. */
router.get('/', function(req, res, next) {
  res.render('noticias', { title: 'Notícias' });
});

module.exports = router;