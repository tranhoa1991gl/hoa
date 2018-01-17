
$(document).ready(function() {
RangeSlider();
backtotop();
});


function RangeSlider() {
  var $range = $(".js-range-slider");
  $range.ionRangeSlider({
      type: "double",
      min: 0,
      max: 15000000,
      from: 0,
      to: 15000000,
      prefix:'Đ',
      onFinish: function (num) {
           $('.collection .grid__item_range').hide().filter(function() {
              var price = parseInt($(this).data("price"), 10);
              return price >= num.from && price <= num.to;
          }).show();
      }
  }); 
};
function backtotop(){$("#back-top").hide();$(function () {$(window).scroll(function () {if ($(this).scrollTop() > 100) {$('#back-top').fadeIn();} else {$('#back-top').fadeOut();}});$('#back-top a').click(function () {$('body,html').animate({scrollTop: 0}, 800);return false;});});}


jQuery(window).load(function(){
      setTimeout(function(){
       
        
         var hiddenmodal = getCookie('hiddenmodal');
        
         if (hiddenmodal == "") {
                      $.fancybox.open({
                      padding: 0,
                      overlayOpacity: 0.3,
                      overlayColor: '#333333',
                      'beforeLoad': function(){
                          $("#popup-newsletter").removeClass('hide');
                          var Form = $("mc-embedded-subscribe-form").clone();
                      },
                      href: "#popup-newsletter",
                      helpers:  {
                        overlay : true
                      },
                      afterClose : function(){
                          $("#popup-newsletter").addClass('hide');
                          setCookie('hiddenmodal', 1, 2);
                      }
                  });
          }
      }, 0*1000);
    });
