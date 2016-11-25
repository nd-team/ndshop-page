$(document).ready(function(){
    //模态框
    $('.newbtn a').on('click',function(e){
        $('body').css("overflow","hidden")
        $('#modal').show();
        $('#modalbg').show();
        e.stopPropagation();
    });
    $('#modal .m-close').click(function(e){
        $('body').css("overflow","auto")
        $('#modal').hide();
        $('#modalbg').hide();
        e.stopPropagation();
    });
    $('#modal .edit a').click(function(){
        $('#submodal').show();
        $('#submodalbg').show();
    })
    $('#submodal .subclose').click(function(){
        $('#submodal').hide();
        $('#submodalbg').hide();
    })

    $('.edit').on('click', function(){
        $('.edit-address').show();
    });
    $('.add-btn').on('click', function(){
        $('.edit-address').hide();
    });
});
