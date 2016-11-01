$(document).ready(function(){

    var listLen = $('.order-list').length;
    for(var i=0;i<listLen; i++){
        var listHeight = $('.order-list').eq(i).children('.list-con').height();
        $('.order-list').eq(i).children('.list-con').children('div').height(listHeight);
    }

    $('.order-page li a').click(function(){
        $(this).addClass('active').parent().siblings().children().removeClass('active')
    });
    $('.order-page .lastpage').click(function(){
        var current = $('.order-page .active').parent().index();
        current--;
        if(current<=0){
            current=0;
        }
        $('.order-page li a').removeClass('active')
        $('.order-page li').eq(current).children().addClass('active');
    });
    $('.order-page .nextpage').click(function(){
        var current = $('.order-page .active').parent().index();
        current++;
        var pagelen=$('.order-page li').length;
        if(current>=pagelen){
            current=pagelen-1;
        }
        $('.order-page li a').removeClass('active')
        $('.order-page li').eq(current).children().addClass('active');
    });

//推荐：猜你喜欢page页
    $('.recom-page button.next').click(function(){
        var current = $('.recom-page li a.active').parent().index();
        var reconLen = $('.recom-page li').length;
        current++;
        if(current >=reconLen){
            current=0;
        }
        $('.recom-page li a').removeClass('active');
        $('.recom-page li').eq(current).children('a').addClass('active');

        $('.recom-con .recom-list').removeClass('show');
        $('.recom-con .recom-list').eq(current).addClass('show');
    });
    $('.recom-page li a').click(function(){
        var current = $(this).parent().index();
        $('.recom-page li a').removeClass('active');
        $(this).addClass('active');
        $('.recom-con .recom-list').removeClass('show');
        $('.recom-con .recom-list').eq(current).addClass('show');
    });
});