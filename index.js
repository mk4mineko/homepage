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
  
  
  
  var getUrlParameter = function getUrlParameter(sParam) {
      var sPageURL = decodeURIComponent(window.location.search.substring(1)),
          sURLVariables = sPageURL.split('&'),
          sParameterName,
          i;

      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');

          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : sParameterName[1];
          }
      }
  };
  
  var back = getUrlParameter('back');
  
  if(back){
    $('.main-head').css('background','url("assets/back/'+back+'.jpg") center / cover')
  }
  
});
