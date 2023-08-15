$(document).ready(function(){

$(".accordion-wrap").on("click", function(){   
    $(this).children().eq(1).slideToggle(300);  
    $(this).children().eq(0).toggleClass("accordion-no-bar");
    $(this).siblings().find(".accordion-header").removeClass("accordion-gold");
    $(this).siblings().find(".accordion-header i").removeClass("rotate-fa");
    $(this).find(".accordion-header").toggleClass("accordion-gold");
    $(this).find(".fa").toggleClass("rotate-fa");

    $(".accordion-wrap .accordion-text").not($(this).children().eq(1)).slideUp(300);
});
  
$('.carts').slick({
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows:false,
                      fade: false,
                      asNavFor: '.iss'
                    });
                    $('.iss').slick({
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      asNavFor: '.carts',
                      dots: false,
                      focusOnSelect: true,
                      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows:false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows:false
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows:false
          }
        },


          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              dots:false,
              slidesToScroll: 1,
              dots: false,
              arrows:false
            }
          }
      ]

});


$('.slidss').slick({
                      slidesToShow: 4,
                      slidesToScroll: 1,
                      arrows:true,
                      fade: false,
                      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows:false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows:false
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows:false
          }
        },


          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              dots:false,
              slidesToScroll: 1,
              dots: false,
              arrows:false
            }
          }
      ]

});

$('.next-arrow').on('click', function() {
  $('.slidss-is').slick('slickNext');
});

$('.prev-arrow').on('click', function() {
  $('.slidss-is').slick('slickPrev');
});

$('.slidss-is').slick({
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows:false,
                      fade: false,
                      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows:false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows:false
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows:false
          }
        },


          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              dots:false,
              slidesToScroll: 1,
              dots: false,
              arrows:false
            }
          }
      ]

});


$('body').on('click', '.number-minus, .number-plus', function(){
        var $row = $(this).closest('.number');
        var $input = $row.find('.number-text');
        var step = $row.data('step');
        var val = parseFloat($input.val());
        if ($(this).hasClass('number-minus')) {
            val -= step;
        } else {
            val += step;
        }
        $input.val(val);
        $input.change();
        return false;
    });
 
    $('body').on('change', '.number-text', function(){
        var $input = $(this);
        var $row = $input.closest('.number');
        var step = $row.data('step');
        var min = parseInt($row.data('min'));
        var max = parseInt($row.data('max'));
        var val = parseFloat($input.val());
        if (isNaN(val)) {
            val = step;
        } else if (min && val < min) {
            val = min;  
        } else if (max && val > max) {
            val = max;  
        }
        $input.val(val);
});


$('ul.tabs li').click(function(){
          var tab_id = $(this).attr('data-tab');

          $('ul.tabs li').removeClass('current');
          $('.tab-content').removeClass('current');

          $(this).addClass('current');
          $("#"+tab_id).addClass('current');
  });





});