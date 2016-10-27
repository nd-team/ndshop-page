$(document).ready(function(){
    function price(){
        var count,subtotal,unitPrice;
        $('#cart .cart-num .num-reduce').on('click',function(){
            count = $(this).parent().children('input').val();
            count--;
            $(this).parent().children('input').val(count);
            if(count<1){
                $(this).parent().children('input').val('1');
            }

        })
        $('#cart .cart-num .num-add').on('click',function(){
            count = $(this).parent().children('input').val();
            unitPrice=parseFloat($(this).parents('.cart-main').find('.cart-price p').text());
            subtotal = unitPrice*count;
            console.info(subtotal);
            count++;
            $(this).parent().children('input').val(count);

        })


    }
    price()
})