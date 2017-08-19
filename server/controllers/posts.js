var Post = require('../models/post.js');

function PostsController(){
	this.showAll = function(req, res) {
		Post.get_posts(function(status) {
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
		Post.get_post(req.params.id, function(status) {
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

module.exports = new PostsController();
