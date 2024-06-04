const buf = Buffer.alloc(10); // size가 10인 버퍼 객체를 만든다.(10 byte)
const buf2 = Buffer.from("Hello Buffer"); // Buffer에 "Hello Buffer" 데이터를 담아준다.

// 버퍼 내용을 확인해 보다
console.log( buf.toJSON() );
console.log( buf2.toJSON() );

buf.write("Hello Buffer aaaa"); // 빈공간에 버퍼의 내용을 넣은것

// 버퍼는 디코딩
console.log( buf.toString() );

const buf3 = Buffer.from("abcd");

for (let i = 0; i < buf3.length; i++) {
    console.log(buf3[i]);
    buf3[i]++;
}

console.log(buf3.toString());

let a = "A";
let b = 12;

a = a.charCodeAt(0).toString(2).padStart(8, "0");
b = b.toString(2).padStart(8, "0");

c = a + b;

const binaryToString = (str) => {
    let temp = "";
    for (let i = 0; i < str.length; i += 8) {
        const strTemp = parseInt(str.substr(i, 8), 2);

        if (String.fromCharCode(strTemp) == false) {
            temp += strTemp;
        }
        temp += String.fromCharCode(strTemp);
    }
    return temp;
}

const res = binaryToString(c);
console.log(res);
