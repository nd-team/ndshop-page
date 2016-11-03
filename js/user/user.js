$(document).ready(function(){
    $('.info-con .infonav a').click(function(){
        var dataTitle=$(this).attr('data-title');
        $(this).parent().addClass('active').siblings().removeClass('active')
        $('.info-con .tabs').hide();
        $('.'+dataTitle).show()
    });
})