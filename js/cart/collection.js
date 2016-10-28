$(document).ready(function(){
    $('.coll-filter .coll-proshop a').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.coll-filter dl dd a').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.coll-page li a').click(function(){
        $(this).addClass('active').parent().siblings().children().removeClass('active')
    });
    var pagecurr
    $('.coll-page .lastpage').click(function(){
        pagecurr=$('.coll-page .active').parent().index();
        pagecurr--;
        if(pagecurr<0){
            pagecurr=0;
        }
        $('.coll-page  li a').removeClass('active');
        $('.coll-page  li').eq(pagecurr).children().addClass('active');
    })
    $('.coll-page .nextpage').click(function(){
        pagecurr=$('.coll-page .active').parent().index();
        pagecurr++;
        var pageLen = $('.coll-page ul li').length;
        if(pagecurr>=pageLen){
            pagecurr=pageLen-1;
        }
        $('.coll-page  li a').removeClass('active');
        $('.coll-page  li').eq(pagecurr).children().addClass('active');
    })
});