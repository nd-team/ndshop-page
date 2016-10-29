$(document).ready(function(){
    $('.imglist ul li a').mouseover(function(){
        var dataimg =$(this).attr('data-img');
        $(this).parent().addClass('current').siblings().removeClass('current');
        $('.bigimg a img[data-img="'+ dataimg +'"]').addClass('hover').siblings().removeClass('hover');
    });
    $('.imglist .left').click(function(){
        var curr = $('.imglist ul li.current').index();
        curr--;
        $('.imglist ul li').eq(curr).addClass('current').siblings().removeClass('current');
        var dataimg =$('.imglist ul li.current').children('a').attr('data-img');
        $('.bigimg a img[data-img="'+ dataimg +'"]').addClass('hover').siblings().removeClass('hover');
    })

    $('.imglist .right').click(function(){
        var curr = $('.imglist ul li.current').index();
        curr++;
        var imgLen = $('.imglist ul li').length;
        if(curr>=imgLen){
            curr=0;
        }
        $('.imglist ul li').eq(curr).addClass('current').siblings().removeClass('current');
        var dataimg =$('.imglist ul li.current').children('a').attr('data-img');
        $('.bigimg a img[data-img="'+ dataimg +'"]').addClass('hover').siblings().removeClass('hover');
    })

    
    
    
    $('.pronav-tabs a').on('click',function(){
        $('.pronav-tabs a').removeClass('active');
        $(this).addClass('active');
        var tabTitle = $(this).attr('title');
        $('.prodetail').children('div').hide()
        $('.'+tabTitle).show()
    })
    $('.choice dd a').on('click',function(){
        $(this).parents().children().removeClass('active')
        $(this).addClass('active');
    })
    function proNum(){
        var count=$('.proinfo-num input').val();
        $('.proinfo-num .num-add').click(function(){
            count++;
            $('.proinfo-num input').val(count)
        });
        $('.proinfo-num .num-reduce').click(function(){
            count--;

            if(count<1){
                count=1;
            }
            $('.proinfo-num input').val(count);
        })
    }
    proNum();


    //评价分页
    $('.rate-list-page ul li a').click(function(){
        $(this).addClass('active').parent().siblings().children('a').removeClass('active');
    })
    $('.rate-list-page .lastpage').click(function(){
        var current = $('.rate-list-page ul li a.active').parent().index();
        current--;
        if(current<0){
            current=0;
        }
        $('.rate-list-page ul li a').removeClass('active');
        $('.rate-list-page ul li').eq(current).children().addClass('active');
    });

    $('.rate-list-page .nextpage').click(function(){
        var current = $('.rate-list-page ul li a.active').parent().index();
        current++;
        var pageLen = $('.rate-list-page ul li').length;
        if(current>=pageLen){
            current = pageLen-1;
        }
        $('.rate-list-page ul li a').removeClass('active');
        $('.rate-list-page ul li').eq(current).children().addClass('active');

    })

})