let lottoNum = [];
let result = [];
function lottoInit() {
    lottoNum = [];
    for (let i = 1; i <= 45; i++) {
        lottoNum.push(i);
    }
    return "init 함수 실행 lotto초기화";
}
function lottoPlay() {
    result = [];
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * lottoNum.length);
        let number = lottoNum[randomIndex];
        lottoNum.splice(randomIndex, 1);
        result.push(number);
    }
}
function main() {
    const text = lottoInit();
    console.log(text);
    lottoPlay();
    console.log("로또 결과", result);
}
main();

