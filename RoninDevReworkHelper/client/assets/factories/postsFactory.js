app.factory('postsFactory', ['$http', '$cookies', function($http, $cookies) {

	function PostConstructor() {
		var _this = this;

		this.index = function(callback) {
			$http.get('/posts').then(function(returned_data){
				if (returned_data.data.error) {
					callback(returned_data.error);
				} else {
					callback(returned_data.data.data);
				}
			});
		};

		this.show = function(id, callback) {
			$http.get('/posts/' + id).then(function(returned_data){
				if (typeof(callback) == 'function'){
					if (returned_data.data.error) {
						callback(returned_data.error);
					} else {
						$http.get('/authors/' + returned_data.data.data[0].author_id).then(function(returned_author){
							if (typeof(callback) == 'function'){
								if (returned_data.data.error) {
									callback(returned_data.error);
								} else {
									callback({post: returned_data.data.data, author: returned_author.data[0]});
								}
							}
						});
					}
				}
			});
		};

		this.create = function(newPost, callback) {
			$http.post('/posts', newPost).then(function(returned_data){
				if (typeof(callback) == 'function'){
					if (returned_data.data.error) {
						callback(returned_data.error);
					} else {
						callback(returned_data.data.data);
					}
				}
			});
		};

		this.update = function(id, updatePost, callback) {
			$http.put('/posts/' + id, updatePost).then(function(returned_data){
				if (typeof(callback) == 'function'){
					if (returned_data.data.error) {
						callback(returned_data.error);
					} else {
						callback(returned_data.data.data);
					}
				}
			});
		};

	}

	return (new PostConstructor());
}]);
