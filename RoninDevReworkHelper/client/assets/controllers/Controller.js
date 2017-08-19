app.controller('controller', ['$scope', 'authorsFactory','postsFactory', '$location', '$routeParams', '$cookies', function($scope, authorsFactory, postsFactory, $location, $routeParams, $cookies) {

	$scope.selectedWriter = "Select a Writer"

	$scope.processAuthor = function() {
		if ($routeParams.id) {
			$scope.updateAuthor()
		} else {
			$scope.addAuthor()
		}
	}

	$scope.showAuthors = function() {
		authorsFactory.index(function(data) {
			$scope.authors = data;
		});
	};

	$scope.showAuthor = function() {
		authorsFactory.show($routeParams.id, function(data) {
			data[0].date_of_birth = new Date(data[0].date_of_birth);
			$scope.author = data[0];
		});
	};

	$scope.addAuthor = function(){
		authorsFactory.create($scope.author, function(data) {
			if(data.errors) {
				$scope.errors = {};
				$scope.errors.author = data.errors;
			}
			else {
				$scope.showAuthors();
				$location.url('/');
			}
		});
	};

	$scope.updateAuthor = function(){
		authorsFactory.update($routeParams.id, $scope.author, function(data) {
			if(data.errors) {
				$scope.errors = data.errors;
			}
			else{
				$scope.showAuthors();
				$location.url('/');
			}
		});
	};

	$scope.processPost = function() {
		if ($routeParams.id) {
			$scope.updatePost()
		} else {
			$scope.addPost()
		}
	}
	$scope.showPosts = function() {
		postsFactory.index(function(data) {
			data[0].created_at = new Date(data[0].created_at)
			$scope.posts = data;
		});
	};

	$scope.showPost = function() {
		postsFactory.show($routeParams.id, function(data) {
			data.post[0].created_at = new Date(data.post[0].created_at);
			if (data.author) {
				$scope.author = data.author
				$scope.selectedWriter = data.author.name
			}
			$scope.post = data.post[0];
		});
	};

	$scope.addPost = function(){
		$scope.post.author_id = $scope.author.id
		postsFactory.create($scope.post, function(data) {
			if(data.errors) {
				$scope.errors = {};
				$scope.errors.post = data.errors;
			}
			else {
				$scope.showPost()
				$location.url('/');
			}
		});
	};

	$scope.updatePost = function(){
		$scope.post.author_id = $scope.author.id
		postsFactory.update($routeParams.id, $scope.post, function(data) {
			if(data.errors) {
				$scope.errors = data.errors;
			}
			else{
				$scope.showPost()
				$location.url('/');
			}
		});
	};

	$scope.newPost = function(){
		$scope.showPost()
		$location.url('/post');
	}

	$scope.editPost = function(id){
		$scope.showPost()
		$location.url('/post/' + id);
	}

	$scope.newAuthor = function(){
		$location.url('/author');
	}

	$scope.editAuthor = function(id){
		$location.url('/author/' + id);
	}

	$scope.indexPage = function(){
		$location.url('/');
	}

	$scope.showAuthors();
	$scope.showAuthor();
	$scope.showPosts();
	$scope.showPost();

}]);
