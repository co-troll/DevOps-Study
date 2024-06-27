const fs = require("fs");

const { faker, fi } = require("@faker-js/faker");

const file = fs.createWriteStream("student.csv");

file.write("id,name,email,age,class\n");

const classArr = ["devops", "game", "story"];

for (let i = 1; i < 100000; i++) {
    const id = i;
    const name = faker.internet.userName();
    const email = faker.internet.email();
    const age = Math.floor(Math.random() * 100 + 1);
    const className = classArr[Math.floor(Math.random() * 3)];
    file.write(`${id},${name},${email},${age},${className}\n`);
}

file.end();
console.log("생성됨");