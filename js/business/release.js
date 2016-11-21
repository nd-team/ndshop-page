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
    });
    //图片拖曳
    var $srcImg = null;
    // 开始拖动
    $('.pic-list li .drop-img').bind('dragstart',function(){
        $srcImg = $(this).parent();
    });
    // 拖动到.drop-left,.drop-right上方时触发的事件
    $(".drop-left,.drop-right").bind("dragover", function(event) {
        // 必须通过event.preventDefault()来设置允许拖放
        event.preventDefault();
    });
    // 结束拖动放开鼠标的事件
    $(".drop-left").bind("drop", function(event) {
        event.preventDefault();
        if($srcImg[0] != $(this).parent()[0]) {
            $(this).parent().before($srcImg);
        }
    });
    $(".drop-right").bind("drop", function(event) {
        event.preventDefault();
        if($srcImg[0] != $(this).parent()[0]) {
            $(this).parent().after($srcImg);
        }
    });

    //图片视频切换
    $('.tabs a').click(function(){
        var dataTitle = $(this).attr('data-title');
        $(this).parent().addClass('active').siblings().removeClass('active');
        $('.media-list').hide();
        $('.'+dataTitle).show();
    });
});
