/**
 * Created by ike on 2016/10/27.
 */
window.onload = function(){
    /*结算切换*/
    $(function(){
        $('.card-tab-title li').click(function(){
            $(this).addClass('quick-pay').siblings().removeClass('quick-pay');
            $('.bank-cd>div:eq('+$(this).index()+')').show().siblings().hide();
       })

     /*未封装的函数*/
            $('.return-goods').click(function(){
                $('.return-goods,.refund-me').hide();
                $('.will-return').show();

            })
            $('.refund-me').click(function(){
                $('.return-goods,.refund-me').hide();
                $('.will-return').show();
                $('.ret-main>div:eq('+$(this).index()+')').show().siblings().hide();
                $('.ret-tab a').eq(1).addClass('ret-active').siblings().removeClass('ret-active');

            })
            $('.ret-tab a').click(function(){
                $(this).addClass('ret-active').siblings().removeClass('ret-active');
                $('.ret-main>div:eq('+$(this).index()+')').show().siblings().hide();
            })
    /*未封装的函数*/



    })


    /*店铺内页*/

    $('.inactive').click(function(){
        if($(this).siblings('ul').css('display')=='none'){
            $(this).parent('li').siblings('li').removeClass('store-inactive');
            $(this).addClass('store-inactive');
            $(this).siblings('ul').slideDown(100).children('li');

        }else{
            $(this).removeClass('store-inactive');
            $(this).siblings('ul').slideUp(100);


        }
    })

    $('.right-option a').click(function() {
        $(this).addClass('current').siblings().removeClass('current')
    })
    $(".listnum").first().addClass("present")
    $('.menu a').not(".listnum3").click(function() {
        $(this).addClass('present').siblings().removeClass('present')
    })

/*order*/

        $('.guess-button button a.guess-reload-button').click(function () {
            var current = $('.guess-pagination  a.guess-current').index();
            var reconLen = $('.guess-pagination a').length;
            current++;
            if (current >= reconLen) {
                current = 0;
            }
            $('.guess-pagination  a').removeClass('guess-current');
            $('.guess-pagination a').eq(current).addClass('guess-current');

            $('.guess-content .guess-item').removeClass('show');
            $('.guess-content .guess-item').eq(current).addClass('show');
        })
        $('.guess-pagination a').click(function () {
            var current = $(this).index();
            $('.guess-pagination a').removeClass('guess-current');
            $(this).addClass('guess-current');
            $('.guess-content .guess-item').removeClass('show');
            $('.guess-content .guess-item').eq(current).addClass('show');
        })




    /*店铺banner*/
    $(".banner-shop").hover(function(){
            $(this).find(".prev,.next").stop(true, true).fadeTo("show", 0.5)
        },
        function(){
            $(this).find(".prev,.next").fadeOut()
        });
    $(".banner-shop").slide({
        titCell: ".hd ul",
        mainCell: ".bd ul",
        effect: "fold",
        autoPlay: true,
        autoPage: true,
        trigger: "click",
        startFun: function(i) {
            var curLi = jQuery(".banner-shop .bd li").eq(i);
            if ( ! curLi.attr("_src")) {
                //.css("background-image", curLi.attr("_src")).removeAttr("_src")
            }
        }
    });





}