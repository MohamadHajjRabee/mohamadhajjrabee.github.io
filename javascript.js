$(document).ready(function() {

    $(".nav-item").on("click" , function(){
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });
    var sections = $('section')
  , nav = $('ul')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('li').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').parent("li").addClass('active');
    }
    if($('.About').hasClass("active") || $('.Contact').hasClass("active")){
      $('.navbar').find('h2').css("color","#f8dbc2");
      $('.navbar').find('a').css("color","#f8dbc2");
      $('.navbar').find('.nav-item.active').find('a').css("color","#38b8e9");
    }else{
      $('.navbar').find('h2').css("color","black");
      $('.navbar').find('a').css("color","black");
      $('.navbar').find('.nav-item.active').find('a').css("color","#38b8e9");
    }
    if($('.About').hasClass("active")){
      $('.About').find('img').addClass('active');
      $('.About').find('div').addClass('active');
    }
    if($('.Skills').hasClass("active")){
      $('.Skills').find('.texts').addClass('active');
    }
    if($('.Contact').hasClass("active")){
      $('.Contact').find('.contact-div').addClass('active');
    }
    });



});
});