
$(document).ready(function(){

    function banner_pic_change() {
        a = 0
        $(".banner_pic_ul li").eq(i).animate({
            opacity: "1"
        }).siblings().animate({
            opacity: "0"
        }, function() {
            a = 1;
        });
        $(".banner_but_ul li").eq(i).css("background", "#B1191A").siblings().css("background", "#3E3E3E")
    }
})