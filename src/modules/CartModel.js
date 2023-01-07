import Storage from "../utils/Storage";

const cartTotal = document.getElementById('cart-total');
const cartItems = document.getElementById('cart-items');

class CartModel {

    // setupApp() {
    //     cart = Storage.getCart();
    //     this.setCartValues(cart)
    //     this.populateCart(cart)
    //     cartBtn.addEventListener('click', this.showCart)
    //     closeCartBtn.addEventListener('click', this.hideCart)
    // }

    // getCartButtons() {
    //     const btns = [...document.querySelectorAll(".bag-btn")];
    //     buttonDOM = btns;
    //     btns.forEach(btn => {
    //         let id = btn.dataset.id;
    //         let inCart = cart.find(item => item.id === id);
    //         if (inCart) {
    //             btn.innerText = "In Cart";
    //             btn.disabled = true;
    //         }
    //         btn.addEventListener('click', (event) => {
    //             event.target.innerText = "in Cart"
    //             event.target.disabled = true;
    //             //get product from products 
    //             let cartItem = { ...Storage.getProductFromLS(id), quantity: 1 }; // quantity should be depended on use choice
    //             //add product to the cart
    //             cart = [...cart, cartItem]
    //             //save the cart in LS
    //             Storage.saveCart(cart);
    //             //set cart values
    //             this.setCartValues(cart);
    //             //display cartline
    //             this.addCartline(cartItem)
    //             //show the cart
    //             this.showCart()
    //         })
    //     })
    // }

    setCartValues(cart) {
        let tempTotal = 0;
        let itemsTotal = 0;

        cart.map(item => {
            tempTotal += item.price * item.quantity;
            itemsTotal += item.quantity;
        })
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2))
        cartItems.innerText = itemsTotal;

        return cart;
    }

    // addCartline(cartItem) {
    //     const div = document.createElement('div');
    //     const productsImages = ProductsView.getProductsImagesArr()
    //     console.log(productsImages[cartItem.id - 1]);
    //     div.classList.add('cart-item');
    //     div.innerHTML = `<img src="${productsImages[cartItem.id - 1]}" id="product2" alt="product">
    //     <div class="">
    //         <h4>${cartItem.title}</h4>
    //         <h5>$${cartItem.price}</h5>
    //         <span class="remove-item" data-id=${cartItem.id}>remove</span>
    //     </div>
    //     <div class="">
    //         <i class="fas fa-chevron-up" data-id=${cartItem.id}></i>
    //         <p class="item-amount">${cartItem.quantity}</p>
    //         <i class="fas fa-chevron-down" data-id=${cartItem.id}></i>
    //     </div>`
    //     cartContent.appendChild(div);
    // }



    // cartLogic() {
    //     //clear cart btn
    //     clearCartBtn.addEventListener('click', () => this.clearCart()) // we are using the arrow function the reference to the class and not to the button.

    //     cartContent.addEventListener('click', event => {
    //         if (event.target.classList.contains('remove-item')) {
    //             let removeItem = event.target;
    //             let id = removeItem.dataset.id;
    //             cartContent.removeChild(removeItem.parentElement.parentElement)
    //             this.removeItem(id)
    //         }
    //         else if (event.target.classList.contains("fa-chevron-up")) {
    //             let addQuantity = event.target;
    //             let id = addQuantity.dataset.id;
    //             let tempItem = cart.find(item => item.id === id)
    //             tempItem.quantity += 1;
    //             Storage.saveCart(cart)
    //             this.setCartValues(cart)
    //             addQuantity.nextElementSibling.innerText = tempItem.quantity;
    //         }
    //         else if (event.target.classList.contains("fa-chevron-down")) {
    //             let lowerQuantity = event.target;
    //             let id = lowerQuantity.dataset.id
    //             let tempItem = cart.find(item => item.id === id);
    //             tempItem.quantity = tempItem.quantity - 1;
    //             if (tempItem.quantity > 0) {
    //                 Storage.saveCart(cart);
    //                 this.setCartValues(cart);
    //                 lowerQuantity.previousElementSibling.innerText = tempItem.quantity;
    //             }
    //             else {
    //                 cartContent.removeChild(lowerQuantity.parentElement.parentElement);
    //                 this.removeItem(id)
    //             }
    //         }
    //     })
    // }

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
        cart = this.setCartValues(cart);
        Storage.saveCart(cart);
        let btn = this.getSingleBtn(id);
        btn.disabled = false;
        btn.innerHTML = `<i class="fas fa shopping-cart"></i>add to cart`
    }

    getSingleBtn(id) {
        return buttonDOM.find(btn => btn.dataset.id === id)
    }
}

export default CartModel;
