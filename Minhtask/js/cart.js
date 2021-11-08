const add_cart_btn = document.querySelectorAll('.add-cart')
// console.log(add_cart_btn)
add_cart_btn.forEach(function(btn,index){
    btn.addEventListener('click',function(event){
        var btn_item = event.target
        var product = btn_item.parentElement.parentElement
        var product_img = product.querySelector("img").src
        var product_name = product.querySelector(".Name-product").innerText;
        var product_price = product.querySelector(".price").innerText;
        addCart (product_img,product_name,product_price);
    })
})

function addCart(product_img,product_name,product_price){
    var add_Tr = document.createElement("tr")
    var cart_Item = document.querySelectorAll(".cart_list tbody tr");
    for (var i = 0 ;i<cart_Item.length;i++){
        var product_tt = document.querySelectorAll('.product_title_cart')
        // console.log(product_tt)
        if(product_tt[i].innerHTML == product_name){
            alert('sản phẩm đã có trong giỏ hàng của bạn')
            return
        }
    }
    var tr_content ='<tr><td class="cart-img"><img src="'+product_img+'" alt=""><span class="product_title_cart">' +product_name+ '</span></td><td><p><span class="product_price">'+product_price+'</span></p></td><td><input type="number" value="1" min="0"></td><td><button class="delete_cart_btn">Xóa</button></td></tr>'
    add_Tr.innerHTML = tr_content
    var selectcart_table = document.querySelector("tbody")
    // console.log(selectcart_table)
    selectcart_table.append(add_Tr)
    delete_cart()
    cart_total()
}
// -------------------------totalPrice--------------------------
function cart_total(){
    var cart_Item = document.querySelectorAll(".body_of_Cart tr");
    var totalPrice = 0
    for (var i = 0;i < cart_Item.length; i++ ){
        var input_value = (cart_Item[i].querySelector('input').value);
        var procduct_price =cart_Item[i].querySelector('.product_price').innerHTML;
        function convert(a){
           b = a.replace(/,/g,'')
           return parseInt(b)
        }
        totalPrice = totalPrice  + input_value*convert(procduct_price); 
    }  
    var totalprice_select = document.querySelector('.price-total span')
    totalprice_select.innerHTML = totalPrice.toLocaleString('de-DE')
    change_input()
}
// -------------------------change_input--------------------------
function change_input(){
    var cart_Item = document.querySelectorAll(".body_of_Cart tr");
    for (var i = 0 ;i<cart_Item.length;i++){
        var input_value = cart_Item[i].querySelector('input');
        input_value.addEventListener('change',function(){
            cart_total()
        })
    }
}
// -------------------------change_input--------------------------
function delete_cart(){
    var cart_Item = document.querySelectorAll(".body_of_Cart tr");
    for (var i = 0 ;i<cart_Item.length;i++){
        var delete_btn = document.querySelectorAll('.delete_cart_btn')
        // console.log(delete_btn)
        delete_btn[i].addEventListener('click',function(event){
            var cart_dele = event.target
            var cart_items_R = cart_dele.parentElement.parentElement
            cart_items_R.remove()
            // tính lại tổng tiền 
            cart_total()
        })
    }
}
// -------------------------chi tiết sản phẩm --------------------------


