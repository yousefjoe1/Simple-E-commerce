const cartProducts = document.querySelector('.cart-products');
const openMenu = document.querySelector('.open-menu') 
const headerUl = document.querySelector('header ul')
const closeMenu = document.querySelector('.close-menu')

window.onload = ()=> {
    getProductsFromLoclStrg()
}

const getProductsFromLoclStrg = ()=> {
    cartProducts.innerHTML = ''
    const myCart = JSON.parse(localStorage.getItem('cart'));
    if(myCart.length > 0){

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
                            <button data-productid=${product.id} class="btn remove-product btn-danger">Remove</button>
                        </div>
                </div>
                `
                cartProducts.appendChild(theProduct)
        })
        
        
        // Delete product Function
        const delBtn = document.querySelectorAll('.remove-product')
        delBtn.forEach(btn=> {
            btn.addEventListener('click',(e)=> {
                let productID = parseInt(e.target.getAttribute('data-productid'));
                removeProduct(productID)
            })
        })

        
        const totalElement = document.querySelector('.total')
        let cartTotal = myCart.map(item=> item.price * item.quantity).reduce((a,b)=> a + b)
        totalElement.innerHTML = `Total : ${cartTotal}$`
        
    }
    if(myCart.length < 1 ){
        const totalElement = document.querySelector('.total')
        totalElement.innerHTML =`Total : ${0}$`
    }
}

const removeProduct = (id) => {
    const animediv = document.querySelector('.anime')
    animediv.classList.add('animationScann')
    const myCart = JSON.parse(localStorage.getItem('cart')).filter(product=>product.id !== id )
    localStorage.setItem('cart',JSON.stringify(myCart))
    getProductsFromLoclStrg()
    setTimeout(() => {
        animediv.classList.remove('animationScann')
    }, 3000);
}

openMenu.addEventListener('click',()=> {
    headerUl.style.right = '1px'
})

closeMenu.addEventListener('click',()=> {
    headerUl.style.right = '-300px'
})