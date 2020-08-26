$(function () {
  'use strict';
  $(window).scroll(function () {
    var navbar = $('.navbar');
  
  /*Start shortcut if else statement*/
  $(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled'); 
  /*End shortcut if else statement*/
});

  //deal with tabs
  $('.tab-switch li').click(function () {

  //add  selected class to active link  
    $(this).addClass('selected').siblings().removeClass('selected');

  //hide all divs
    $('.tabs-section .tabs-content > div').hide();

    //show div connected with this link
    $($(this).data('class')).show();
  
  });
});


