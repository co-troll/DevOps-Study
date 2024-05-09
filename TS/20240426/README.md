# 타입 어서션
# 타입 앨리어스
# 타입 클래스 수정자
# 제네릭

## 타입 어서션
> document.querySelector("") as "타입이다."
```ts
const input = document.querySelector("input") as HTMLInputElement
```

[변수명] = [값] as [타입명]
> 타입의 어서션은 구체적인 객체의 타입을 알려준다. 객체의 타입을 명시한다.

> typescript
```sh
npm init -y # package.json 초기화
npm i typescript
npx tsc --init
```

## 타입 엘리어스
> 타입 지정에 별명을 부여해준다.

```ts
type userLogin = {
    uid: string,
    upw: stirng,
}
```

## class

```ts
class User{
    private name: string; // 이 name은 객체를 생성하고 .표기법이나 [] 괄호 표기법으로 접근이 불가능하다. 직접 참조할수 없게 만든다.
    // 다른 작업자나 아니면 혹여나 의도치 않게 변경될 경우를 고려하여 직접 참조 혹은 수정이 불가능하다. 객체 안에서 수정이 가능하다.
    public age: number; // 이 age는 객체도 참조 수정이 가능하고 .표기법 혹은 [] 대괄호 표기법으로 접근이 가능하다.
    // 어느 manager까지 우리가 유저를 관리하거나 하다보면 값을 풀어야하는 상황이 생기기도 한다. 객체지향적으로 프로그래밍하다가 어쩔수없을때

    // get set
    getName() {
        // private 속성은 객체 않에서 메서드로 this를 참조하여 호출할 수 있다.
        return this.name;
    }

    setName(_name) {
        // private 속성에 접근해서 name의 값을 수정s
        this.name = _name;
    }
}
```

## 제네릭 타입
> 호출 시에 동적인 타입을 주고 싶은 경우
> <T> : 제네릭 타입 문법
> 타입을 전달한다.
```ts
class Product<A> {
    private name: A;
}

// 제네릭을 사용하는 목적은 코드의 재사용성을 높히기 위해서
const product = Product<string>();
const product2 = Product<number>();

// T : 타입의 축약어
// E : 에러의 축약어
// R : 반환 타입
function name<T, R>(name: T): R {
    // 비동기 TODO
    return name + 1;
}

name<string, number>("asdf");
const user: userLogin = {
    uid,
    upw
}

// DTO : 데이터를 전송할때 구조를 정의한다 (데이터 전송 객체)
name<userLogin, boolean>(user);
```