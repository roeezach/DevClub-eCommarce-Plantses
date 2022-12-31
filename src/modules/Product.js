
class Product {
    constructor(title, description, category) {
        this.ID = Utilities.randomInteger(1, 1000);//number
        this.title = title; //string
        this.description = description; //string
        this.category = category; // string
        this.price = price;// float/number
    }
}

export default Product;