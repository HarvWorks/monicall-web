var Post = require('../models/post.js');

function PostsController(){
	this.showAll = function(req, res) {
		Post.get_posts(function(status) {
			var index_status = status;
			if(index_status.error) {
				res.json(index_status);
			}
			else{
				res.json(index_status);
			}
		});
	};

	this.showOne = function(req, res) {
		Post.get_post(req.params.id, function(status) {
			var show_status = status;
			if(show_status.error) {
				res.json(show_status);
			}
			else{
				res.json(show_status);
			}
		});
	};

	this.create = function(req, res){
		Post.create_post(req.body, function(status) {
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
		Post.update_post(req.params.id, req.body, function(status) {
			var update_status = status;
			if(update_status.error) {
				res.json(update_status);
			}
			else{
				res.json(update_status);
			}
		});
	};

	this.delete = function(req, res){
		Post.delete_post(req.params.id, function(status) {
			var delete_status = status;
			if(delete_status.error) {
				res.json(delete_status);
			}
			else{
				res.json(delete_status);
			}
		});
	};
}

module.exports = new PostsController();
