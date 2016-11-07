$(document).ready(function(){
    $('#login .login-tabs a').click(function(){
        var dataTitle = $(this).attr('data-title');
        $(this).addClass('active').siblings().removeClass('active');
        $('.tabs-page').hide();
        $('.'+dataTitle).show();
    });
    $('.shixiao').click(function(){
        $('.imgbg').show();
    });


    //注册和修改密码
    $('#step .stepmain .submit').click(function(){
        var dataTitle = $(this).attr('data-title');
        console.info(dataTitle);
        $('.stepmain').hide();
        $('.'+dataTitle).show();
    });

    //系统消息

    //系统消息分页
    $('.news-system .systempages ul li a').click(function(){
        $(this).addClass('active').parent().siblings().children().removeClass('active')
    });
    $('.news-system .systempages .firstpage').click(function(){
        $('.news-system .systempages ul li a').removeClass('active');
        $('.news-system .systempages ul li').eq(0).children().addClass('active');
    });

    $('.news-system .systempages .endpage').click(function(){
        var pageLen = $('.news-system .systempages ul li').length;
        $('.news-system .systempages ul li a').removeClass('active');
        $('.news-system .systempages ul li').eq(pageLen-1).children().addClass('active')
    });

    $('.news-system .systempages .lastpage').click(function(){
        var current = $('.news-system .systempages .active').parent().index();
        current--;
        if(current<=0){
            current=0;
        }
        $('.news-system .systempages ul li a').removeClass('active');
        $('.news-system .systempages ul li').eq(current).children().addClass('active')
    });
    $('.news-system .systempages .nextpage').click(function(){
        var current = $('.news-system .systempages .active').parent().index();
        var pageLen = $('.news-system .systempages ul li').length;
        current++;
        if(current>=pageLen){
            current=pageLen-1;
        }
        $('.news-system .systempages ul li a').removeClass('active');
        $('.news-system .systempages ul li').eq(current).children().addClass('active')
    });

    //消息选中
    $('.news-system .news-system-con input').click(function(){
        $('.news-system .news-system-con li').removeClass('active');
        $(this).parent().addClass('active');
    })
    //私信
    $('.news-private .private-list a.text').click(function(){
        $('.news-private').hide();
        $('.news-list-con').show();
    });

    $('.news-list-con .news-list-return').click(function(){
        $('.news-private').show();
        $('.news-list-con').hide();
    });

    //私信分页
    //系统消息分页
    $('.news-private .newpages ul li a').click(function(){
        $(this).addClass('active').parent().siblings().children().removeClass('active')
    });
    $('.news-private .newpages .firstpage').click(function(){
        $('.news-private .newpages ul li a').removeClass('active');
        $('.news-private .newpages ul li').eq(0).children().addClass('active');
    });

    $('.news-private .newpages .endpage').click(function(){
        var pageLen = $('.news-private .newpages ul li').length;
        $('.news-private .newpages ul li a').removeClass('active');
        $('.news-private .newpages ul li').eq(pageLen-1).children().addClass('active')
    });

    $('.news-private .newpages .lastpage').click(function(){
        var current = $('.news-private .newpages .active').parent().index();
        current--;
        if(current<=0){
            current=0;
        }
        $('.news-private .newpages ul li a').removeClass('active');
        $('.news-private .newpages ul li').eq(current).children().addClass('active')
    });
    $('.news-private .newpages .nextpage').click(function(){
        var current = $('.news-private .newpages .active').parent().index();
        var pageLen = $('.news-private .newpages ul li').length;
        current++;
        if(current>=pageLen){
            current=pageLen-1;
        }
        $('.news-private .newpages ul li a').removeClass('active');
        $('.news-private .newpages ul li').eq(current).children().addClass('active')
    });

})
