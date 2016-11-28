$(document).ready(function(){
    $('.sear-page ul li a').click(function(){
        $(this).parent().addClass('active').siblings('li').removeClass('active');
    });
    var current
    $('.sear-page .last').click(function(){
        current = $('.sear-page .active').index();
        current--;
        if(current <= 0){
            current = 0;
        }
        $('.sear-page ul li').eq(current).addClass('active').siblings('li').removeClass('active');
    });

    $('.brand-con li a:not(:last)').click(function(){
        $(this).addClass('active').parent().siblings().children().removeClass('active')
    });

    $('.sear-filter a').click(function(){
        $(this).parent().addClass('active').siblings('li').removeClass('active');
    });


    $('.sear-page ul li a').click(function(){
        $(this).parent().addClass('active').siblings('li').removeClass('active');
    });
    var currentPage
    $('.sear-page .last').click(function(){
        currentPage = $('.sear-page .active').index();
        currentPage--;
        if(currentPage<=0){
            currentPage=0;
        }
        $('.sear-page ul li').eq(currentPage).addClass('active').siblings('li').removeClass('active');

    });
    $('.sear-page .next').click(function(){
        currentPage = $('.sear-page .active').index();
        currentPage++;
        $('.sear-page ul li').eq(currentPage).addClass('active').siblings('li').removeClass('active');

    });
    $('.order-recommend .recom-page button').click(function(){

    })
});