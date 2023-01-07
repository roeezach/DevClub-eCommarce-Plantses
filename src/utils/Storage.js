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

export default Storage