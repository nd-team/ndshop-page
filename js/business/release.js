$(window).resize(function(){
    var w = $('.main-table .t-tr').width();
    var nw = w-131-60;
    $('.main-table .t-con').width(nw);
    var sub_tw = nw-90-42;
    $('.spec').width(sub_tw)
});

$(document).ready(function(){
    var w = $('.main-table .t-tr').width();
    var nw = w-131-60;
    $('.main-table .t-con').width(nw);
    var sub_tw = nw-90-42;
    $('.spec').width(sub_tw);

    //产品规则选择

    $('.t-con .spec .pro-option').click(function(){
        var dataTitle = $(this).find('option:selected').attr('data-title');
        $('.t-con .spec').find('.'+dataTitle).show();
    });

    //颜色选择
    $('.color .select-color').click(function(){
        $('.colorbox').show();
        $('.color-style').css('z-index','99')
    });
    $('.color .colorbox p a').click(function(){
        $('.colorbox').hide();
        var val = $(this).text();
        $('.color .select-color').val(val);
        $('.color .select-color').siblings('input[type="checkbox"]').attr('checked',true);
    })

})
