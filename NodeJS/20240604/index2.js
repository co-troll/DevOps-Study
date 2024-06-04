const data = {
    name: "soon",
    age: 20,
}

console.log(data);
console.log(JSON.stringify(data));

// 인코딩
const dataString = JSON.stringify(data);
const buf = Buffer.from(dataString); // 기본 인코딩은 utf8

console.log(buf);
console.log(buf.toJSON());
console.log(buf.toString());