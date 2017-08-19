var connection = require('../config/db.js');

function PostModel(){
	this.get_posts = function(callback) {
		try {
			connection.query("SELECT posts.id, posts.splash_img, posts.thumbnail, posts.title, posts.summary, posts.text, DATE_FORMAT(posts.created_at, '%M %d, %Y') as created_at, DATE_FORMAT(posts.updated_at, '%M %d, %Y') as updated_at, authors.id as author_id, authors.name, authors.picture, authors.bio, DATE_FORMAT(authors.created_at, '%M %d, %Y') as author_created_at, DATE_FORMAT(authors.updated_at, '%M %d, %Y') as author_updated_at FROM posts LEFT JOIN post_authors ON posts.id = post_authors.post_id LEFT JOIN authors ON post_authors.author_id = authors.id ORDER BY posts.id DESC", function (err, result) {
				callback({error: false, data: result});
			});
		} catch (e) {
			callback({error: true, errors: e});
		}
	}

	this.get_post = function(id, callback) {
		try {
			connection.query("SELECT posts.id, posts.splash_img, posts.title, posts.thumbnail, posts.summary, posts.text, DATE_FORMAT(posts.created_at, '%M %d, %Y') as created_at, DATE_FORMAT(posts.updated_at, '%M %d, %Y') as updated_at, authors.id as author_id, authors.name, authors.picture, authors.bio, DATE_FORMAT(authors.created_at, '%M %d, %Y') as author_created_at, DATE_FORMAT(authors.updated_at, '%M %d, %Y') as author_updated_at FROM posts LEFT JOIN post_authors ON posts.id = post_authors.post_id LEFT JOIN authors ON post_authors.author_id = authors.id WHERE posts.id = ? ORDER BY posts.id DESC", [id], function (err, result) {
				callback({error: false, data: result});
			});
		} catch (e) {
			callback({error: true, errors: e});
		}
	}
}

module.exports = new PostModel();
