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