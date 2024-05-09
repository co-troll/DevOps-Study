// 반복문

/* for(let a = 0; a < 10; a++) {
    console.log(a);
} */

/* 
[for(예약어)] ([선언식]; [조건문]; [연산식]) {반복될 코드의 내용}
*/

// 순서
// 선언식 -> 조건문 확인 -> 스코프 코드 실행 -> 연산식 -> 조건문 -> 스코프 코드 실행 -> 연산식 -> 조건문 ->

// #region 
/* for (let a = 0; a <= 20; a++) {
    console.log(a);
}

console.log("------------------------------");

for (let a = 0; a <= 20; a += 2) {
    console.log(a);
}

console.log("------------------------------");

for (let a = 1; a <= 20; a += 2) {
    console.log(a)
} */
// #endregion

// 2중 for문
/* for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log("i, j", i, j);
    }
} */


// 구구단 만들기

/* for (let i = 1; i < 10; i++) {
    console.log("3x"+i+" = "+ 3*i);
}

for (let i = 1; i < 10; i++) {
    console.log("4x"+i+" = "+ 4*i);
} */

//#region 
/* for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
    }
} */
//#endregion

// continue 밑의 코드 내용을 실행 x 다시 연산식 -> 조건문 -> 실행
/* for (let i = 0; i < 10; i++) {
    if ((i >= 3) && (i < 5)) continue;
    console.log(i);
} */

// 잘쓰는 사람들만 사용하라
// while은 반복 횟수가 무한.
// break 반복문을 종료시킨다.
// 조건문 -> 코드 실행 -> 조건문 -> 코드 실행
/* let a = 0;
while (true) {
    a++;
    if (a > 10) break;
} */

/* // while문으로 2단 만들기 break문으로 종료
let i = 1;
while (true) {
    console.log("2x" + i , "=", 2*i);
    i++;
    if (i == 10) break;
}

// while문으로 2단을 만들기 조건문으로 break문 없이
i = 1;
while (i < 10) {
    console.log("2x" + i , "=", 2*i);
    i++;
} */
