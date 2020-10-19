window.onload = function showCart(){
    
var showProductsOnCart = "";
var total = 0;
var sub = 0;


let ajax = new XMLHttpRequest();
ajax.open("GET", "http://localhost:3000/cartProduct")
ajax.setRequestHeader("content-type", "application/json")
ajax.onprogress = function(){

}

ajax.onload = function(){
    
    let cart = JSON.parse(this.response);

    for(var i = 0; i <= cart.length-1; i++){
        showProductsOnCart = showProductsOnCart + `<tr>
        <td class="product-thumbnail"><a href="#"><img src="${cart[i].img}" alt="" /></a></td>
        <td class="product-name"><a href="#">${cart[i].name}</a></td>
        <td class="product-price"><span class="amount">$${cart[i].price}</span></td>
        <td class="product-quantity">${cart[i].quantity}</td>
        <td class="product-subtotal">${sub=cart[i].price*cart[i].quantity}</td>
        <td class="product-remove"><a href="#"><i class="fa fa-times"></i></a></td>
        </tr>`
    
    total = total + sub;

}
    document.getElementById('cartItems').innerHTML = showProductsOnCart;	



var c =`<tr class="cart-subtotal">
<th>Subtotal</th>
<td><span class="amount">$${total}</span></td>
</tr>
<tr class="shipping">
<th>Shipping</th>
<td>
<ul id="shipping_method">
<li></li>
</ul>
<p><a class="shipping-calculator-button" href="#">Calculate Shipping</a></p>
</td>
</tr>
<tr class="order-total">
<th>Total</th>
<td>
<strong><span class="amount">$${total}</span></strong>
</td>
</tr>`

        document.getElementById('total').innerHTML = c;

}

ajax.send()

}