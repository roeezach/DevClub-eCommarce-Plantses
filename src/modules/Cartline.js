import Utilities from "../utils/Utilities.js"
import Product from "./Product.js";

class CartLine {
    constructor(Product) {
        this.ID = Utilities.randomInteger(1, 1000);
        this.quantity = 0;
        this.Product = Product.title;
    }
}

export default CartLine;