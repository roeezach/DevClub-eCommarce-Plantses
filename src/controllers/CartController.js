
import Storage from "../utils/Storage";

let buttonDOM = []

class CartController {
    constructor(model, view) {
        this.cartModel = model
        this.cartView = view;
        this.cartContent = document.getElementById("cart-content");
        this.clearCartBtn = document.getElementById('clear-cart banner-btn');
        // this.cartDOM = document.getElementById("cart");
        // this.cartOverlay = document.getElementById("cart-overlay");
    }

    getCartButtons(cart) {
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
                cart = this.cartModel.setCartValues(cart);
                //display cartline
                this.cartView.addCartline(cartItem);
                //show the cart
                this.showCart();
            })
        })
    }

    cartLogic() {
        //clear cart btn
        this.clearCartBtn.addEventListener('click', () => this.clearCart()) // we are using the arrow function the reference to the class and not to the button.

        this.cartContent.addEventListener('click', event => {
            if (event.target.classList.contains('remove-item')) {
                let removeItem = event.target;
                let id = removeItem.dataset.id;
                cartContent.removeChild(removeItem.parentElement.parentElement)
                this.cartModel.removeItem(id)
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
                    this.cartModel.removeItem(id)
                }
            }
        })
    }


    showCart() {
        this.cartView.showCart();
    }

    hideCart() {
        this.cartView.hideCart();
    }

    addToCart(product) {
        this.cartModel.addToCart(product);
    }

    removeFromCart(productId) {
        this.cartModel.removeFromCart(productId);
    }

    updateQuantity(productId, quantity) {
        this.cartModel.updateQuantity(productId, quantity);
    }

    setCartValues(cart) {
        this.cartModel.setCartValues(cart);
    }

    clearCart() {
        this.cartModel.clearCart();
    }

    populateCart(cart) {
        cart.forEach(item => this.cartView.addCartline(item));
    }


    // showCart() {
    //     this.cartOverlay.classList.add("transparentBcg");
    //     this.cartDOM.classList.add('showCart');
    // }


    // hideCart() {
    //     this.cartOverlay.classList.remove('transparentBcg')
    //     this.cartDOM.classList.remove('showCart');
    // }
}

export default CartController;
