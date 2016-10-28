$(document).ready(function(){
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
            $('.proinfo-num input').val(count);
            if(count<1){
                $('.proinfo-num input').val('1');
            }
        })
    }
    proNum();
})