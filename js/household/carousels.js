
$(document).ready(function () {

    var slide=$(".slide");
    var circleLi=$().find(".same-circle li");
    var slideLi=$(".same-banner li");/*把slide的li定义一个变量，然后通过变量来克隆*/
    // var W=$(window).width();
    var W = slideLi.width(); //获取li的宽度
    var left = (-W);
    $(".slide li").width(W);

    /*克隆节点*/
    slide.append(slideLi.eq(0).clone(true));

    var key=0;/*控制图片张数*/
    var circle=0;
    var a = 0;
    circleLi.on("click",function(){
        circle=key=$(this).index();
        run();
        circles();
    })
    /*运动函数*/
    function run(){
        var parents = $(this).parents(".quality-life-same"); //获取当前楼层
        var ul = $(parents).find(".same-banner"); //找到当前楼层里的轮播
        var slideLi = $(parents).find(".same-banner>li"); //找到当前楼层里轮播的li
        var li_w = slideLi.width(); //获取li的宽度
        var li_length = slideLi.length - 1; //获取li的数量
        var left = (-li_w);
        ul.stop().animate({"left":-key*left}, 500);
        a++;
        if (a >= li_length + 1) {
            a = 0;
        }
        $(parents).find(".same-circle li").eq(a).addClass("current").siblings().removeClass("current");

    }

    /*添加小圆点函数*/
    function circles(){
        circleLi.eq(circle).addClass('current').siblings().removeClass('current');
    }

    function floor_shuffling_self() { //带动页面所有的共用轮播
        var all_shuffling = $(document).find(".same-banner").length;
        for (var floor = 1; floor < all_shuffling + 1; floor++) {
            var _floor = "#floor_" + floor;
            shuffling_self(_floor);
        }
    }
    /*定时器开始*/
    var timer=setInterval(autoplay, 2000);
    function autoplay(){
        key++;
        if(key>slideLi.length){
            key=1;
            slide.css("left",0);
        }
        run();
        circle++;
        if(circle>2){
            circle=0;
        }
        circles();

    }

    /*鼠标经过效果*/
    $(".banner").hover(function() {
        clearInterval(timer);
        timer=null;/*释放内存资源*/
    }, function() {
        clearInterval(timer);
        timer=setInterval(autoplay, 2000);
    });
});