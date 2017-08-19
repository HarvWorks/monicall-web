"use strict";
function rebirthMain($, newPage) {
  // Make sure all pages start at the top
  window.scrollTo(0, 0)

  if (newPage) {
      $(".showWhenLoaded").fadeTo(200, 1);
  }
  /* Loader */
  $(window).load(function() {
    $(".showWhenLoaded").fadeTo(200, 1);
    $(".loader").delay(200).fadeOut();
    $("#mask").delay(300).fadeOut("slow");
    $("body").addClass("loaded");
    if ($('body.overflowed').length>0) { $('#jHeader').addClass('overflow');}
  });

  introSlider()

  function introSlider() {
  /*----------------------------------------------
              I N T R O  S L I D E R
  ------------------------------------------------*/
    $('#slides').superslides({
      hashchange: false,
      animation: 'fade',
      play: 10000
    });

    function slidertext() {
      $("#owl-main-text").owlCarousel({
        autoPlay: 10000,
        goToFirst: true,
        goToFirstSpeed: 2000,
        navigation: false,
        slideSpeed: 700,
        pagination: false,
        transitionStyle: "fadeUp",
        singleItem: true
      });
    }

    if ($('#owl-main-text').length>0 ) {
      slidertext();
    };
  }

  /* menu fixed */
  $(window).bind("scroll", function(){
      if ($(window).scrollTop() >= 85 ) {
          $('#jHeader').addClass('overflow');
      } else {
          if ($('.page-template-default').length==0 && $('.single.no-thumbnail').length==0)
            $('#jHeader').removeClass('overflow');
      }
      if ($(window).scrollTop() >= ($('.jIntro').height()/2)) {
          $('#jHeader').addClass('fixed');
      } else {
          $('#jHeader').removeClass('fixed');
      }
  });

        /*Sections appears in scroll*/
        $('.row').bind('inview', function(event, visible) {
            if (visible === true) {
              $(this).addClass('visible');
            };
        });

  $(document).ready(function(){
      /*----------------------------------------------
                       P A R A L L A X
      ------------------------------------------------*/
      if(jQuery().parallax) {
          jQuery('.parallax-section').parallax();
      }
      if ($('.page-template-default').length>0 || $('.single.no-thumbnail').length>0) {
         $('#jHeader').addClass('overflow');
      }

    $('#trigger-overlay').click(function(){
      if($(".overlay").hasClass("open")) {
        $(".overlay").removeClass("open");
        $(this).removeClass("is-active");
      } else {
        $(".overlay").addClass("open");
        $(this).addClass("is-active");
      }
      return false;
    });
    $(".overlay").find("a").on("click", function(e) {
      $(".overlay").removeClass("open"), $(".dropdown-icon").removeClass("is-active")
    });

    $('#trigger-dropdown').on("click", function(e) {
      $('.nav-dropdown').addClass('open');
      $(this).blur();
      $('#jHeader').addClass('dropdown-open');
      return false;
    });
    $(".nav-dropdown").on("mouseleave", function() {
      $(this).removeClass('open');
      $('#jHeader').removeClass('dropdown-open');
    });

    $('#backToTop').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    // carousel about home 4
    var $aboutPhoto = $('.carusel-about-photo').flickity({
      cellAlign: "left",
      contain: true,
      wrapAround: true,
      draggable: false,
      pageDots: false,
      prevNextButtons: false
    });
    var $aboutText = $('.carusel-about-text').flickity({
      cellAlign: "left",
      contain: true,
      wrapAround: true,
      draggable: false,
      pageDots: false,
      prevNextButtons: false
    });
    $('.button--previous-about').on( 'click', function() {
      $aboutPhoto.flickity('previous');
      $aboutText.flickity('previous');
    });
    $('.button--next-about').on( 'click', function() {
      $aboutPhoto.flickity('next');
      $aboutText.flickity('next');
    });

    // carousel featured home 4
    var $featurePhoto = $('.carusel-feat-photo').flickity({
      cellAlign: "center",
      contain: true,
      wrapAround: true,
      draggable: false,
      pageDots: false,
      prevNextButtons: false
    });
    var $featureText = $('.carusel-feat-text').flickity({
      cellAlign: "center",
      contain: true,
      wrapAround: true,
      draggable: false,
      pageDots: false,
      prevNextButtons: false
    });
    $('.button--previous-feat').on( 'click', function() {
      $featurePhoto.flickity('previous');
      $featureText.flickity('previous');
    });
    $('.button--next-feat').on( 'click', function() {
      $featurePhoto.flickity('next');
      $featureText.flickity('next');
    });
  });

  // carousel tabs home 5
  var $carouselTabs = $('.carusel-tabs-text').flickity({
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    draggable: false,
    pageDots: false,
    prevNextButtons: false
  });
  $('.carousel-tabs').on( 'click', 'li', function() {
    var index = $(this).index();
    $carouselTabs.flickity( 'select', index );
    $(this).addClass('active').siblings().removeClass('active');
    return false;
  });

  var $carouselGalleryText = $('.carusel-gallery-text').flickity({
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    draggable: false,
    prevNextButtons: false
  });
  var $carouselGalleryPhoto = $('.carusel-gallery-photo').flickity({
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    draggable: false,
    pageDots: false,
    prevNextButtons: false
  });
  $('.carusel-gallery-tabs').on( 'click', 'li', function() {
    var index = $(this).index();
    $carouselGalleryText.flickity( 'select', index );
    $carouselGalleryPhoto.flickity( 'select', index );
    $(this).addClass('active').siblings().removeClass('active');
    return false;
  });

  /*----------------------------------------------
                   I S O T O P E
  ------------------------------------------------*/
  $(window).load(function(){
      isotopeJS()
  });

  function isotopeJS(){
      //ISOTOPE media
      var $container = $('.work1').isotope({
        itemSelector: '.thumbnail',
        masonry: {
          columnWidth: '.thumbnail.small'
        }
      });
      // filter items on button click
      $('.filters').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
      });

      // change is-checked class on buttons
      $('.filters').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'li', function() {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $( this ).addClass('is-checked');
        });
      });

      // load more
      $('#append').click(function() {
        var newItems = $('#more-items').appendTo('.thumbnails');
        $(".thumbnails").isotope('insert', newItems );
        $(this).hide();
        return false;
      });

    //ISOTOPE media
    var $container2 = $('.work2').isotope({
      itemSelector: '.thumbnail',
      masonry: {
        columnWidth: '.thumbnail.small'
      }
    });
    // filter items on button click
    $('.filters').on( 'click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $container2.isotope({ filter: filterValue });
    });

    var $container3 = $('.work3').isotope({
      itemSelector: '.thumbnail',
      masonry: {
        columnWidth: '.thumbnail'
      }
    });
    // filter items on button click
    $('.filters').on( 'click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $container3.isotope({ filter: filterValue });
    });

    var $container4 = $('.work4').isotope({
      itemSelector: '.thumbnail',
      masonry: {
        columnWidth: '.thumbnail'
      }
    });
    // filter items on button click
    $('.filters').on( 'click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $container4.isotope({ filter: filterValue });
    });

    var $container5 = $('.work5').isotope({
      itemSelector: '.thumbnail',
      masonry: {
        columnWidth: '.thumbnail'
      }
    });
    // filter items on button click
    $('.filters').on( 'click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $container5.isotope({ filter: filterValue });
    });
  };

  $(window).load()

  if ($("#rev_slider").length>0) {
    var revapi;
    $(document).ready(function() {
        revapi = jQuery("#rev_slider").revolution({
            sliderType:"standard",
            sliderLayout:"fullscreen",
            delay:9000,
            navigation: {
                arrows:{enable:true}
            },
            gridwidth:1230,
            gridheight:720
        });
    }); /*ready*/
  }

  $('#more-works').click(function(e) {
      if ($(this).hasClass('disable')) {return false;}
      $(this).addClass('disable');
      e.stopImmediatePropagation();
      $.get($(this).attr('href') + '?type=' + $(this).data('type') + '&perpage=' + $(this).data('perpage') + '&page=' + (($('.thumbnails .thumbnail').length/$(this).data('perpage'))+1), function( data ) {
          var newItems = $(data);
          $(".thumbnails").isotope('insert', newItems, function() {
              if ($('.thumbnails .thumbnail').length < $('#more-works').data('total')) { $('#more-works').removeClass('disable');  }
          });
          $('.thumbnails .thumbnail img.new').one("load", function() {
            $('.thumbnails').isotope();
            $(this).removeClass('new');
          });
          if ($('.thumbnails .thumbnail img.new').first().complete)
            $('.thumbnails .thumbnail img.new').first().load();
          if ($('.thumbnails .thumbnail').length < $('#more-works').data('total')) { $('#more-works').removeClass('disable');  }
      })
      e.preventDefault();
  });

  if ($('#map').length>0)
      google.maps.event.addDomListener(window, 'load', initMap);

  function initMap() {
    var lati = $('#map').data('lat');
    var long = $('#map').data('lon');
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: {'lat': parseFloat(lati), 'lng': parseFloat(long)},
      scrollwheel: false,
      styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
    });

    setMarkers(map);
  }

  function setMarkers(map) {
    var lati = $('#map').data('lat');
    var long = $('#map').data('lon');
    var image = {
      url: $('#map').data('marker'),
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(185, 160),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(92, 160)
    };
    var shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: 'poly'
    };
    var marker = new google.maps.Marker({
      position: {lat: parseFloat(lati), lng: parseFloat(long)},
      map: map,
      icon: image,
      shape: shape,
      title: $('#map').data('title'),
      zIndex: 1
    });
  }

  $(".contact-form").submit(function(e) {
    $.ajax({
      type: "POST",
      url: $(this).attr('action'),
      data: $(this).serialize(),
      success: function(data) {
        document.getElementById("contactform").reset();
        $('.send-success').removeClass('hide');
      }
    });
    e.preventDefault();
  });
  $(".contact-form-advanced").submit(function(e) {
    $.ajax({
      type: "POST",
      url: $(this).attr('action'),
      data: $(this).serialize(),
      success: function(data) {
        document.getElementById("complete-contactform").reset();
        $('.send-success').removeClass('hide');
      }
    });
    e.preventDefault();
  });
}
rebirthMain(jQuery);

function hashHandler(){
    this.oldHash = window.location.href;
    this.check;

    var that = this;
    var detect = function(){
        if (that.oldHash!=window.location.href) {
            rebirthMain(jQuery, true)
            that.oldHash = window.location.href;
        }
    };
    this.check = setInterval(function(){ detect() }, 100);
}
var hashDetection = new hashHandler();
