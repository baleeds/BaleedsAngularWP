app.factory('tagFactory', ['$http', function($http) {
  var tagFactory = {};
  tagFactory.tags = [];

  tagFactory.getAllTags = function() {
    return $http.get("http://www.baleeds.com/wordpress/wp-json/wp/v2/tags");
  };

  tagFactory.getAllTags()
    .then(function(res) {
      if (res.statusText === "OK") {
        for (var i = 0; i < res.data.length; i++) {
          tagFactory.tags[res.data[i].id] = {"name": res.data[i].name, "slug": res.data[i].slug};
        }
      }
    });

  console.log(tagFactory.tags);

  return tagFactory;

}]);
