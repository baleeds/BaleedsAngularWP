app.directive('blLightbox', [function() {
  return {
    link: function($scope, element, attrs) {

      // wait for load broadcast to account for compiling content from API.
      $scope.$on('contentLoaded', function() {

        // only add these elements once.
        if (!document.getElementById("Lightbox")) {
          element.append('<div class="lightbox" id="Lightbox"><div class="lightbox-topbar"><div id="LightboxClose" class="lightbox-close"><svg width="24px" height="24" viewport="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><line x1="1" y1="18" x2="18" y2="1" stroke="#7b7b7b" stroke-width="4"></line><line x1="1" y1="1" x2="18" y2="18" stroke="#7b7b7b" stroke-width="4"></line></svg></div></div><div class="lightbox-image-holder" id="lightboxImageHolder"></div><div class="lightbox-left clickable" id="LightboxLeft"></div><div class="lightbox-right clickable" id="LightboxRight"></div></div>');
        }

        var images = element.find('img');
        for(var i = 0; i < images.length; i++) {
          images[i].setAttribute('lightbox-index', i);
        }
        images.addClass('clickable');

        var lightboxImageHolder = element[0].getElementsByClassName("lightbox-image-holder");
        var lbImages = images.clone();
        angular.element(lightboxImageHolder).append(lbImages); //clone to prevent cutting images from original location.


        var isOpen = false;
        var lightbox = document.getElementById("Lightbox");
        var lightboxClose = document.getElementById("LightboxClose");
        var lightboxImageHolder = document.getElementById("lightboxImageHolder");
        var lightboxLeft = document.getElementById("LightboxLeft");
        var lightboxRight = document.getElementById("LightboxRight");
        var currentImageIndex = 0;

        console.log(lightboxClose);

        images.on('click', function(e) {
          openLightbox(e.srcElement.getAttribute('lightbox-index'));
        });
        angular.element(lightboxClose).on('click', function(e) {
          console.log(e);
          closeLightbox();
        });
        angular.element(lightboxLeft).on('click', function() {
          moveLeft();
        });
        angular.element(lightboxRight).on('click', function() {
          moveRight();
        });

        var openLightbox = function(index) {
          isOpen = true;
          lightbox.classList.add("lightbox-open");
          lbImages[currentImageIndex].classList.remove("active");
          currentImageIndex = index;
          setCurrentImage();
        };

        var closeLightbox = function() {
          isOpen = false;

          console.log(lbImages[currentImageIndex]);
          lightbox.classList.remove("lightbox-open");
        };

        var setCurrentImage = function() {
          var i = lbImages[currentImageIndex];
          i.classList.add("active");
          //(offset + imagewidth/2 - clientWidth / 2)
          var margin = ((i.offsetLeft + i.width / 2) - (lightbox.clientWidth / 2)) * -1;
          //var margin = ( lbImages[imageIndex].width / 2 ) - lbImages[imageIndex].offsetLeft + ( lightbox.clientWidth / 2 );
          lightboxImageHolder.style.marginLeft = margin;
        };

        var moveLeft = function() {
          if (currentImageIndex > 0) {
            lbImages[currentImageIndex].classList.remove("active");
            currentImageIndex--;
            setCurrentImage();
          }
        };

        var moveRight = function() {
          if (currentImageIndex < images.length - 1) {
            lbImages[currentImageIndex].classList.remove("active");
            currentImageIndex++;
            setCurrentImage();
          }
        }

      });
    }
  }
}]);
