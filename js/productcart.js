window.onload = function showCart(){

    if(localStorage.getItem('theme')){
        theme();
    }else{
        importTheme();
    }   

    let cart = getCartFromLocalStorage();
    document.getElementById('productCount').innerHTML = cart !=undefined ? cart.products.length : 0;

    cartProducts();
    
}    



function cartProducts(){
    
    let cart = getCartFromLocalStorage();
    
    var showProductsOnCart = "";

    if(!cart){
        return;
    }else{

        for(var i = 0; i <= cart.products.length-1; i++){
        showProductsOnCart = showProductsOnCart + `<tr>
        <td class="product-thumbnail"><a href="#"><img src="${cart.products[i].img}" alt="" /></a></td>
        <td class="product-name"><a href="#">${cart.products[i].name}</a></td>
        <td class="product-price"><span class="amount">Rs ${cart.products[i].price}</span></td>
        <td class="product-quantity">${cart.products[i].quantity}</td>
        <td class="product-subtotal">Rs ${cart.products[i].price*cart.products[i].quantity}</td>
        <td class="product-remove"><a onclick="deleteCartProduct(${cart.products[i].id})" href="#"><i class="fa fa-times"></i></a></td>
        </tr>`
        ;

        }
        document.getElementById('cartItems').innerHTML = showProductsOnCart;	
    }

    let settings = getSettingsFromLocalStorage();

var c =`<tr class="cart-subtotal">
<th>Subtotal</th>
<td><span class="amount">Rs ${cart.amount}</span></td>
</tr>
<tr class="shipping">
<th>Shipping</th>
<td><span class="amount">Rs ${settings.shipping}</span></p></td>
</tr>
<tr class="order-total">
<th>Total</th>
<td>
<strong><span class="amount">Rs ${(cart.amount)+(settings.shipping)}</span></strong>
</td>
</tr>`

        document.getElementById('total').innerHTML = c;

}


