// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .


$(window).on('scroll', function () {

  $(".JS_ScrollAnimationItem").each(function () {
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight) {
      $(this).addClass('isActive');
    } else {
      $(this).removeClass('isActive');
    }
  });

  var navPos = jQuery('#global-nav').offset().top; // グローバルメニューの位置
  var navHeight = jQuery('#global-nav').outerHeight(); // グローバルメニューの高さ
  if (100 < jQuery(this).scrollTop()) { // ◯px以上スクロールしたら
    jQuery("#global-nav").css("height", "100");
    jQuery('#global-nav').addClass('m_fixed');
  } else {
    jQuery("#global-nav").css("height", "680");
    jQuery('#global-nav').removeClass('m_fixed');
  }
});