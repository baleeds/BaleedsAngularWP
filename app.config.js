app.config(['$locationProvider', '$routeProvider',
  function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/journal', {
        controller: 'HomepageController',
        templateUrl: '/views/homepage/homepage.template.html'
      })
      .when('/journal/:slug', {
        controller: 'SinglePostController',
        templateUrl: '/views/singlePost/singlePost.template.html'
      })
      .otherwise('/journal');

  }]);
