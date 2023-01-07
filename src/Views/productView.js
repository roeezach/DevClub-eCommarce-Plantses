import product1 from '../assets/product-1.jpg'
import product2 from '../assets/product-2.jpg'
import product3 from '../assets/product-3.jpg'
import product4 from '../assets/product-4.jpg'
import product5 from '../assets/product-5.jpg'
import product6 from '../assets/product-6.jpg'
import product7 from '../assets/product-7.jpg'
import product8 from '../assets/product-8.jpg'

const prod1 = document.getElementById("product1").src = product1;
const prod2 = document.getElementById("product2").src = product2;
const prod3 = document.getElementById("product3").src = product3;
const prod4 = document.getElementById("product4").src = product4;
const prod5 = document.getElementById("product5").src = product5;
const prod6 = document.getElementById("product6").src = product6;
const prod7 = document.getElementById("product7").src = product7;
const prod8 = document.getElementById("product8").src = product8;

const ProductImages = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8];

class ProductsView {
    constructor() {
        this.productsDOM = document.getElementById('products-center');
    }

    static getProductsImagesArr() {
        return ProductImages;
    }

    displayProducts(products) {
        let result = '';
        products.forEach(product => {
            result += `<article class="product">
          <div class="img-container">
              <img src="${ProductImages[product.id - 1]}" class="product-img" id="" alt="product">
              <button class="bag-btn" data-id="${product.id}">
                  <i class="fas fa-shopping-cart"></i>
                  add to cart
              </button>
          </div>
          <h3>${product.title}</h3>
          <h5>${product.description}</h5>
          <h4>$${product.price}</h4>
        </article>`;
        });

        this.productsDOM.innerHTML = result;
    }


}

export default ProductsView