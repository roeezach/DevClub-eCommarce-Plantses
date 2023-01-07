import './styles/main.css'
import Logo from './assets/logo.jpg'
import Storage from './utils/Storage';
import ProductsController from './controllers/ProductsController'
import ProductsView from './Views/productView';
import ProductsModel from './modules/ProductModel'

import CartModel from './modules/CartModel';
import CartView from './Views/CartView';
import CartController from './controllers/CartController';

import { myPopupService } from './Services/PopupService';
// import { myFormService } from './Services/FormSercive';
import { FormService } from './Services/formSercive';

const cartBtn = document.getElementById('cart-btn');
const closeCartBtn = document.getElementById('close-cart');
const logo = document.getElementById("logo").src = Logo;

//cart
let cart = []


document.addEventListener("DOMContentLoaded", () => {
    // const catalog = new Catalog();

    //setup app
    const productsModel = new ProductsModel();
    const productsView = new ProductsView()
    const productsController = new ProductsController(productsModel, productsView);

    // catalog.setupApp()
    // setupApp()

    const cartModel = new CartModel();
    const cartView = new CartView();
    const cartController = new CartController(cartModel, cartView);

    cart = Storage.getCart();
    cartController.setCartValues(cart)
    cartController.populateCart(cart)
    cartBtn.addEventListener('click', cartController.showCart())
    closeCartBtn.addEventListener('click', cartController.hideCart())
    //get allproducts
    const productsArr = productsModel.getProducts();
    productsController.showProducts(productsArr);
    Storage.saveProducts(productsArr)
    cartController.getCartButtons(cart);
    cartController.cartLogic();


    ///pop up service
    const popupBtn = document.getElementById('popup-banner');
    popupBtn.addEventListener('click', () => {
        const popupBody = `<div class="popup-body">
        <img src="https://avatars.githubusercontent.com/u/106396740?v=4" alt="Profile picture" />
        </div>`;
        const options = {
            isCloseByClickOutside: true,
            popupClassName: 'my-popup',
        };
        myPopupService.open(popupBody, options);
    });

    // form service 

    const formParentElement = document.getElementById('form-wrapper');
    const onSubmit = () => {
        const options = {
            isCloseByClickOutside: true,
            popupClassName: 'my-popup',
        };

        const popupBody = `<div class="submit-text">
        <p>your form have been submited properly,thanks!</p>
        </div>`;
        myPopupService.open(popupBody, options);
    }

    const formService = FormService(formParentElement, onSubmit)

});


