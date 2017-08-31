app.directive('blLightbox', [function() {
  return {
    link: function($scope, element, attrs) {

      // wait for load broadcast to account for compiling content from API.
      $scope.$on('contentLoaded', function() {

        // only add these elements once.
        if (!document.getElementById("Lightbox")) {
          element.append('<div class="lightbox" id="Lightbox"><div class="lightbox-topbar"><div id="LightboxClose" class="lightbox-close"><svg width="24px" height="24" viewport="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><line x1="1" y1="18" x2="18" y2="1" stroke="#7b7b7b" stroke-width="4"></line><line x1="1" y1="1" x2="18" y2="18" stroke="#7b7b7b" stroke-width="4"></line></svg></div></div><div class="lightbox-image-holder" id="lightboxImageHolder"></div></div>');
        }

        var images = element.find('img');
        for(var i = 0; i < images.length; i++) {
          images[i].setAttribute('lightbox-index', i);
        }
        var lightboxImageHolder = element[0].getElementsByClassName("lightbox-image-holder");
        var lbImages = images.clone();
        angular.element(lightboxImageHolder).append(lbImages); //clone to prevent cutting images from original location.


        var isOpen = false;
        var lightbox = document.getElementById("Lightbox");
        var lightboxClose = document.getElementById("LightboxClose");
        var lightboxImageHolder = document.getElementById("lightboxImageHolder");
        var currentImageIndex = 0;


        images.on('click', function(e) {
          openLightbox(e.srcElement.getAttribute('lightbox-index'));
        });
        images.addClass('clickable');

        angular.element(lightboxClose).on('click', function() {
          closeLightbox();
        });

        var openLightbox = function(index) {
          isOpen = true;
          lightbox.classList.add("lightbox-open");
          if (typeof index !== 'undefined') {
            setLeftMarginForImage(index);
          } else {
            setLeftMarginForImage(4);
          }
        };

        var closeLightbox = function() {
          isOpen = false;
          lightbox.classList.remove("lightbox-open");
        };

        var setLeftMarginForImage = function(imageIndex) {
          var i = lbImages[imageIndex];
          //(offset + imagewidth/2 - clientWidth / 2)
          var margin = ((i.offsetLeft + i.width / 2) - (lightbox.clientWidth / 2)) * -1;
          //var margin = ( lbImages[imageIndex].width / 2 ) - lbImages[imageIndex].offsetLeft + ( lightbox.clientWidth / 2 );
          lightboxImageHolder.style.marginLeft = margin;
        };

      });
    }
  }
}]);
