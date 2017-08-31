app.config(['$locationProvider', '$routeProvider', '$disqusProvider',
  function($locationProvider, $routeProvider, $disqusProvider) {
    $locationProvider.hashPrefix('!');
    $disqusProvider.setShortname('baleeds');

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
