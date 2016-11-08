
$(document).ready(function(){

    (function($){
        $.fn.myTab = function(options){//将对象作为参数传进去
            var defult = {parent:"",index:null},
                setting =$.extend(defult,options);//extend方法合并两个对象，如果两个对象有相同属性，则后面的那个对象的属性覆盖前面那个对象的属性。
             $(this).find("li").on("click",function(){
                 var $this=$(this),
                     $index =$this.index();
                 $this.addClass("current").siblings().removeClass("current");
                 $(setting.parent).children("ul").eq($index).show().siblings().hide();//切换标签对应的内容


             })
             //判断进入页面显示那个标签样式和内容
             if(setting.index==null){
                 $(this).find('li').eq(0).click();
             }else{
                 $(this).find('li').eq(options.index).click();
             }
         }
     })(jQuery)

     $(".popular-tab").myTab({parent:".tab_content",index:0});
     $(".brand-tab").myTab({parent:".tab-brand",index:0});
     $(".hot-tabs").myTab({parent:".tab-banner",index:0});

     /*鼠标经过效果*/
    $(".popular-detail li").hover(function() {
        $(this).find('.now-buy').show();
    }, function() {
        $(this).find('.now-buy').hide();
    });

})