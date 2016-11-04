$(document).ready(function(){
    $('.info-con .infonav a').click(function(){
        var dataTitle=$(this).attr('data-title');
        $(this).parent().addClass('active').siblings().removeClass('active')
        $('.info-con .tabs').hide();
        $('.'+dataTitle).show()
    });

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
        $(this).siblings('.forbind').show();
    })
});