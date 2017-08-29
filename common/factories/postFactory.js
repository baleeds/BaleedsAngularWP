app.factory('postFactory', ['$http', function($http) {
  var postFactory = {};

  postFactory.getAllPosts = function() {
    return $http.get("http://www.baleeds.com/wordpress/wp-json/wp/v2/posts");
  };

  postFactory.getPostBySlug = function(postSlug) {
    return $http.get("http://www.baleeds.com/wordpress/wp-json/wp/v2/posts?slug=" + postSlug);
  };

  return postFactory;
}]);
