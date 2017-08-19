var connection = require('../config/db.js');

function UserModel(){
	this.get_authors = function(callback) {
		try {
			connection.query("SELECT * FROM authors", function (err, result) {
				callback({error: false, data: result});
			});
		} catch (e) {
			callback({error: true, errors: e});
		}
	}

	this.get_author = function(id, callback) {
		try {
			connection.query("SELECT * FROM authors WHERE id = ?", [id], function (err, result) {
				callback({error: false, data: result});
			});
		} catch (e) {
			callback({error: true, errors: e});
		}
	}

	this.create_author = function(author, callback) {
		var data = [author.name, author.picture, author.bio];
		try {
			connection.query("INSERT INTO authors SET name = ?, picture = ?, bio = ?, created_at = NOW(), updated_at = NOW()", data, function(error, result) {
				callback({error: false, data: result});
			});
		} catch (e) {
			callback({error: true, errors: e});
		}
	};

	this.update_author = function(id, author, callback) {
		var data = [author.name, author.picture, author.bio, id];
		try {
			connection.query("UPDATE authors SET name = ?, picture = ?, bio = ?, updated_at = NOW() WHERE id = ?", data, function(error, result) {
				callback({error: false, data: result});
			});
		} catch (e) {
			callback({error: true, errors: e});
		}
	}

	this.delete_author = function(id, callback) {
		try {
			connection.query("DELETE FROM post_authors WHERE author_id = ?; DELETE FROM authors WHERE id = ?", [id], function (err, result) {
				callback({error: false, data: result});
			});
		} catch (e) {
			callback({error: true, errors: e});
		}
	}
}

module.exports = new UserModel();
