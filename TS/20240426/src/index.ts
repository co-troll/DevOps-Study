const input = document.querySelector(".uid") as HTMLInputElement;
const inputpw = document.querySelector(".upw") as HTMLInputElement;
const inputBtn = document.querySelector(".uid-btn") as HTMLButtonElement;

// Element에 value가 없을거다.
console.log(input.value);

type userLoginInputDTO = {
    uid: string,
    upw: string,
    city?: string,
    [key: string]: string,

}

inputBtn.onclick = function(e: Event) {
    // form 요소를 사용시 ㅜname의 요소에 접근하기 위해서
    // const _target = e.target as HTMLFormElement;
    // const uid = _target.uid;

    // input 요소를 사용시 value 같은 속성에 접근하기 위해서
    // 오류를 우리가 실행전에 좀 유추할 수 없게 된다.
    // if ((e.target as Element).classList.contains("uid-btn")) {
    //     const _target = e.target as HTMLInputElement;
    //     const uid = _target.value; 
    //     console.log(uid)
    // }

    const _value = (input as HTMLInputElement).value;
    const _value2 = (inputpw as HTMLInputElement).value;
    const userData: userLoginInputDTO = {
        uid: _value,
        upw: _value2,
        "name": "안녕",
        "name2": "안녕",
        "name3": "안녕",
        "name4": "안녕",
        "name5": "안녕",
    }

    userData["name"]
    console.log(userData?.city);
    console.log(_value);
}