$(document).ready(function(){
    $('#login .login-tabs a').click(function(){
        var dataTitle = $(this).attr('data-title');
        $(this).addClass('active').siblings().removeClass('active');
        $('.tabs-page').hide();
        $('.'+dataTitle).show();
    });
    $('.shixiao').click(function(){
        $('.imgbg').show();
    })
})
