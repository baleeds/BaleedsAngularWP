app.directive('blLightbox', [function() {
  return {
    link: function($scope, element, attrs) {

      // wait for load broadcast to account for compiling content from API.
      $scope.$on('contentLoaded', function() {

        // only add these elements once.
        if (!document.getElementById("Lightbox")) {
          element.append('<div class="lightbox" id="Lightbox"><div class="lightbox-topbar"><div id="LightboxClose" class="lightbox-close"><svg width="24px" height="24" viewport="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><line x1="1" y1="18" x2="18" y2="1" stroke="#7b7b7b" stroke-width="4"></line><line x1="1" y1="1" x2="18" y2="18" stroke="#7b7b7b" stroke-width="4"></line></svg></div></div><div class="lightbox-image-holder"></div></div>');
        }

        var images = element.find('img');
        var lightboxImageHolder = element[0].getElementsByClassName("lightbox-image-holder");
        angular.element(lightboxImageHolder).append(images.clone()); //clone to prevent cutting images from original location.

        
      });
    }
  }
}]);
