// reduce
let a = [1,2,3,4,5,6];
// 초기값을 정할수 있고

const result = a.reduce((acc, content) => {
    acc.push(content + 1);
    return acc;
}, []);

console.log(result);