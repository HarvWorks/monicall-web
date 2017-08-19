var express = require('express');
var router = express.Router();
var authors = require('../controllers/authors.js');
var posts = require('../controllers/posts.js');

router.get('/authors', function(req, res) {
    authors.showAll(req, res);
});
router.get('/authors/:id', function(req, res) {
    authors.showOne(req, res);
});
router.get('/clients/:id', function(req, res) {
    authors.getClient(req, res);
});
router.get('/posts', function(req, res) {
    posts.showAll(req, res);
});
router.get('/posts/:id', function(req, res) {
    posts.showOne(req, res);
});
router.get('*', function (req, res, next) {
    res.render('index');
});

module.exports = router;
