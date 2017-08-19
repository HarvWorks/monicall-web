var Author = require('../models/author.js');

function AuthorsController(){
	this.showAll = function(req, res) {
		Author.get_authors(function(status) {
			var index_status = status;
			if(index_status.error) {
				res.status(500).json(index_status);
			}
			else{
				res.status(201).json(index_status);
			}
		});
	};

	this.showOne = function(req, res) {
		Author.get_author(req.params.id, function(status) {
			var show_status = status;
			if(show_status.error) {
				res.status(500).json(show_status);
			}
			else{
				res.status(201).json(show_status);
			}
		});
	};

	this.getClient = function(req, res) {
		Author.get_client(req.params.id, function(status) {
			var show_status = status;
			if(show_status.error) {
				res.status(500).json(show_status);
			}
			else{
				res.status(201).json(show_status);
			}
		});
	};
}

module.exports = new AuthorsController();
