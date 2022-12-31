import './styles/main.css'
import jsonProducts from './assets/products.json'
import Logo from './assets/logo.jpg'
// import catalog from './Views/productView';
import product1 from './assets/product-1.jpg'
import product2 from './assets/product-2.jpg'
import product3 from './assets/product-3.jpg'
import product4 from './assets/product-4.jpg'
import product5 from './assets/product-5.jpg'
import product6 from './assets/product-6.jpg'
import product7 from './assets/product-7.jpg'
import product8 from './assets/product-8.jpg'


const cartBtn = document.getElementById('cart-btn');
const closeCartBtn = document.getElementById('close-cart');
const clearCartBtn = document.getElementById('clear-cart banner-btn');
const cartDOM = document.getElementById('cart');
const cartOverlay = document.getElementById('cart-overlay');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartContent = document.getElementById('cart-content');
const productsDOM = document.getElementById('products-center');
const logo = document.getElementById("logo").src = Logo;

const prod1 = document.getElementById("product1").src = product1;
const prod2 = document.getElementById("product2").src = product2;
const prod3 = document.getElementById("product3").src = product3;
const prod4 = document.getElementById("product4").src = product4;
const prod5 = document.getElementById("product5").src = product5;
const prod6 = document.getElementById("product6").src = product6;
const prod7 = document.getElementById("product7").src = product7;
const prod8 = document.getElementById("product8").src = product8;
console.log(prod1);
const productsImages = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8]



//cart
let cart = []

//buttons
let buttonDOM = []



class Products {
    getProducts() {
        // try {
        console.log(jsonProducts);
        let products = jsonProducts.items;
        products = products.map(item => {
            const { title, price, description } = item.fields;
            const { id } = item.sys;
            const image = item.fields.image.fields.file.url;
            return { title, price, id, image, description }
        })
        return products;
    }
}
//display products - view maybe catalog module
// get bag buttons is cartline

class Catalog {

    displayProducts(products) {
        let result = '';

        products.forEach(product => {

            result += `<article class="product">
            <div class="img-container">
                <img src="${productsImages[product.id - 1]}" class="product-img" id="" alt="product">
                <button class="bag-btn" data-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i>
                    add to cart
                </button>
            </div>
            <h3>${product.title}</h3>
            <h5>${product.description}</h5>
            <h4>$${product.price}</h4>
        </article>`
            productsDOM.innerHTML = result;
        });
    }

    getBagButtons() {
        const btns = [...document.querySelectorAll(".bag-btn")];
        buttonDOM = btns;
        btns.forEach(btn => {
            let id = btn.dataset.id;
            let inCart = cart.find(item => item.id === id);
            if (inCart) {
                btn.innerText = "In Cart";
                btn.disabled = true;
            }
            btn.addEventListener('click', (event) => {
                event.target.innerText = "in Cart"
                event.target.disabled = true;
                //get product from products 
                let cartItem = { ...Storage.getProductFromLS(id), quantity: 1 }; // quantity should be depended on use choice
                //add product to the cart
                cart = [...cart, cartItem]
                //save the cart in LS
                Storage.saveCart(cart);
                //set cart values
                this.setCartValues(cart);
                //display cartline
                this.addCartline(cartItem)
                //show the cart
                this.showCart()
            })
        })
    }

    setCartValues(cart) {
        let tempTotal = 0;
        let itemsTotal = 0;

        cart.map(item => {
            tempTotal += item.price * item.quantity;
            itemsTotal += item.quantity;
        })
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2))
        cartItems.innerText = itemsTotal;
    }

    addCartline(cartItem) {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `<img src="${productsImages[cartItem.id - 1]}" id="product2" alt="product">
        <div class="">
            <h4>${cartItem.title}</h4>
            <h5>$${cartItem.price}</h5>
            <span class="remove-item" data-id=${cartItem.id}>remove</span>
        </div>
        <div class="">
            <i class="fas fa-chevron-up" data-id=${cartItem.id}></i>
            <p class="item-amount">${cartItem.quantity}</p>
            <i class="fas fa-chevron-down" data-id=${cartItem.id}></i>
        </div>`
        cartContent.appendChild(div);
    }

    showCart() {
        cartOverlay.classList.add('transparentBcg');
        cartDOM.classList.add('showCart');
    }

    setupApp() {
        cart = Storage.getCart();
        this.setCartValues(cart)
        this.populateCart(cart)
        cartBtn.addEventListener('click', this.showCart)
        closeCartBtn.addEventListener('click', this.hideCart)
    }

    populateCart(cart) {
        cart.forEach(item => this.addCartline(item));
    }

    hideCart() {
        cartOverlay.classList.remove('transparentBcg')
        cartDOM.classList.remove('showCart');
    }

    cartLogic() {
        //clear cart btn
        clearCartBtn.addEventListener('click', () => this.clearCart()) // we are using the arrow function the reference to the class and not to the button.

        cartContent.addEventListener('click', event => {
            if (event.target.classList.contains('remove-item')) {
                let removeItem = event.target;
                let id = removeItem.dataset.id;
                cartContent.removeChild(removeItem.parentElement.parentElement)
                this.removeItem(id)
            }
            else if (event.target.classList.contains("fa-chevron-up")) {
                let addQuantity = event.target;
                let id = addQuantity.dataset.id;
                let tempItem = cart.find(item => item.id === id)
                tempItem.quantity += 1;
                Storage.saveCart(cart)
                this.setCartValues(cart)
                addQuantity.nextElementSibling.innerText = tempItem.quantity;
            }
            else if (event.target.classList.contains("fa-chevron-down")) {
                let lowerQuantity = event.target;
                let id = lowerQuantity.dataset.id
                let tempItem = cart.find(item => item.id === id);
                tempItem.quantity = tempItem.quantity - 1;
                if (tempItem.quantity > 0) {
                    Storage.saveCart(cart);
                    this.setCartValues(cart);
                    lowerQuantity.previousElementSibling.innerText = tempItem.quantity;
                }
                else {
                    cartContent.removeChild(lowerQuantity.parentElement.parentElement);
                    this.removeItem(id)
                }
            }
        })
    }

    clearCart() {
        let cartItems = cart.map(item => item.id);
        cartItems.forEach(id => this.removeItem(id))
        console.log(cartContent.children);

        while (cartContent.children.length > 0) {
            cartContent.removeChild(cartContent.children[0])
        }

        this.hideCart();
    }

    removeItem(id) {
        cart = cart.filter(item => item.id !== id)
        this.setCartValues(cart);
        Storage.saveCart(cart);
        let btn = this.getSingleBtn(id);
        btn.disabled = false;
        btn.innerHTML = `<i class="fas fa shopping-cart"></i>add to cart`
    }

    getSingleBtn(id) {
        return buttonDOM.find(btn => btn.dataset.id === id)
    }
}

// class - cart

//local storage

class Storage {

    static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products))
    }
    static saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    static getProductFromLS(id) {
        let productsLS = JSON.parse(localStorage.getItem('products'))
        return (productsLS || []).find(item => item.id === id)
    }

    static getCart() {
        return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    }

}

document.addEventListener("DOMContentLoaded", () => {
    const catalog = new Catalog();
    const products = new Products();
    //setup app

    catalog.setupApp()
    //get allproducts
    const productsArr = products.getProducts();
    catalog.displayProducts(productsArr);
    Storage.saveProducts(productsArr)
    catalog.getBagButtons();
    catalog.cartLogic()
});

