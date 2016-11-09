
$(document).ready(function () {

    var slide=$(".slide");
    var circleLi=$(".circle li");
    var slideLi=$(".slide li");/*把slide的li定义一个变量，然后通过变量来克隆*/
    // var W=$(window).width();
    var W = slideLi.width(); //获取li的宽度
    var li_length = slideLi.length - 1; //获取li的数量
    var left = (-W);
    $(".slide li").width(W);

    /*克隆节点*/
    slide.append(slideLi.eq(0).clone(true));

    var key=0;/*控制图片张数*/
    var circle=0;
    circleLi.on("click",function(){

        circle=key=$(this).index();
        run();
        circles();
    })
    /*运动函数*/
    function run(){
        slide.stop().animate({"left":-key*W}, 500);
    }

    /*添加小圆点函数*/
    function circles(){
        circleLi.eq(circle).addClass('current').siblings().removeClass('current');
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