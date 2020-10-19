var productD;

function getParams (url) {
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
};

window.onload = function showProductDetails(){    
    let ajax = new XMLHttpRequest();
    let obj = this.getParams(window.location.href);
    
    
    ajax.open("GET", "http://localhost:3000/products/"+obj.id)
    ajax.setRequestHeader("content-type", "application/json")
    ajax.onprogress = function(){

    }
    ajax.onload = function(){
        let productDetail = JSON.parse(this.response);
        
        let countStars =0;
        let totalReviews = productDetail.reviews.length;
        
        for(let i =0; i<=productDetail.reviews.length-1; i++){
        countStars = countStars+productDetail.reviews[i].stars;
        }
        let averageStars = Math.round(countStars/totalReviews);

        let displayAverageStars = "";
        for(let i=0; i<= averageStars-1; i++){
            displayAverageStars= displayAverageStars+`<i class="fa fa-star"></i>`
            console.log(displayAverageStars)
        }
        debugger

        if(averageStars==1){    
            displayAverageStars = displayAverageStars+ `<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>`
        }
        else if(averageStars==2){
            displayAverageStars = displayAverageStars+ `<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>`
        }
        else if(averageStars==3){
            displayAverageStars = displayAverageStars+ `<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>`
        }
        else if(averageStars==4){
            displayAverageStars = displayAverageStars+ `<i class="fa fa-star-o"></i>`
        }
        else{
            displayAverageStars = displayAverageStars;
        }
        
        
        
        productD =`<div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
        <div class="single-pro-tab-content">
        
        <div class="tab-content">
        <div role="tabpanel" class="tab-pane active" id="home"><a href="#"><img class="zoom" src="${productDetail.img}" data-zoom-image="img/product/15.jpg" alt="" /></a></div>
        <div role="tabpanel" class="tab-pane" id="profile"><a href="#"><img class="zoom" src="${productDetail.img}" data-zoom-image="img/product/9.jpg" alt="" /></a></div>
        <div role="tabpanel" class="tab-pane" id="messages"><a href="#"><img class="zoom" src="${productDetail.img}" data-zoom-image="img/product/3.jpg" alt="" /></a></div>
        <div role="tabpanel" class="tab-pane" id="settings"><a href="#"><img class="zoom" src="${productDetail.img}" data-zoom-image="img/product/4.jpg" alt="" /></a></div>
        <div role="tabpanel" class="tab-pane" id="settingss"><a href="#"><img class="zoom" src="${productDetail.img}" data-zoom-image="img/product/4.jpg" alt="" /></a></div>
        </div>
        
        <ul class="single-product-tab" role="tablist">
        <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab"><img src="img/product/15.jpg" alt="" /></a></li>
        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab"><img src="img/product/9.jpg" alt="" /></a></li>
        <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab"><img src="img/product/3.jpg" alt="" /></a></li>
        <li role="presentation"><a href="#settingss" aria-controls="settings" role="tab" data-toggle="tab"><img src="img/product/4.jpg" alt="" /></a></li>
        </ul>
        </div>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-12 shop-list shop-details">
        <div class="product-content">
        <h3><a href="product-details.html">${productDetail.name}</a></h3>
        <div class="price">
        <span>$${productDetail.price}</span>
        <span class="old">$90.11</span>
        </div>
        <div class="s-p-rating">
        <span class="rating">
        ${displayAverageStars}
        </span>
        <span class="review-no">${totalReviews} Review (s)</span>
        <span class="review-no add-review"><a href="#">Add your review</a></span>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
        <div class="pro-size">
        <label>size <span>*</span></label>
        <select>
        <option value="1">Default</option>
        <option value="1">small</option>
        <option value="1">Medium</option>
        <option value="1">Large</option>
        <option value="1">extra large</option>
        </select>
        </div>
        <div class="pro-size">
        <label>color <span>*</span></label>
        <select>
        <option value="1">Black</option>
        <option value="1">White</option>
        <option value="1">Red</option>
        <option value="1">Yellow</option>
        <option value="1">Pink</option>
        </select>
        </div>
        <div class="product-action">
        <div class="cart-plus">
        <form action="#">
        <div class="cart-plus-minus"><input type="text" value="1" /></div>
        </form>
        </div>
        <div class="button-top">
        <a href="#"><i class="fa fa-heart"></i></a>
        </div>
        <div class="button-cart">
        <button><i class="fa fa-shopping-cart"></i> add to cart</button>
        </div>
        </div>
        <div class="product-share">
        <label>Share:</label>
        <span>
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-google-plus"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-pinterest"></i></a>
        </span>
        </div>
        </div>
        </div>
        </div>
        <div class="row">
<div class="col-md-12 col-sm-12">
<div class="product-tabs">
<div>

<ul class="pro-details-tab" role="tablist">
<li role="presentation" class="active"><a href="#tab-desc" aria-controls="tab-desc" role="tab" data-toggle="tab">Description</a></li>
<li role="presentation"><a href="#page-info" aria-controls="page-info" role="tab" data-toggle="tab">Additional information </a></li>
<li role="presentation"><a href="#page-comments" aria-controls="page-comments" role="tab" data-toggle="tab">Reviews (1)</a></li>
</ul>

<div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="tab-desc">
<div class="product-tab-desc">
<p>${productDetail.description}</p>

</div>
</div>
<div role="tabpanel" class="tab-pane" id="page-info">
<div class="product-tab-desc">
<p>${productDetail.description}</p>
<p>${productDetail.description}</p>
</div>
</div>
<div role="tabpanel" class="tab-pane" id="page-comments">
 <div class="product-tab-desc">
<div class="product-page-comments">
<h2>1 review for Integer consequat ante lectus</h2>
<ul>
<li>
<div class="product-comments">
<img src="img/author.jpg" alt="" />
<div class="product-comments-content">
<p><strong>admin</strong> -
<span>March 7, 2015:</span>
<span class="pro-comments-rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
</span>
</p>
<div class="desc">

</div>
</div>
</div>
</li>
</ul>
<div class="review-form-wrapper">
<h3>Add a review</h3>
<form action="#">
<input type="text" placeholder="your name" />
<input type="email" placeholder="your email" />
<div class="your-rating">
<h5>Your Rating</h5>
<span>
<a href="#"><i class="fa fa-star"></i></a>
<a href="#"><i class="fa fa-star"></i></a>
</span>
<span>
<a href="#"><i class="fa fa-star"></i></a>
<a href="#"><i class="fa fa-star"></i></a>
<a href="#"><i class="fa fa-star"></i></a>
</span>
<span>
<a href="#"><i class="fa fa-star"></i></a>
<a href="#"><i class="fa fa-star"></i></a>
<a href="#"><i class="fa fa-star"></i></a>
<a href="#"><i class="fa fa-star"></i></a>
</span>
<span>
<a href="#"><i class="fa fa-star"></i></a>
<a href="#"><i class="fa fa-star"></i></a>
<a href="#"><i class="fa fa-star"></i></a>
<a href="#"><i class="fa fa-star"></i></a>
<a href="#"><i class="fa fa-star"></i></a>
</span>
</div>
<textarea id="product-message" cols="30" rows="10" placeholder="Your Rating"></textarea>
<input type="submit" value="submit" />
</form>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>`

    document.getElementById('details').innerHTML = productD;

    }
    ajax.send();   
}

let xhr = new XMLHttpRequest();
let obj = this.getParams(window.location.href);
console.log(obj.category);
xhr.open("GET", "http://localhost:3000/products/?parent_id="+obj.category)
xhr.getResponseHeader("content-type", "application.json")
xhr.onprogress = function(){

}
xhr.onload = function(){
    let relatedProduct = JSON.parse(this.response)
    console.log(relatedProduct)
    let relatedProductsCards="";
    
    for(let i = 0; i<=relatedProduct.length-1; i++){
        relatedProductsCards = relatedProductsCards +`<div class="single-product">
         <div class="product-img">
         <a href="product-details.html">
         <img src="${relatedProduct[i].img}" alt="" />
         <img class="secondary-img" src="img/product/18.jpg" alt="" />
         </a>
         </div>
         <div class="product-content">
         <h3><a href="product-details.html" >${relatedProduct[i].name}</a></h3>
         <div class="price">
         <span>$${relatedProduct[i].price}</span>
         <span class="old">$90.11</span>
         </div>
         </div>
         </div>`
    }
    
    document.getElementById('relatedproducts').innerHTML = relatedProductsCards;
}
xhr.send();