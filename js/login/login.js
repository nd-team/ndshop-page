$(document).ready(function(){
    $('#login .login-tabs a').click(function(){
        var dataTitle = $(this).attr('data-title');
        $(this).addClass('active').siblings().removeClass('active');
        $('.tabs-page').hide();
        $('.'+dataTitle).show();
    });
    $('.shixiao').click(function(){
        $('.imgbg').show();
    });


    //注册和修改密码
    $('#step .stepmain .submit').click(function(){
        var dataTitle = $(this).attr('data-title');
        $('.step-pic img').hide();
        $('.stepmain').hide();
        $('.step-pic img[title="'+dataTitle+'"]').show()
        $('.'+dataTitle).show();
    });



})
