app.controller('HomepageController', ['$scope', 'postFactory', function HomepageController($scope, postFactory) {
  $scope.test = "Yooooo";
  $scope.posts = [];

  postFactory.getAllPosts()
    .then(
      function(response) {
        if (response.statusText === "OK") {
          $scope.posts = response.data;
        } else {
          console.log(response);
        }
      }
  );


}]);
