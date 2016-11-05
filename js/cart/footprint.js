$(document).ready(function(){
   $('.footprint-nav ul li a').click(function(){
       $('.footprint-nav ul li a').removeClass('active')
       $(this).addClass('active');
   });
    var lineHeight = $('.footprint-main').height();
    $('.footprint-main .footline').height(lineHeight);
    $(window).scroll(function(){
        var wst = $(window).scrollTop();
        if(wst>lineHeight){
            wst=lineHeight;
        }
        $('.footprint-main .footline-blue').animate({'height':wst},70);

    });

    $('.print-con .x').click(function(){

        $(this).parent().remove()
        
    });
    $('.print-title a').click(function(){
        $(this).parents('.footprint-list').remove();
        lineHeight = $('.footprint-main').height();
        $('.footprint-main .footline').height(lineHeight);
    })
});