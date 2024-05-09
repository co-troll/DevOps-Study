/* const player: string = prompt("가위바위보: ");
const comSelect: number = Math.floor(Math.random() * 3);

const rsp: string[] = ["가위", "바위", "보"];

const com: string = rsp[comSelect];

const result2 = com == player ? "무승부" : 
    com == "가위" ? player == "바위" ? "승리" : "패배" : 
    com == "바위" ? player == "보" ? "승리" : "패배" :
    player == "가위" ? "승리" : "패배";

console.log(`컴퓨터: ${com} 플레이어: ${player}`);

console.log(result2);
 */
console.log(function(com: string, player: string): string {return `플레이어: ${player} 컴퓨터: ${com} \n${com == player ? "무승부" : com == "가위" ? player == "바위" ? "승리" : "패배" : com == "바위" ? player == "보" ? "승리" : "패배" : player == "가위" ? "승리" : "패배"}` }(["가위", "바위", "보"][Math.floor(Math.random() * 3)],prompt("가위바위보 : ")))