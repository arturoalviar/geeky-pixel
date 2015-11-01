
+function($){
  'use strict';

    var $root = $('html, body');
    var $input = $('.input');
    var $main = $('.main');
    var $nav = $('.nav');
    var $header = $('.site-header');
    var $bannerHeight = $('.banner').outerHeight();

    $input.blur(function(){
        var $this = $(this);
        $this.val() ? $this.addClass('active-label') : $this.removeClass('active-label');
    });

    $nav.on('click', 'a', function(event){
      if( $(this)[0].hash.length > 0 ){
        event.preventDefault();
        $root.animate({scrollTop: $($.attr(this, 'href')).offset().top}, 300);
      }
    });

    $(window).on('scroll' ,function(){
      var $currScroll = $(window).scrollTop();
      if($currScroll > $bannerHeight){
          $header.addClass('site-header-fixed');
          $main.addClass('main-top-margin');
      }

      else if($currScroll < $bannerHeight){
        $header.removeClass('site-header-fixed');
        $main.removeClass('main-top-margin');
      }
    });

}($);
