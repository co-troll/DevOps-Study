// 반복문을 사용한 경우
console.time()
let count = 0;
for (let i = 1; i <= 100; i++) {
    count += i;
}
console.timeEnd();

// 수학 공식을 사용한 경우
console.time();
let n = 100;
console.log((n / 2) * (n + 1));
console.timeEnd();

// 재귀 함수를 사용한 경우
console.time();
function sum(n, result) {
    if (n === 101) {
        console.log(result);
        return n;
    }
    sum(n + 1, result + n);
}
sum(1, 0);
console.timeEnd();

// 피보나치 수열
console.time();
function fibo(n) {
    if (n == 1 || n == 2) return 1;
    return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(50));
console.timeEnd();

// memo 빈 객체 생성
// 상태 데이터를 객체에다 담아두려고
console.time();
let memo = {};

// in 예약어
// 객체안에 키가 있는지 확인
// 반환값은 true false

function fibo2(n) {
    let result; // 연산을 하고 반환한 값

    // 한번 상태를 만든 연산인지.
    if (n in memo) {
        // 연산을 했었어
        result = memo[n];
        // 객체를 하고 넘어오면 더 이해가 될거니까.
    } else {
        // 연산을 안했었어
        if (n == 1 || n == 2) {
            result = 1;
        } else {
            result = fibo2(n - 1) + fibo2(n - 2);
        }

        // 다음번에 연산을 하지 않게 하기 위해서 상태값을 저장
        memo[n] = result;
    }

    return result;
}

console.log(fibo2(100));
// console.log(memo);
console.timeEnd();

// 실습 재귀함수로 짝수를 더하는 함수를 재귀적으로 돌리자 더하는 횟수는 인자값으로 전달 받아서.
let evensum = 0;
let evenmemo = {};
function evenSum(n) {
    if (n == 1) result = 2;
    else result = evenSum(n - 1) + (n * 2);
    evenmemo[n] = n * 2;

    return result;
}

evensum += evenSum(100);

console.log(evensum);
console.log(evenmemo);