class Cat {
    constructor(catSound) {
        this.catSound = catSound;
    }
    sound() {
        this.catSound.sound();
    }
}
class 야옹 {
    sound() {
        console.log("야옹");
    }
}
class 애옹 {
    sound() {
        console.log("애옹");
    }
}
class 왜옹 {
    sound() {
        console.log("왜옹");
    }
}
class 샴 extends Cat {
    type() {
        console.log("샴");
    }
}
class 때껄룩 extends Cat {
    type() {
        console.log("때껄룩");
    }
}
class 삼색이 extends Cat {
    type() {
        console.log("삼색고양이");
    }
}
const 나비 = new 샴(new 야옹());
const 껄룩 = new 때껄룩(new 왜옹());
const 애옹이 = new 삼색이(new 애옹());
나비.type();
나비.sound();
