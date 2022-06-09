const cartProducts = document.querySelector('.cart-products');
const openMenu = document.querySelector('.open-menu') 
const headerUl = document.querySelector('header ul')
const closeMenu = document.querySelector('.close-menu')

window.onload = ()=> {
    getProductsFromLoclStrg()
}

const getProductsFromLoclStrg = ()=> {
    const myCart = JSON.parse(localStorage.getItem('cart'));
    
    myCart.forEach(product=> {
        const theProduct = document.createElement('div')
        theProduct.innerHTML = `
            <div class="card" style="width: 14rem;">
                <img src=${product.image} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h6 class="card-title">${product.title}</h6>
                        <p class="card-text">Pirce: ${product.price}$</p>
                        <p class="card-text">Quantity: ${product.quantity}$</p>
                        <p class="card-text">SubTotal: ${parseInt(product.quantity) * product.price}$</p>
                        <button class="btn remove-product btn-danger">Remove</button>
                    </div>
            </div>
            `
            cartProducts.appendChild(theProduct)
    })

    const totalElement = document.querySelector('.total')
    let cartTotal = myCart.map(item=> item.price * item.quantity).reduce((a,b)=> a + b)
    totalElement.innerHTML = `Total : ${cartTotal}$`
}


openMenu.addEventListener('click',()=> {
    headerUl.style.right = '1px'
})

closeMenu.addEventListener('click',()=> {
    headerUl.style.right = '-300px'
})