$(document).ready(function(){
    $('.address-list .set-default').click(function(){

        $(this).parents('.address-list').siblings().find('.default').hide();
        $(this).parents('.address-list').siblings().find('.set-default').show();
        $(this).parents('.address-list').find('.default').addClass('show').show();
        $(this).hide();
    })
})