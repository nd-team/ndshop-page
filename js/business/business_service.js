$(document).ready(function(){
    // i.click(function(){
    //     $(this).addClass("cur")；
    //     $(this).siblings("input").click();
    // })

    $(function() {
        $("#checkAll").click(function() {
            $('input[name="subBox"]').attr("checked",this.checked);
        });
        var $subBox = $("input[name='subBox']");
        $subBox.click(function(){
            $("#checkAll").attr("checked",$subBox.length == $("input[name='subBox']:checked").length ? true : false);
        });
    });
    // var val = $("#checkAll").val();// 获取指定id的复选框的值
    // var isSelected = $("#checkAll").attr("checked"); // 判断id=checkAll的那个复选框是否处于选中状态，选中则isSelected=true;否则isSelected=false;  //jquery1.6之后版本，用prop()判断。应该写成 isSelected = $("#checkAll").prop("checked");
    // $("#checkAll").attr("checked", true);// or
    // $("#checkAll").attr("checked", 'checked');// 将id=checkbox_id3的那个复选框选中，即打勾
    // $("#checkAll").attr("checked", false);// or
    // $("#checkAll").attr("checked", '');// 将id=checkbox_id3的那个复选框不选中，即不打勾
    // $("input[name=subBox][value=3]").attr("checked", 'checked');// 将name=subBox, value=3 的那个复选框选中，即打勾
    // $("input[name=subBox][value=3]").attr("checked", '');// 将name=subBox, value=3 的那个复选框不选中，即不打勾
    // $("input[type=checkbox][name=subBox]").get(2).checked = true;// 设置index = 2，即第三项为选中状态
    // $("input[type=checkbox]:checked").each(function(){ //由于复选框一般选中的是多个,所以可以循环输出选中的值
    //     alert($(this).val());
    // });
}