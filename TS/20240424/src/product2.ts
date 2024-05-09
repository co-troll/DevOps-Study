// 할인의 구조를 정의
interface IDiscount {
    // 함수가 있어요 할인가를 가져오는 함수
    getDiscountPrice(price: number): number
}
// interface 구조를 정의하는 곳
// 값을 사용하거나 함수의 내용을 작성할수 없다.

// 가격만 수정하는 할인
class FlatDiscount implements IDiscount {
    amount: number;
    constructor(amount: number) {
        this.amount = amount;
    }

    getDiscountPrice(price: number): number {
        return price - this.amount;    
    }
}

class PercentDiscount implements IDiscount {
    amount: number;
    constructor(amount: number) {
        this.amount = amount;
    }

    getDiscountPrice(price: number): number {
        return price * (1 - this.amount / 100);
    }
}

// 특별 할인 행사
// 특별할인 기능만 담당하는 객체를 만들기 위한 클래스
class FlatPersent implements IDiscount {
    flatAmount: number
    percentAmount: number;
    constructor(flatAmount: number, percentAmount: number) {
        this.flatAmount = flatAmount;
        this.percentAmount = percentAmount;
    }

    getDiscountPrice(price: number): number {
        const flatDiscount = price - this.flatAmount;
        return flatDiscount * (1 - this.percentAmount / 100);
    }
}

class Products {
    name: string;
    price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }
}

// ProductDiscount 할인의 기능을 가지고 있는 객체를 받아서 할인을 적용
class ProductDiscount {
    product: Products;
    discount: IDiscount;
    constructor(product: Products, discount: IDiscount) {
        this.product = product;
        this.discount = discount;
    }

    getPrice(): number {
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