$(document).ready(function(){
    $('.coll-filter .coll-proshop a').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var dataTitle = $(this).attr('data-title');
        $('.coll-main .coll-tabs').hide();
        $('.coll-'+dataTitle).show();
        if(dataTitle=="shoplist"){
            $('.sortfil-allselect').show();
        }else{
            $('.sortfil-allselect').hide();
        }
        //收藏店铺

        var collShopLen = $('.coll-shoplist .coll-shopcon').length;
        for(var i=0; i<collShopLen; i++){
            var shopHead = $('.coll-shopcon').eq(i).children('.shop-head').height();
            var shopMain = $('.coll-shopcon').eq(i).children('.shop-main').height();
            if(shopHead>shopMain){
                $('.coll-shopcon').eq(i).children('.shop-main').height(shopHead);
            }else {
                $('.coll-shopcon').eq(i).children('.shop-head').height(shopMain);
            }
        }
    });
    $('.coll-filter dl dd:not(".fr") a').click(function(){
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
    });

    $('.coll-shoplist .shop-main .profil a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active')
    });
});