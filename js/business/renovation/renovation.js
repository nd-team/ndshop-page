/**
 * Created by ike on 2016/11/21.
 */
var t=null;
var n=0;
var count;
$(function(){
    //1模块切换
    $('.menu ul li').click(function(){
        $(this).addClass('ret-current').siblings().removeClass('ret-current');
        $('.subsidebar>div:eq('+$(this).index()+')').show().siblings().hide();
    })
    $('.color ul li').click(function(){
        $(".color ul li").children().removeClass("current");
        $(this).children().addClass('current');
    })
    $(".text-opacity .parent").hide();
    $(".shop-one").hover(function(){
            $(this).find(".parent").stop().fadeTo(500,0.5)
            $(this).find(".trans-text").show().stop().animate({bottom:'0'}, {duration: 500})
        },
        function(){
            $(this).find(".parent").stop().fadeTo(300,0)
            $(this).find(".trans-text").stop().animate({bottom:'54'}, {duration: "fast"})
            $(this).find(".trans-text").animate({bottom:'-10'}, {duration: 0}).hide();
        });
    //2店内分内
    $('.inactive').click(function(){
        if($(this).siblings('span,ul').css('display')=='none'){
            $(this).parent('span,li').siblings('a').removeClass('store-inactive');
            $(this).addClass('store-inactive');
            $(this).siblings('span,ul').slideDown(100).children('a');
        }else{
            $(this).removeClass('store-inactive');
            $(this).siblings('span,ul').slideUp(100);
        }
    })
    //3banner
    count=$(".banner a").length;
    $(".banner a:not(:first-child)").hide();
    $(".banner ul li").click(function(){
        var index=$(this).text()-1;
        n=index;
        console.log(n);
        $(".banner a").filter(":visible").fadeOut(500).parent().children().eq(index).fadeIn(1000);
        $(this).addClass("selected");
        $(this).siblings().removeClass("selected");
    });
    t=setInterval("autoMove()",3000);
    $(".banner").hover(function(){clearInterval(t)}, function(){t = setInterval("autoMove()", 3000);});
    //4全选
    $(".checkAll").click(function(){
        var flag=this.checked;
        $("input[name='item']").prop("checked",flag);
    })
    $("input[name='item']").click(function(){
        if($("input[name='item']:checked").length==$("input[name='item']").length){
            $(".checkAll").prop("checked",true);
        }else{
            $(".checkAll").prop("checked",false);
        }
    });
    //5伸缩与展开
    $(".cat-sub").hide();
    $('.inactive').click(function(){
       if(
            $(".cat-sub").css('display')=='none') {
            $(".title-wrapper a").toggleClass("store-inactive");
            $(".item-list .cat-sub").toggle('slow');
        }else{
            $(this).removeClass('store-inactive');
            $('.cat-sub').toggle('3000');
        }
    });
    //颜色
   /* $(".item-list").click(function () {
        $(".item-list").removeClass("back-ground");
        $(this).addClass('back-ground');
    })*/
})
//3banner自动切换
function autoMove(){
    if(n>=(count-1)){
        n=0;
    }else{
        ++n;
    }
    $(".banner ul li").eq(n).trigger("click");
}