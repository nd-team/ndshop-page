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
        // console.log(n);
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
    /*$(".cat-sub").hide();
    $('.inactive').click(function(){
       if(
            $('.cat-sub').css('display')=='none') {
            $(".title-wrapper a").toggleClass("store-inactive");
            $(".item-list .cat-sub").toggle('slow');
        }else{
            $(this).removeClass('store-inactive');
            $('.cat-sub').toggle('3000');
        }
    });*/
    //颜色
   /* $(".item-list").click(function () {
        $(".item-list").removeClass("back-ground");
        $(this).addClass('back-ground');
    })*/
    $(".cat-sub").hide();
    $('.in-active').click(function(){
        //$(".item-list").each(function(){
        if(
            $(this).parents('.item-list').find(".cat-sub").css('display')=='none') {
            $(this).removeClass('now-inactive');
            $(this).addClass('now-inactive');
            $(this).parents('.item-list').find(".cat-sub").slideDown(100);
        }else{
            $(this).removeClass('now-inactive');
            $(this).parents('.item-list').find(".cat-sub").slideUp(100);
        }
    });
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

//模态框
$('a[data-title]').click(function(){
    var dataTitle = $(this).attr("data-title");
    $('#modalbg').show();
    $('#modal').show();
    $('#modal .'+dataTitle).show();
    $('body').css("overflow","hidden");
});

$('.m-btn .cancel').click(function(){
    $(this).parents('.m-con').hide();

    $('#modal').hide();
    $('#modalbg').hide();
    $('.add-module').hide();
    $('body').css("overflow","auto");
});
//tab切换
$('.m-con-menu a[data-tab]').click(function(){
    var dataTab = $(this).attr('data-tab');
    $(this).parent().addClass('active').siblings().removeClass('active');
    $('.'+dataTab).show().siblings().hide();
});

$('a.add').click(function(){
    $(this).parents('.m-con').find('.add-module').show();
});
$('.recom-dis-set ul li a').click(function(){
    $(this).addClass('active').parent().siblings().children().removeClass('active');
});
$('#modal .rote-setting .rote-list .r-delete').click(function(){
    $(this).parents('.rote-list').remove();
});

$('#modal .rote-setting .rote-list .r-listup').click(function(){
    var ind = $(this).parents('.rote-list').index()
    var curr=$(this).parents('.rote-list');
    if(curr.prev()){
        curr.prev().before(curr);
    }

});
$('#modal .rote-setting .rote-list .r-listdown').click(function(){
    var curr=$(this).parents('.rote-list');
    if(curr.next())
        curr.next().after(curr);
});