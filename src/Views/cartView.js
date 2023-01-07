import ProductsView from './productView'

class CartView {
    constructor() {
        this.cartDOM = document.getElementById("cart");
        this.cartOverlay = document.getElementById("cart-overlay");
        this.cartBtn = document.getElementById("cart-btn");
        this.closeCartBtn = document.getElementById("close-cart");
        this.clearCartBtn = document.getElementById("clear-cart banner-btn");
        this.cartItems = document.getElementById("cart-items");
        this.cartTotal = document.getElementById("cart-total");
        this.cartContent = document.getElementById("cart-content");
    }

    addCartline(cartItem) {
        const div = document.createElement('div');
        const productsImages = ProductsView.getProductsImagesArr()
        console.log(productsImages[cartItem.id - 1]);
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
        this.cartContent.appendChild(div);
    }

    showCart() {
        this.cartOverlay.classList.add("transparentBcg");
        this.cartDOM.classList.add('showCart');
    }


    hideCart() {
        this.cartOverlay.classList.remove('transparentBcg')
        this.cartDOM.classList.remove('showCart');
    }
}

export default CartView;