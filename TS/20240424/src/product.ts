// 상품을 정의하는 interface
interface IProduct {
    name: string,
    price: number,
    discountAmount: number,
}

class Product implements IProduct {
    name: string;
    price: number;
    discountAmount: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
        this.discountAmount = 0;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price - this.discountAmount;
    }

    setDiscountAmount(amount: number) {
        this.discountAmount = amount;
    }
}

class ProductManager {
    // Product class로 만든 객체만 담을수 있는 배열
    products: Product[];
    constructor() {
        this.products = [];
    }

    setCreateProduct(_product: Product) {
        this.products.push(_product);
    }

    getProduct(index: number): Product {
        return this.products[index];
    }
}

const product01: Product = new Product("Mac", 1000);
product01.setDiscountAmount(200);
const productManager: ProductManager = new ProductManager();
productManager.setCreateProduct(product01);
console.log(productManager.getProduct(0));
