const student = {
    age : 22,
    phone : "01000000000",
    city : "서울",
}

const student2 = {
    age : 20,
    phone : "01000000000",
    city : "서울",
    say : function () {
        console.log(this);
    }
}


// this
function createStudent(age, phone, city) {
    this.age = age;
    this.phone = phone;
    this.city = city;
}

// new
const student3 = new createStudent(23, "01000000000", "대구");

student2.say();
// this는 속해있는 객체를 참조한다.
console.log(this);
console.log(student);
console.log(student3);
console.log(student3.age);
console.log(student3.phone);

student.say = function() {
    console.log(this);
}

student.say();

// 실습을 할건데 학생의 정보를 이름과 나이만 받아서 만드는 함수를 작성하시고 옆친구 5분만 객체를  만들어보세요

function makeStudent (name, age) {
    this.name = name;
    this.age = age;
}

const ase = new makeStudent("이", 32);
const bse = new makeStudent("김", 23);
const cse = new makeStudent("최", 25);
const dse = new makeStudent("박", 30);
const ese = new makeStudent("강", 28);

console.log(ase);
console.log(bse);
console.log(cse);
console.log(dse);
console.log(ese);

