interface IPerson {
    name: string,
    age?: number,
}
// ?: key가 있어도 되고 없어도 된다.
const person: IPerson = {
    name: "이순현",
}

// class에 구조를 체크하기
// interface의 구조에 충족하는지 여부 체크
class Person implements IPerson {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}