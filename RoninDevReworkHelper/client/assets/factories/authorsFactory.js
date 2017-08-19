app.factory('authorsFactory', ['$http', '$cookies', function($http, $cookies) {

	function AuthorConstructor() {
		var _this = this;

		this.index = function(callback) {
			$http.get('/authors').then(function(returned_data){
				if (returned_data.data.error) {
					callback(returned_data.error);
				} else {
					callback(returned_data.data);
				}
			});
		};

		this.show = function(id, callback) {
			$http.get('/authors/' + id).then(function(returned_data){
				if (typeof(callback) == 'function'){
					if (returned_data.data.error) {
						callback(returned_data.error);
					} else {
						callback(returned_data.data.data);
					}
				}
			});
		};

		this.create = function(newAuthor, callback) {
			$http.post('/authors', newAuthor).then(function(returned_data){
				if (typeof(callback) == 'function'){
					if (returned_data.data.error) {
						callback(returned_data.error);
					} else {
						callback(returned_data.data.data);
					}
				}
			});
		};

		this.update = function(id, updateAuthor, callback) {
			$http.put('/authors/' + id, updateAuthor).then(function(returned_data){
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

	return (new AuthorConstructor());
}]);
