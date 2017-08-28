app.controller('SinglePostController', ['$scope', 'postFactory', '$routeParams',
 function SinglePostController($scope, postFactory, $routeParams) {
  $scope.post = {};

  postFactory.getPostBySlug($routeParams.slug)
    .then(
      function(response) {
        if (response.statusText === "OK") {
          $scope.post = response.data[0];
        } else {
          console.log(response);
        }
      }
  );


}]);
