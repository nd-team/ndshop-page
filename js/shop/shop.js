/**
 * Created by ike on 2016/10/27.
 */
    /*结算切换*/
function myclick(selector,classname,classname2) {
    $(selector).click(
      function(){
            $(this).addClass(classname).siblings().removeClass(classname);
           //$('classname2:eq(' + $(this).index() + ')').show().siblings().hide();
             $(classname2).eq($(this).index()).show().siblings().hide();
         })
     }
function mytoggle(selector1,classname3,classname4) {
    $(selector1).click(
        function(){
         $(classname3).hide();
         $(classname4).show();
        })
    }
    $(function(){
        myclick('.card-tab-title li','quick-pay','.bank-cd>div');
       /*$('.card-tab-title li').click(function() {
            $(this).addClass('quick-pay').siblings().removeClass('quick-pay');
            $('.bank-cd>div:eq(' + $(this).index() + ')').show().siblings().hide();
        })*/
   /*订单详情*/
       $(".order-bar li").click(function () {
            $(".order-bar li").children().removeClass("order-bar-current");
            $(this).children().addClass('order-bar-current');
            $(".state-frame").css("display", "none")
            $(".state-frame").eq($(this).index()).css("display", "block")
        })
        /*售后服务*/
         mytoggle('.return-goods','.return-goods,.refund-me','.will-return');
           /* $('.return-goods').click(function(){
                $('.return-goods,.refund-me').hide();
                $('.will-return').show();
            })*/
           $('.refund-me').click(function(){
                $('.return-goods,.refund-me').hide();
                $('.will-return').show();
                $('.ret-main>div:eq('+$(this).index()+')').show().siblings().hide();
                $('.ret-tab a').eq(1).addClass('ret-active').siblings().removeClass('ret-active');
            })
           myclick('.ret-tab a','ret-active','.ret-main>div');
            /*$('.ret-tab a').click(function(){
                $(this).addClass('ret-active').siblings().removeClass('ret-active');
                $('.ret-main>div:eq('+$(this).index()+')').show().siblings().hide();
            })*/
            $('.add-comment,.baby-article').click(function(){
            $('.baby-details').find(".baby-det-right").eq(1).hide();
            $('.baby-details').find(".baby-det-right").eq(0).show();
        })
            $('.eva-fold').click(function(){
            $('.baby-details').find(".baby-det-right").eq(0).hide();
            $('.baby-details').find(".baby-det-right").eq(1).show();
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
/*information*/
        $('.receipt-title a').click(function(){
            $('.receipt-title a').removeClass('r-now');
            $(this).addClass('r-now');
        })

    })
