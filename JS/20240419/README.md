# 쿠키 세션 로컬스토리지

## 쿠키 문법
```js
// 쿠키 키 = 값;expires='시간';path=/
// 게시판 ="1";expires='date.toUTCstring()';path=/

function createCookie(name, value) {
    let date = new Date();
    date.setTime(date.getTime() + 10000);
    // 쿠키의 값을 생성
    document.cookie = `${name}=${value}; expires=${date.toUTCstring()}; path=/`
}

function getCookie(name) {
    // match === 정규식으로 문자열을 조회해서 쿠키의 키값이 있는지
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

    options = {
        path: '/', // 경로 지정
        ...options // 아규먼트로 옵션을 넘겨줬을경우 전개연산자로 추가 갱신
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString(); // 생 Date 객체라면 형식에 맞게 인코딩
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    // name=value

    // optionKey = path
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) { // 밸류가 없다면
        updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie; // 새로 갱신
}

function deleteCookie(name) { // 해당 쿠키 요소만 삭제
    setCookie(name, "", {
        'max-age': -1
    })
}
```

```js
// 키와 값과 시간 경로
function createCook(name, value, time) {
    // 썩은 쿠키는 유효라지 않다.
    // 시간을 넣지 않고 쿠키를 생성하면 커키 지속 계속 되는 쿠키
    let date = new Date();
    // 밀리세컨드로 시간을 증가되 값으로 만들어서

    date/setTime(date.getTime() + time * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + value + ";" + "expires=" + date.toUTCstirng() + ";" + "path=/";
}
```

## 세션

```js
// 세션에 값을 저장
sessionStorage.setItem("토큰", "데이터의 내용");

// 세션의 값을 호출
// 토큰의 키가 있으면 데이터를 홏울
sessionStorage.getItem("토큰");

sessionStorage.clear();

sessionStorage.removeItem("토큰");
```

## 로컬 스토리지

```js
// localStorage 큰 데이터를 저장할때 사용한다.
localStorage.setItem("토큰", "데이터의 내용");

localStorage.getItme("토큰");

localStorage.clear();

// 인덱스로 값을
localStorage.key(0);
```