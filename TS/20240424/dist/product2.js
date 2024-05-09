class FlatDiscount {
    constructor(amount) {
        this.amount = amount;
    }
    getDiscountPrice(price) {
        return price - this.amount;
    }
}
class PercentDiscount {
    constructor(amount) {
        this.amount = amount;
    }
    getDiscountPrice(price) {
        return price * (1 - this.amount / 100);
    }
}
class FlatPersent {
    constructor(flatAmount, percentAmount) {
        this.flatAmount = flatAmount;
        this.percentAmount = percentAmount;
    }
    getDiscountPrice(price) {
        const flatDiscount = price - this.flatAmount;
        return flatDiscount * (1 - this.percentAmount / 100);
    }
}
class Products {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
}
class ProductDiscount {
    constructor(product, discount) {
        this.product = product;
        this.discount = discount;
    }
    getPrice() {
        return this.discount.getDiscountPrice(this.product.getPrice());
    }
}
const _product01 = new Products("Mac", 100000);
const _product02 = new Products("Window", 20000);
const _flatDiscount = new FlatDiscount(10000);
const _percentDiscount = new PercentDiscount(10);
const _flatPercentDiscount = new FlatPersent(10000, 10);
const discount01 = new ProductDiscount(_product01, _flatDiscount);
console.log(discount01.getPrice());
const discount02 = new ProductDiscount(_product02, _percentDiscount);
console.log(discount02.getPrice());
const discount03 = new ProductDiscount(_product01, _flatPercentDiscount);
console.log(discount03.getPrice());
