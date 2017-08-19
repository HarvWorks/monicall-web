var connection = require('../config/db.js');

function PostModel(){
	this.get_posts = function(callback) {
		try {
			connection.query("SELECT posts.id, posts.splash_img, posts.thumbnail, posts.title, posts.summary, posts.created_at, posts.updated_at, authors.id as author_id, authors.name, authors.picture, authors.bio, authors.created_at as author_created_at, authors.updated_at as author_updated_at FROM posts LEFT JOIN post_authors ON posts.id = post_authors.post_id LEFT JOIN authors ON post_authors.author_id = authors.id ORDER BY posts.id DESC", function (err, result) {
				callback({error: false, data: result});
			});
		} catch (e) {
			callback({error: true, errors: e});
		}
	}

	this.get_post = function(id, callback) {
		try {
			connection.query("SELECT posts.id, posts.splash_img, posts.title, posts.thumbnail, posts.summary, posts.text, posts.created_at, posts.updated_at, authors.id as author_id, authors.name, authors.picture, authors.bio, authors.created_at as author_created_at, authors.updated_at as author_updated_at FROM posts LEFT JOIN post_authors ON posts.id = post_authors.post_id LEFT JOIN authors ON post_authors.author_id = authors.id WHERE posts.id = ? ORDER BY posts.id DESC", [id], function (err, result) {
				callback({error: false, data: result});
			});
		} catch (e) {
			callback({error: true, errors: e});
		}
	}

	this.create_post = function(post, callback) {
		var data = [post.splash_img, post.thumbnail, post.title, post.summary, post.text];
		try {
			connection.query("INSERT INTO posts SET splash_img = ?, thumbnail = ?, title = ?, summary = ?, text = ?, created_at = NOW(), updated_at = NOW()", data, function(error, result) {
				if (post.id && post.id != "") {
					try {
						data = [result.insertId, post.author_id];
						connection.query("INSERT INTO post_authors SET post_id = ?, author_id = ?, created_at = NOW(), updated_at = NOW()", data, function(error, result2) {
							callback({error: false, data: {result: result, result2: result2}});
						});
					} catch (e) {
						callback({error: true, errors: e});
					}
				} else {
					callback({error: false, data: {result: result}});
				}
			});
		} catch (e) {
			callback({error: true, errors: e});
		}
	};

	this.update_post = function(id, post, callback) {
		var data = [post.splash_img, post.thumbnail, post.title, post.summary, post.text, id];
		try {
			connection.query("UPDATE posts SET splash_img = ?, thumbnail = ?, title = ?, summary = ?, text = ?, updated_at = NOW() WHERE id = ?", data, function(error, result) {
				connection.query("DELETE FROM post_authors WHERE post_id = ?", [id], function (err, result_delete) {
					if (post.id && post.id != "") {
						try {
							data = [id, post.author_id];
							connection.query("INSERT INTO post_authors SET post_id = ?, author_id = ?, created_at = NOW(), updated_at = NOW()", data, function(error, result2) {
								callback({error: false, data: {result: result, result_delete: result_delete, result2: result2}});
							});
						} catch (e) {
							callback({error: true, errors: e});
						}
					} else {
						callback({error: false, data: {result: result, result_delete: result_delete}});
					}
				});
			});
		} catch (e) {
			callback({error: true, errors: e});
		}
	}

	this.delete_post = function(id, callback) {
		try {
			connection.query("DELETE FROM post_authors WHERE post_id = ?; DELETE FROM posts WHERE id = ?", [id, id], function (err, result) {
				callback({error: false, data: result});
			});
		} catch (e) {
			callback({error: true, errors: e});
		}
	}
}

module.exports = new PostModel();
