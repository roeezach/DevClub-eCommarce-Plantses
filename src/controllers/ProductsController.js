class ProductsController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    // Method to get the products and display them
    showProducts() {
        // Get the products from the model
        const products = this.model.getProducts();
        // Display the products in the view
        this.view.displayProducts(products);
    }
}

export default ProductsController;