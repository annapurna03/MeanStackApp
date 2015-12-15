var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// ./views/index.ejs
    <h1><%= title %></h1>
    <p>Welcome to <%= title %></p>
