
+function($){
  'use strict';

    var $root = $('html, body');
    var $input = $('.input');
    var $main = $('.main');
    var $header = $('.site-header');
    var $bannerHeight = $('.banner').outerHeight();

    $input.blur(function(){
        var $this = $(this);
        $this.val() ? $this.addClass('active-label') : $this.removeClass('active-label');
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
