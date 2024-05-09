class student {
    constructor(_age, _phone, _city) {
        this.age = _age;
        this.phone = _phone;
        this.city = _city;
    }

    // 호출 조회 할때 사용할 메서드
    get getAge() {
        return this.age;
    }

    // 수정할때 사용할 메서드
    // set
    set setAge(_age) {
        this.age = _age;
    }

    // 정적 메서드 클래스로 객체를 만들때 생성되지 않는다.
    // 클래스안에 있는 자원 가지고 긴응르 작성해야 핤거유
    static myfn(age, phone, city) {
        let obj = new student*((age, phone, city));
        obj.age = this.age;
    }
}
/* // {}
let obj = new student(20, "01000000000", "서울");
console.log(obj); */

// 부모 클래스
class Mother {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    getInfo() {
        return `이름 : ${this.name} / 나이 : ${this.age}`
    }
}

// 자식 클래스 Child 클래스
// 상속 예약어 extends
// 오버라이딩 오버로딩
class Child extends Mother {
    constructor(_hp, _mp, _atk, _name, _age) {
        // super === 부모클래스의 생성자 함수를 호출
        super(_name, _age);

        this.hp = _hp;
        this.mp = _mp;
        this.atk = _atk;;
    }
    // 오버라이딩
    
    // 이런 내용은 this에 영향을 줄수 있다.
    // 메서드 축약형
    // 규칙 get과 set의 개발자 규칙
    // State 네이밍
    getState() {
        return `hp : ${this.hp} / mp : ${this.mp} / atk : ${this.atk}`
    }

    setHp(_hp) {
        this.hp = _hp;
    }

    static getAtk(n) {
        return n.atk;
    }
}

//  new {}
let character1 = new Child(100, 50, 200, "이순현", 20);
let character2 = new Child(100, 50, 100, "이순현", 20);

console.log(character1);
console.log(character2);

console.log("캐릭터 1번", character1.getState());
console.log("캐릭터 2번", character2.getState());

character1.setHp(500);

console.log("캐릭터 1번", character1.getState());
console.log("캐릭터 1번", character1.getInfo());
