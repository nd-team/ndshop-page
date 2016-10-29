$(document).ready(function(){

    $('.brand-con li a:not(:last)').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active')
    });

    $('.sear-filter a').click(function(){
        $(this).parent().addClass('active').siblings('li').removeClass('active');
    })



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
});