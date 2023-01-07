import jsonProducts from '../assets/products.json'

class ProductsModel {
    constructor() {
        this.products = [];
    }

    getProducts() {
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

export default ProductsModel