var cartProduct;

window.onload = function checkout(){
    display();
    let ajax= new XMLHttpRequest();
    ajax.open("GET","http://localhost:3000/cartProduct");
    ajax.setRequestHeader("content-type","application/json");
    ajax.onprogress=function(){};
    ajax.onload=function(){

        let a="";
        let b="";

        let subTotal2=0;

         cartProduct= JSON.parse(this.response);

        for(let i=0;i<=cartProduct.length-1;i++){

            a = a + `<tr class="cart_item">
                    <td class="product-name">${cartProduct[i].name} <strong class="product-quantity">x ${cartProduct[i].quantity}</strong></td>
                    <td class="product-total" ><span class="amount">Rs ${(cartProduct[i].price)*(cartProduct[i].quantity)}</span></td>
                </tr>`

            subTotal2 = subTotal2 + (cartProduct[i].price)*(cartProduct[i].quantity) ;    


            
        }

        for(let i=0;i<=2;i++){

            b = b + `<li>
                        <div class="cart-img">
                            <a href="#"><img style="width:50px;height:67px" alt="" src="${cartProduct[i].img}"></a>
                        </div>
                        <div class="cart-info">
                            <h4><a href="#">${cartProduct[i].name}</a></h4>
                            <span>Rs ${cartProduct[i].price} <span>x ${cartProduct[i].quantity}</span></span>
                        </div>
                        <div class="del-icon">
                            <i class="fa fa-times-circle"></i>
                        </div>
                    </li>`

        }

            b = b + `<li class="cart-border">
                        <div class="subtotal-text">Subtotal: </div>
                        <div class="subtotal-price">Rs ${subTotal2}</div>
                     </li>
                     <li>
                        <a class="cart-button" href="cart.html">view cart</a>
                        <a class="checkout" href="checkout.html">checkout</a>
                     </li>`;

        document.getElementById("checkout_products").innerHTML = a;

        document.getElementById("headerCart").innerHTML = b;

        document.getElementById("subTotal").innerHTML = subTotal2;

        console.log(subTotal2);

        

        
        orderTotal();

    }
    ajax.send();

   
    
    
    

    


    

}


function placeOrder(){

    class placeOrder{
        constructor(fname,lname,address,city,country,postcode,email,phone){
            this.fname = fname ;
            this.lname = lname ;
            this.address = address ;
            this.city = city ;
            this.country = country ;
            this.postcode = postcode ;
            this.email = email ;
            this.phone = phone ;
        }
    }

   let fname = document.getElementById('fname').value ;
   let lname = document.getElementById('lname').value ;
   let address = document.getElementById('address').value ;
   let city = document.getElementById('city').value ;
   let country = document.getElementById('country').value ;
   let postcode = document.getElementById('postcode').value ;
   let email = document.getElementById('email').value ;
   let phone = document.getElementById('phone').value ;

   const obj = new placeOrder(fname,lname,address,city,country,postcode,email,phone);
   
    
   console.log(obj);
   console.log(cartProduct);
 
}




function orderTotal(){
    var st = document.getElementById("subTotal").innerText;
    var ship = document.getElementById("shipping").innerText;
    var st1 = parseInt(st);
    var ship1 = parseInt(ship);
    var orderTotal = st1+ship1;
    document.getElementById('orderTotal').innerHTML=orderTotal;   
}


