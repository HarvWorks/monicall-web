var connection = require('../config/db.js');
var fs = require('fs')

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

	this.get_client = function(folderName, callback) {
		try {
			//change paths when deploying
			// var path = '/var/www/ronindev/public/img/clients/' + folderName     //path for server
			var path = './public/img/clients/' + folderName;
			fs.readdir(path, function(err, items) {
				console.log(items);
			    callback({error: false, data: items});
			});
		} catch (e) {
			console.log("error: " + e);
			callback({error: true, errors: e});
		}
	}
}

module.exports = new UserModel();
