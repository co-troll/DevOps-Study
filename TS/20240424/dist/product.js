class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.discountAmount = 0;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price - this.discountAmount;
    }
    setDiscountAmount(amount) {
        this.discountAmount = amount;
    }
}
class ProductManager {
    constructor() {
        this.products = [];
    }
    setCreateProduct(_product) {
        this.products.push(_product);
    }
    getProduct(index) {
        return this.products[index];
    }
}
const product01 = new Product("Mac", 1000);
product01.setDiscountAmount(200);
const productManager = new ProductManager();
productManager.setCreateProduct(product01);
console.log(productManager.getProduct(0));
