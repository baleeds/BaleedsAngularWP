app.config(['$locationProvider', '$routeProvider',
  function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/', {
        controller: 'HomepageController',
        templateUrl: '/views/homepage/homepage.template.html'
      })
      .otherwise('/');

  }]);
