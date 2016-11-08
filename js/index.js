
$(document).ready(function(){
    var i = 0;
    var a = 1;
    var all_li = $(".banner-pic li").length - 1;
    var circleLi=$(".banner-circle li");
    var key=0;/*控制图片张数*/
    circleLi.on("click",function(){
        i=key=$(this).index();
        banner_change();
        circles();
    });

    function banner_change() {
    a = 0;
    $(".banner-pic li").eq(i).animate({
        opacity: "1"
    }).siblings().animate({
        opacity: "0"
    }, function() {
        a = 1;
    });
    $(".banner-circle li").eq(i).css("background", "#dce2e2").siblings().css("background", "#b4b5b7");
    }
    banner_change();

    /*添加小圆点函数*/
    function circles(){
        circleLi.eq(i).addClass('current').siblings().removeClass('current');
    }

    function banner_change_self() {
        i++;
        if (i > all_li) {
            i = 0;
        }
        banner_change();
    }
    var banner_timer= setInterval(banner_change_self, 2000);
    $(".main-banner").on("mouseover", function() { //鼠标进入轮播区域时，自动切换暂停
        clearInterval(banner_timer);
    })
    $(".main-banner").on("mouseout", function() { //鼠标离开轮播区域时，自动切换继续
        banner_timer = setInterval(banner_change_self, 2000);
    })

    // 鼠标弹窗效果

    $('.sidebar-list').on("mouseover",function (e) {

        $(this).find('.same-pw').show();
        e.stopPropagation();
        e.preventDefault();
    })
    $('.sidebar-list').on("mouseout",function (e) {
        $('.same-pw').hide();
        e.stopPropagation();
        e.preventDefault();
    })

    /*通用轮播-开始-无缝滚动式*/
    var a_i = 0;
    var circleList=$(".circle li");
    var k = 0;
    circleList.on("click",function(){
        circleList=a_i=$(this).index();
        banner_run();
        circles_in();
    });
    function banner_run() { //带动页面所有的共用轮播
        var all_banner = $(document).find(".banners-left").length;
        for (var page = 1; page < all_banner + 1; page++) {
            var _pages = "#pages_" + page;
            banner_self(_pages);
        }
    };

    /*添加小圆点函数*/
    function circles_in(){
        circleList.eq(k).addClass('current').siblings().removeClass('current');
    };

   var banner_time = setInterval(banner_self, 2000); //自动切换
    function banner_self(_pages) {
        var parents = $(_pages) //获取当前页面
        var ul = parents.find(".slide"); //找到当前页面里的轮播
        var li = ul.find("li"); //找到当前页面里轮播的li
        var li_w = li.width(); //获取li的宽度
        var li_length = li.length - 1; //获取li的数量
        var left = (-li_w);
        li.animate({
            left: left + "px"
        }, function() {
            li.eq(0).appendTo(ul); //把第一个LI搬到尾部
            ul.css("left", "0px"); //重置UL的位置
        });
        a_i++;
        if (a_i >= li_length + 1) {
            a_i = 0;
        }
        parents.find(".banner-circle").eq(a_i).addClass("current").siblings().removeClass("current");
    };
    $(".banners-left").on("mouseover", function() { //鼠标进入轮播区域时，自动切换暂停
        clearInterval(banner_time);
    })
    $(".banners-left").on("mouseout", function() { //鼠标离开轮播区域时，自动切换继续
        banner_time = setInterval(banner_self, 2000);
    })
    /*通用轮播--结束*/


})
