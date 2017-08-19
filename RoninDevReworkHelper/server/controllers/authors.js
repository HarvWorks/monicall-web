var Author = require('../models/author.js');

function AuthorsController(){
	this.showAll = function(req, res) {
		Author.get_authors(function(status) {
			var index_status = status;
			if(index_status.error) {
				res.json(index_status);
			}
			else{
				res.json(index_status.data);
			}
		});
	};

	this.showOne = function(req, res) {
		Author.get_author(req.params.id, function(status) {
			var show_status = status;
			if(show_status.error) {
				res.json(show_status);
			}
			else{
				res.json(show_status.data);
			}
		});
	};

	this.create = function(req, res){
		console.log(req.body);
		Author.create_author(req.body, function(status) {
			var create_status = status;
			if(create_status.error) {
				res.json(create_status);
			}
			else{
				res.json(create_status);
			}
		});
	};

	this.update = function(req, res) {
		Author.update_author(req.params.id, req.body, function(status) {
			var update_status = status;
			if(update_status.error) {
				res.json(update_status);
			}
			else{
				res.json(update_status.data);
			}
		});
	};

	this.delete = function(req, res){
		Author.delete_author(req.params.id, function(status) {
			var delete_status = status;
			if(delete_status.error) {
				res.json(delete_status.errors);
			}
			else{
				res.json(delete_status.data);
			}
		});
	};
}

module.exports = new AuthorsController();
