app.controller('SinglePostController', ['$scope', 'postFactory', 'tagFactory', '$routeParams', '$compile',
 function SinglePostController($scope, postFactory, tagFactory, $routeParams, $compile) {
  $scope.post = null;
  $scope.tags = tagFactory.tags;
  $scope.loading = true;
  $scope.error = false;

  postFactory.getPostBySlug($routeParams.slug)
    .then(
      function(response) {
        if (response.statusText === "OK") {
          $scope.post = response.data[0];
          $scope.loading = false;
        } else {
          console.log(response);
          $scope.error = true;
        }
      }
  );


}]);
