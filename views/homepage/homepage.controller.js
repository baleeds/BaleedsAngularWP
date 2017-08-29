app.controller('HomepageController', ['$scope', 'postFactory', 'tagFactory',
function HomepageController($scope, postFactory, tagFactory) {
  $scope.tags = tagFactory.tags;
  $scope.posts = [];
  $scope.loading = true;
  $scope.error = false;

  postFactory.getAllPosts()
    .then(
      function(response) {
        if (response.statusText === "OK") {
          $scope.posts = response.data;
          $scope.loading = false;
        } else {
          console.log(response);
          $scope.error = true;
        }
      }
  );


}]);
