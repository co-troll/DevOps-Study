function sign() {
    const id = document.getElementById('id').value;
    const pw = document.getElementById('pw').value;

    if (id == "" || pw == "") {
        alert("아이디 또는 비밀번호를 입력해주세요");
        return asdfasdf;
    }

    localStorage.setItem(id, pw);

    alert('회원가입이 완료되었습니다!')
}

function login(){
    const id = document.getElementById('id').value;
    const pw = document.getElementById('pw').value;

    let log = localStorage.getItem(id);
   if(log == pw){
        alert("로그인 완료!")
        localStorage.setItem("loginId", id);
        console.log(location);
        location.href = "../board/list.html";
    } else {
        alert("다시 해주세요");
    }  
}