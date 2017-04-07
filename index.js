$(function() {
  
  $(window).scroll(function () {
      if ($(this).scrollTop() > 30) {
         $('.main-menu').addClass('stiky');
      } else {
         $('.main-menu').removeClass('stiky');
      }
  });
  
  $('.showhide.more, .showhide.less').click(function() {
   $(this).parent().parent().find('.serve').toggleClass('active');
  });
  
  $('.btn-bur').click(function() {
    $('.main-menu-link').removeClass('slideleft');
    $('.main-menu-link').addClass('slideright');
  });
  $('.btn-clo').click(function() {
    $('.main-menu-link').removeClass('slideright');
    $('.main-menu-link').addClass('slideleft');
  });
  
//  $.urlParam = function(name){
//    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
//    return results[1] || 0;
//  }
//  if($.urlParam('back')){
//    $('.main-head').css('background','url("assets/back/'+$.urlParam('back')+'.jpg") center / cover')
//  }
  
  
//  $(".post-entry p:contains('[mineko_call_to_action]')").css( "display", "none" );
//  $(".post-entry p:contains('[mineko_button style=“solid“]')").css( "display", "none" );
//  $(".post-entry p:contains('[/mineko_call_to_action]')").css( "display", "none" );
  
});
