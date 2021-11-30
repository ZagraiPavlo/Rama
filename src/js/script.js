//$(document).ready(function(){
	  // $('.slider').slick({
	   //	arrows:true,
	   //	slidesToShow:1,
	  // });
	//});

let slider;

$(document).ready(function(){
  $('.slider').on('init',function(event,slick){
   

  });


  slider = $('.slider').slick({
    slidesToShow: 1,
    arrows: false,
  });

  slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    let count = slick.slideCount;
  });
});

$('#next').on('click',function(){
  slider.slick('slickNext');
})

$('#prev').on('click',function(){
  slider.slick('slickPrev');
})