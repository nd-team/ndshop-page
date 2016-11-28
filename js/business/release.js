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
    
    //面包屑导航、点击效果
    function releaseClick(){
        $('.category a').click(function(){
            $(this).addClass('active').parent().siblings().children().removeClass('active');
            $('.subcategory').show();
            $('.subcategory .left').show();
            var crumb1 = $(this).text();
            $('.crumbs dd').eq(0).text(crumb1).show().siblings('dd').hide();
            $('.subcategory a').removeClass('active');
            $('.btn a').addClass('disabled');
            $('.subcategory .right').addClass('disabled')
        });
        $('.subcategory .left a').click(function(){
            $('.subcategory .right').show();
            var crumb2 = $(this).children('span').text();
            $('.crumbs dd').eq(1).text(crumb2).show().next('dd').hide();
            $(this).addClass('active').parent().siblings().children().removeClass('active');
            $('.subcategory .right a').removeClass('active');
            $('.btn a').addClass('disabled');
            $('.subcategory .right').removeClass('disabled')
        })
        $('.subcategory .right a').click(function(){
            var crumb3 = $(this).children('span').text();
            $('.crumbs dd').eq(2).text(crumb3).show();
            $(this).addClass('active').parent().siblings().children().removeClass('active');
            $('.btn a').removeClass('disabled');
        });
    }
    releaseClick();




    
    
    

    //产品规则选择
    $('.t-con .spec .pro-option').click(function(){
        var dataTitle = $(this).find('option:selected').attr('data-title');
        $('.t-con .spec').find('.'+dataTitle).show();
    });

    //品牌、净含量点击
    $('.brand ul li a').click(function(){
        $(this).addClass('active').parent().siblings().children().removeClass('active')
    });

    $('.netweight ul li a').click(function(){
        $(this).addClass('active');
        var thisName = $(this).text();
        var staLen = $('.netweight .status p').length;

        for(var i=0; i<staLen; i++){
            var staName = $('.netweight .status p').children('span').eq(i).text();
            var has = false;

        }
        var elem = '<p><span>'+thisName+'</span><input type="text" placeholder="含量"> %</p>';
        $('.netweight .status').append(elem);




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

    //款式选择
    $('.style li >input').click(function(){
        $(this).next('article').show().parent().siblings().children('article').hide();
    });
    $('.style li article .art-con a').click(function(){
        var val = $(this).text();
        $(this).parents('li').children('input').val(val);
        $('.style li article').hide();
    })
    //图片拖曳
    var $srcImg = null;
    // 开始拖动
    $('.media-list li .drop-img').bind('dragstart',function(){
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


