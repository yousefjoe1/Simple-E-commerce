const productContainer = document.querySelector('.product')
const openMenu = document.querySelector('.open-menu') 
const headerUl = document.querySelector('header ul')
const closeMenu = document.querySelector('.close-menu')


openMenu.addEventListener('click',()=> {
    headerUl.style.right = '1px'
})

closeMenu.addEventListener('click',()=> {
    headerUl.style.right = '-300px'
})






window.onload = ()=> {
    let productId = parseInt(window.location.href.split('=')[1]);
    getSingleProduct(productId)
    if(!localStorage.getItem('cart')){
        localStorage.setItem('cart',JSON.stringify([]))
    }
}

const getSingleProduct = async(prid)=> {
    let firstCall =  await fetch('https://fakestoreapi.com/products');
    let response = await firstCall.json();

    let getProduct = response.find(product=> product.id === prid)
    let myProduct = {...getProduct,quantity:1}
    console.log(myProduct);

    // Product Image
    let prosuctImg = document.createElement('img')
    prosuctImg.src = `${myProduct.image}`
    prosuctImg.className = `col-lg-4 col-md-6 col-sm-12`
    
    let catAndPrcAndname = document.createElement('div')
    catAndPrcAndname.className = 'col-lg-4 col-md-6 col-sm-8 catgpricename'

    // Category Name
    let category = document.createElement('h5')
    category.textContent = `Category: ${myProduct.category}`;
    
    // Product Name
    let productName = document.createElement('h5')
    productName.textContent = `Product Name: ${myProduct.title}`;

    // Product Description
    let productDescription = document.createElement('h4')
    productDescription.textContent = `${myProduct.description}`


    let pricQuaintCartBtn = document.createElement('div')
    pricQuaintCartBtn.className = `col-lg-4 col-md-12 col-sm-12 priceQuantityCartBtn`

    let productPrice = document.createElement('p')
    productPrice.textContent = `price: ${myProduct.price} $`
    
    let quantity = document.createElement('input')
    quantity.type = 'number'
    quantity.className = `quantityInput`;
    quantity.placeholder = 'quantity'
    quantity.min = '1'

    let addToCartBtn = document.createElement('button')
    addToCartBtn.textContent = `Add To Cart`
    addToCartBtn.className = `addtocartBtn`


    pricQuaintCartBtn.appendChild(productPrice)
    pricQuaintCartBtn.appendChild(quantity)
    pricQuaintCartBtn.appendChild(addToCartBtn)
    
    productContainer.appendChild(prosuctImg);
    catAndPrcAndname.appendChild(category);
    catAndPrcAndname.appendChild(productName);
    catAndPrcAndname.appendChild(productDescription);
    productContainer.appendChild(catAndPrcAndname)
    productContainer.appendChild(pricQuaintCartBtn)


    // 
    let cartButton = document.querySelector('.addtocartBtn')
        cartButton.addEventListener('click',(e)=> {

            let quantityValue = document.querySelector('input').value;
            let theProduct = {...myProduct,quantity:quantityValue}

            if(JSON.parse(localStorage.getItem('cart')).length > 0){
                let locstrg = JSON.parse(localStorage.getItem('cart'))
                let checkproductID = locstrg.map(item => item.id)

                if(parseInt(quantityValue) > 1){
                    let myStorage = localStorage.getItem('cart')
                    let storedProduct = JSON.parse(myStorage)
                    let changeProductQuantity = storedProduct.map(item=>{
                        if(item.id === theProduct.id){
                            return {...item,quantity:quantityValue}
                        }else {
                            return item;
                        }
                    })
                    localStorage.setItem('cart',JSON.stringify(changeProductQuantity))
                }

                if(checkproductID.includes(theProduct.id) === false) {
                    let myStorage = localStorage.getItem('cart')
                    let storedProduct = JSON.parse(myStorage)
                    let allProduct = [...storedProduct,theProduct]
                    localStorage.setItem('cart',JSON.stringify(allProduct))
                }
            }else {
                    let myStorage = localStorage.getItem('cart')
                    let storedProduct = JSON.parse(myStorage)
                    let allProduct = [...storedProduct,theProduct]
                    localStorage.setItem('cart',JSON.stringify(allProduct))
            }
        })


}