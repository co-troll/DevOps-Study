# DI, IOC, DIP

> 클래스로 생성한 객체 외부에서 주입받아서 사용
> 프로그래밍 원칙에 맟춰서 코드를 작성하자(객체 생성, 의존성 주입, 주기관리를 하는 컴포넌트를 만들어서 사용)
> 의존성을 추상화 해라 interface

## DI
> Dependency Injection 의존성 주입
> 객체지향 프로그래밍의 객체와 객체의 의존성을 외부에서 주입하는 디자인 패턴
> DI는 객체간의 결합도를 낮춰주고 재사용성과 유지보수를 쉽게 할수 있도록 한다.

## DI의 패턴
1. 생성자
2. setter
3. interface

```js
class A {

}

class B {
    a = null;
    constructor() {
        this.a = new A();
    }
}
```
> 우리가 사용하던 방식
> A 클래스로 생성한 a라는 객체에 접근하기 위해서는 B의 클래스를 많이 수정해야한다.
> 객체의 생성주기와 메서드 호출이 B 클래스에게 있다.

```js
class A {

}

class B {
    a = null;
    constructor(A) {
        this.a = A;
    }
}

const _A = new B();
const _B = new B(_A);
```

## IOC(소프트웨어 엔지니어링 프로그래밍 원칙)
> Inversion Of Control 제어의 역전

## IOC의 사용 목적
> 제어의 역전 객체의 생성과 생명 주기를 컨테이너를 만들어서 관리하는 방식
> IOC 컨테이너는 자바스크립트에서 구현하면 객체이고 객체의 생성, 의존성 주입, 생명 주기를 관리할 객체
`컴포넌트`
> 쉽게 말해서 객체의 생명주기나 메서드 관리를 객체 내에서 하지 않기 위한게 목적
> 각각의 클래스의 독립성을 높이고 재사용성과 유지보수 클래스의 내용을 많이 수정하기 않제 하자

- 코드의 결합도 감소 : 각 클래스가 자신의 책임만 집중
- 테스트 용이 : 테스트 객체를 통해 테스트 가능
- 유지보수와 확장성 : 의존성을 다른 객체로 교체하기 쉽고 코드의 수정을 최소화 할수 있다.

> 여기서 제어라는 것

```js
class Drink {
    private content = "포도주스";
    drinking() {
        return `${this.content}를 마셨어`;
    }
    set(_content) {
        this.content = _content;
    }
}

class Cup {
    private drink;
    constructor() {
        this.drink = new Drink();
    }
}

const cup = new Cup();
```
> 우리가 사용하던 이런 형태의 객체의 생성과 생명 주기를 직접 제어해서 사용한다.

## 제어
> 객체의 생성, 생명주기, 메서드 호출을 직접 제어한다(관리)

## 제어의 역전
> 외부에서 객체를 관리하는 것

```js
class Drink {
    private content = "포도주스";
    drinking() {
        return `${this.content}를 마셨어`;
    }

    set(_content) {
        return this.content = _content;
    }
}

class Cup {
    private drink;
    constructor(_drink) {
        this.drink = _drink;
    }
}

const _drink = new Drink();
const cup = new Cup(_drink);
```
> 여기서 _drink를 인자로 전달 받아서 직접 생성을 제어하는 것이 아닌 외부에서 객체를 생성해서 의존성을 주입해서 외부에서 객체를 관리할 수 있게 하는 것이 제어의 역전이다.


## IOC의 필요성
> IOC의 필요성 이해

### 음료수 가게 사장님
> 컵에 음료수를 따라서 마시는 기능
```js
class Drink {
    private content = "포도주스";
    drinking() {
        return `${this.content}를 마셧어`;
    }
}

class Cup {
    private drink;
    constructor() {
        this.drink = new Drink();
    }
    drinking() {
        console.log(this.drink.drinking());
    }
}

const cup = new Cup();
cup.drinking();
```
> 이 코드에서 내가 주스를 마셨는데
> 나는 딸기주스는 먹고 싶은데
> cup 클래스는 drink 클래스를 set 함수를 생성해서 관리를 해줘야 한다.
> 난 딸기주스를 먹기가 쉽지 않아

## IOC 사용
```js
class Drink {
    private content = "포도주스";
    drinking() {
        return `${this.content} 를 마셨어`;
    }

    set(_content) {
        this.content = _content;
    }
}

class Cup {
    private drink;
    constructor(_drink) {
        this.drink = _drink;
    }

    drinking() {
        console.log(this.drink.drinking());
    }
}

const drink = new Drink(); // 객체생성과 객체의 생명주기, 메서드
drink.set("딸기주스");
const cup = new Cup(drink);
```
> cup의 내부에서 제어를 하는 것이 아닌 외부의 제어를 받아서 변경되는 것(역할과 책임을 분리)
> 어떤 주스를 먹던지 간에 원하는 주스를 먹을 수 있게 되었다.
> 객체 지향의 원칙을 지키며 코드의 응집도를 높이고 객체의 결합도를 낮추기 위해
> drink의 내용이 변경되더라도 유연한 코드를 작성할 수 있는 구조가 된다.(유지보수성)
> 위에서 한 것처럼 작성하는 이유는 목적은 클래스에 변경에 따른 다른 클래스의 변경을 최소화 하기 위함

### IOC를 사용할때 구현의 밀접한 관계가 있는 DIP(객체 지향 설계 원칙)
> Dependency Inversion Principle 의존 역전 원칙
> DIC의 목적은 모듈들의 결합을 낮추는 것
> 고수준 모듈과 저수준 모듈의 추상화에 의존하게 설계
> 쉽게 말해서 여기서 고수준은 cup이고 저수준은 drink를 추상화에 의존하게 해라
> 자바스크립트에서는 인터페이스를 타입스크립트를 사용해서 작성해라

```ts
interface IDrink {
    drinking(): string;
}

class Drink implements IDrink {
    drinking() {
    }
}

class Cup {
    constructor(_drink: IDrink) {
        this.drink = _drink
    }
}

// 원칙에 따라서 개발
// IOC 컨테이너 객체를 만들어서 사용 cup 클래스에 drink 객체를 주입하는 역할을 하는 객체
class IOCContainer {
    private dependencies: any = {};

    // new () => T 생성자함수를 매개변수의 타입으로 받겠다.
    register<T>(name: string, implements: new () => T) {
        this.dependencies[name] = new implements();
    }

    resolve<T>(name: string): T {
        return this.dependencies[name];
    }
}

const container = new IOCContainer();
container.register<IDrink>("Drink", Drink);

const mydrink = container.resolve<IDrink>("Drink");
const mycup = new Cup(mydrinkp);
```

## 쉽해 말해서 DI, IOC, DIP

> DI는 외부의 내용을 받아서 사용한다. 디자인 패턴
> IOC 객체의 생성과, 생명주기를 따로 제어를 따로 관리 객체를 외부에서 생성하고 받아서 사용하는 원칙
> DIP는 interface 사용 추상화로 설계하는 원칙