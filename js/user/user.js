$(document).ready(function(){
    $('.info-con .infonav a').click(function(){
        var dataTitle=$(this).attr('data-title');
        $(this).parent().addClass('active').siblings().removeClass('active')
        $('.info-con .tabs').hide();
        $('.'+dataTitle).show()
    });

    //用户信息兴趣爱好点击效果
    $('.info-interest a').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })


    //修改密码
    $('.modifypass-con .submit').click(function(){
        var dataTitle=$(this).attr('data-title');
        var dataStep=$(this).attr('data-step');
        $('.step').hide();
        $('.'+dataTitle).show();
        $('.bar dd').hide();
        $('.bar dl').removeClass('current');
        $('.bar').children('.'+dataStep).addClass('current')
        $('.bar').children('.'+dataStep).children('dd').show();
        var currindex = $('.bar').children('.'+dataStep).index();
        $('.bar dl').eq(currindex-1).addClass('past')
    });
    
    //绑定
    $('.bind-con .bingding').click(function(){
        $(this).siblings('.forbind').show("slow");
    });

    //收货地址
    $('.address-list .set-default').click(function(){
        $(this).parents('.address-list').siblings().find('.default').hide();
        $(this).parents('.address-list').siblings().find('.set-default').show();
        $(this).parents('.address-list').find('.default').addClass('show').show();
        $(this).hide();
    });
    
    //收货地址模态框
    //打开模态框
    $('.newaddress a').click(function(e){
        $('body').css("overflow","hidden")
        $('#modal').show();
        $('#modalbg').show();
        e.stopPropagation();
    })
    $('#modal .modal-close').click(function(e){
        $('body').css("overflow","auto")
        $('#modal').hide();
        $('#modalbg').hide();
        e.stopPropagation();
    });


});