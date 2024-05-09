// 로또 추첨기

let lottoNum : number[] = [];
let result: number[] = [];

function lottoInit(): string {
    lottoNum = [];
    for (let i = 1; i <= 45; i++) {
        lottoNum.push(i);
    }
    return "init 함수 실행 lotto초기화";
}
// void 타입
// 반환 값의 데이터 타입을 지정하고 싶다.

function lottoPlay() {
    result = [];
    for (let i = 0; i < 6; i++) {
        let randomIndex: number = Math.floor(Math.random() * lottoNum.length);
        let number: number = lottoNum[randomIndex];
        lottoNum.splice(randomIndex, 1);
        result.push(number);
    }
}

function main() {
    const text: string = lottoInit();
    console.log(text);
    lottoPlay();
    console.log("로또 결과", result);
}

main();