app.directive('imgrow', ['$window', function ($window) {
  return function(scope, element) {

    var totalAspect = 0;

    var recalculateImageRow = function() {
      element[0].style.height = element[0].clientWidth / totalAspect;
    };

    var images = element.find('img');
    console.log(images);
    var waitingImages = images.length;
    images.bind('load', function() {
      waitingImages--;
      if (waitingImages === 0) {
        for (var i = 0; i < element[0].children.length; i++) {
          totalAspect += (element[0].children[i].width / element[0].children[i].height);
        };
        recalculateImageRow();
        element[0].classList.add("img-row-loaded");
      }
    });

    angular.element($window).bind('resize', function(){
      recalculateImageRow();
    });

  };
}]);
