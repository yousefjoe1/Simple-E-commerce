const allProductsDiv = document.querySelector('.all-products');
const allNewProductsDiv = document.querySelector('.new-products');
const openMenu = document.querySelector('.open-menu') 
const headerUl = document.querySelector('header ul')
const closeMenu = document.querySelector('.close-menu')


const getFutureProducts = async()=> {
    let firstCall =  await fetch('https://fakestoreapi.com/products?limit=6');
    let response = await firstCall.json();
    console.log(response);
    response.map(item=> {
        let productDiv = document.createElement('div');
        productDiv.className = 'col-lg-4 col-md-6 p-7 col-sm-12'
        productDiv.classList.add('product-container')

        // category title
        let categoryTitle = document.createElement('p')
        categoryTitle.innerText = `Category: ${item.category}`

        //img
        let img = document.createElement('img');
        img.src = item.image;

        // name
        let productName = document.createElement('p');
        productName.innerText = item.title

        // // wichlist button
        // let wichListBtn = document.createElement('button');
        // wichListBtn.innerText = 'Add wichList';
        // wichListBtn.className = 'wichlist-btn'

        // product details button
        let productDetailsBtn = document.createElement('button');
        productDetailsBtn.innerText = 'Details';
        productDetailsBtn.className = 'details-btn'

        productDiv.appendChild(categoryTitle)
        productDiv.appendChild(img)
        productDiv.appendChild(productName)

        let ratingDiv = document.createElement('div');
        ratingDiv.className = 'rating-div';

        productDiv.appendChild(ratingDiv)

        let arrnumb = Array(Math.ceil(item.rating.rate)).fill().map((n,i)=> i)
        arrnumb.map(num=> {
        let starsRating = document.createElement('img')
        starsRating.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVG2ypjCzKJS6nf5LhfZtj7YXsCZ3JyQwUPo-V15wfzFTw7loBS19jqL5wOb50YHmSH5k&usqp=CAU'
        starsRating.className = 'star'
        ratingDiv.appendChild(starsRating)
        })
        // productDiv.appendChild(wichListBtn)
        productDiv.appendChild(productDetailsBtn)

        let priceAndCartIcon = document.createElement('div');
        priceAndCartIcon.className = 'priceandcartIcon'
        // price
        let productPrice = document.createElement('p');
        productPrice.innerText = item.price + ' $'

        // add to cart button
        let cartIcon = document.createElement('button');
        cartIcon.innerText = 'Add To Cart'
        cartIcon.className = 'addtocart-btn'


        priceAndCartIcon.appendChild(productPrice)
        priceAndCartIcon.appendChild(cartIcon)

        productDiv.appendChild(priceAndCartIcon)
        allProductsDiv.appendChild(productDiv)

        // Functions
    })
    let detailsBtn = document.querySelectorAll('.details-btn')
    detailsBtn.forEach(btn=> {
        btn.addEventListener('click',(e)=> {
            let productNumber = e.target.getAttribute('data-product')
            console.log(productNumber);
            window.location.href = `./singleProduct/sProduct.html?productid=${productNumber}`;
        })
    })
}

getFutureProducts()


const getNewproducts = async ()=> {
    let firstCall =  await fetch('https://fakestoreapi.com/products');
    let response = await firstCall.json();
    response.slice(5,11).map(item=> {
        let productDiv = document.createElement('div');
        productDiv.className = 'col-lg-4 col-md-6 p-7 col-sm-12'
        productDiv.classList.add('product-container')

        // category title
        let categoryTitle = document.createElement('p')
        categoryTitle.innerText = `Category: ${item.category}`

        //img
        let img = document.createElement('img');
        img.src = item.image;

        // name
        let productName = document.createElement('p');
        productName.innerText = item.title

        // // wichlist button
        // let wichListBtn = document.createElement('button');
        // wichListBtn.innerText = 'Add wichList';
        // wichListBtn.className = 'wichlist-btn'

        // product details button
        let productDetailsBtn = document.createElement('button');
        productDetailsBtn.innerText = 'Details';
        productDetailsBtn.className = 'details-btn'
        productDetailsBtn.setAttribute('data-product',item.id)

        productDiv.appendChild(categoryTitle)
        productDiv.appendChild(img)
        productDiv.appendChild(productName)

        // Rating div
        let ratingDiv = document.createElement('div');
        ratingDiv.className = 'rating-div';

        productDiv.appendChild(ratingDiv)

        // Create rating starts
        let arrnumb = Array(Math.ceil(item.rating.rate)).fill().map((n,i)=> i)
        arrnumb.map(num=> {
            let starsRating = document.createElement('img')
            starsRating.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVG2ypjCzKJS6nf5LhfZtj7YXsCZ3JyQwUPo-V15wfzFTw7loBS19jqL5wOb50YHmSH5k&usqp=CAU'
            starsRating.className = 'star'
        ratingDiv.appendChild(starsRating)
        })
        // productDiv.appendChild(wichListBtn)
        productDiv.appendChild(productDetailsBtn)

        let priceAndCartIcon = document.createElement('div');
        priceAndCartIcon.className = 'priceandcartIcon';

        // price
        let productPrice = document.createElement('p');
        productPrice.innerText = item.price + ' $'

        // add to cart button
        let cartIcon = document.createElement('button');
        cartIcon.innerText = 'Add To Cart'
        cartIcon.className = 'addtocart-btn'


        priceAndCartIcon.appendChild(productPrice)
        priceAndCartIcon.appendChild(cartIcon)

        productDiv.appendChild(priceAndCartIcon)
        allNewProductsDiv.appendChild(productDiv)

        // Functions
    })

    let detailsBtn = document.querySelectorAll('.details-btn')
    detailsBtn.forEach(btn=> {
        btn.addEventListener('click',(e)=> {
            let productNumber = e.target.getAttribute('data-product')
            console.log(productNumber);
            window.location.href = `../singleProduct/sProduct.html?productid=${productNumber}`;
        })
    })

}

getNewproducts()

openMenu.addEventListener('click',()=> {
    headerUl.style.right = '1px'
})

closeMenu.addEventListener('click',()=> {
    headerUl.style.right = '-300px'
})