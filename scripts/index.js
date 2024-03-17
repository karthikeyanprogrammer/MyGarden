//load-products

htmldoc=''
products.forEach(element => {
    htmldoc+=`<div class="item">
            <img src="${element.image}" alt="img">
            <div class="button-info">
                <div class="info">
                    <p class="product-title">${element.product_name}</p>
                    <p class="product-price"><sup>&#x20b9;</sup>${element.price/100}</p>
                    <p class="product-description">${element.decription}</p>
                </div>
                <button class="add-to-cart-button" type="button" data-details="${element.product_name},${element.price}"><b>Add To Cart</b></button>
            </div>
          </div>`
});
document.querySelector('.products-container').innerHTML=htmldoc

//add-to-cart

document.querySelectorAll('.add-to-cart-button').forEach((button)=>{
    button.addEventListener('click',()=>{
        details=button.dataset.details.split(',')
        let matchingitem=cart.find((product)=>product.name === details[0])
        if (matchingitem){
            matchingitem.quantity+=1
            matchingitem.totalprice+=parseInt(details[1],10)
        }
        else{
            cart.push({
                name:details[0],
                quantity:1,
                totalprice:parseInt(details[1],10)
            })
        }
        console.log('added')
    })
})
