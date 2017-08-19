var authors = require('../controllers/authors.js');
var posts = require('../controllers/posts.js');
var path = require( 'path' );

module.exports = function(app){
	app.get('/authors', function(req, res) {
		authors.showAll(req, res);
	});
	app.get('/authors/:id', function(req, res) {
		authors.showOne(req, res);
	});
	app.post('/authors', function(req, res) {
		console.log("posting!!");
		authors.create(req, res);
	});
	app.put('/authors/:id', function(req, res) {
		authors.update(req, res);
	});
	app.delete('/authors/:id', function(req, res) {
		authors.delete(req, res);
	});

	app.get('/posts', function(req, res) {
		posts.showAll(req, res);
	});
	app.get('/posts/:id', function(req, res) {
		posts.showOne(req, res);
	});
	app.post('/posts', function(req, res) {
		posts.create(req, res);
	});
	app.put('/posts/:id', function(req, res) {
		posts.update(req, res);
	});
	app.delete('/posts/:id', function(req, res) {
		posts.delete(req, res);
	});
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, '../../client/index.html'));
	});
};
