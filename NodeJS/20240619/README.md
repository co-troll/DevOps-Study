# 파일 업로드 Multer
> Mutler express 환경에서 파일의 업로드를 처리하는 미들웨어
> 주로 multipart/form-data 형식의 데이터 파일 처리할때 사용한다.
> 파일 업로드를 할 수 있도록 제공한다.
> 메모리 혹은 파일을 디렉터리에 저장하는 옵션을 사용할 수 있다.

> https://github.com/expressjs/multer/blob/master/doc/README-ko.md <- 설정 주소

## 구조
> Multer multipart/form-data 형식의 데이터 처리하기 위해 스트림을 사용한다.
> 우리가 지정한 위치에 저장한다.

> 스토리지 옵션 : 파일을 저장할 위치 방법을 설정할 수 있는 옵션이 제공된다.
> 파일 필터링 : 업로드되는 파일을 필터링해서 확장자 등의 조건에 맞는 파일 처리만 할수 있는 옵션을 제공
> 파일 크기 제한 : 파일의 크기를 제할할수 있는 옵션을 제공

## RESTful API 
> 웹 서비스 서례의 원칙 http 프로토콜을 사용해서 클라이언트와 서버의 통신을 할수 있게 개발 방법을 정한 것
> 자원 기반 : 자원의 요청과 응답간에는 URI http 메서드
> GET, POST, PUT, DELETE
> 캐시 : 응답 데이터는 캐시화 될수 있고 성능이 향상된다.

## ajax, fetch, axios

### ajax 
> 초기 웹페이지는 서버에서 모든 데이터를 받아야 했고, 페이지의 새로고침이 되지 않으면 데이터로 화면을 보여주기 불가능, 데이터를 새로고침 되지 않아도 볼수 기술을 개발을 시작했고
> 1999년 XMLhttpRequest 객체를 만들고 AJAX가 생겼고 페이지를 새로고침 하지 않고 서버와 데이터를 주고 받을 수 있게 됐다.
> XMLhttpRequest 객체로 데이터를 주고 받으면 비동기적으로 데이터를 주고 받을 수 있다.
> 상태가 필요했고 요청을 보내고 상태의 변화를 확인하다가 상태가 완료 상태가 되면 코드를 확인하고
> 코드에 맞는 내용을 작성해줘야한다. 상태 코드를 조건문으로 200이든 404든 등등의 상태 코드들을 하드 코딩으로 확인 해서 작성을 해줘야한다.
> 콜백 지옥이 펼쳐 질 수 있다.

```js
// ajax
let xhr = new XMLhttpRequest();
xhr.open("GET", "http://127.0.0.1:3000/post");
// onreadystatechange 요청을 보내고 완료상태가 되었을때
xhr.onreadystatechange = () => {
    if ((xhr.readyState === 4) && (xhr.status == 200)) {
        JSON.parse(xhr.responseText);
    } 
}
// 요청
xhr.send();
```

### Fetch
> ajax도 부족함을 없었는데 코드가 길어지는 문제가 있었고 이 부분의 문제를 모던한 API를 개발하자
> 2015년도 쯤 Fetch는 promise 기반으로 코드가 좀더 직관적이고 짧아졌다.
> promise 기반이기 때문에 좀더 비동기 처리를 쉽게 할수 있게 됐다.
> 응답의 메시지를 객체로 받아서 json이나 text 형식의 데이터를 파싱에서 사용한다.
> 상태코드를 제어해서 코드를 작성해야하는 경우에는 따로 처리를 해줘야 한다.

```js
fetch("http://127.0.0.1:3000/post").then((res) => {
    if (!res.ok)
        return console.log("네트워크 에러");
    return res.json(); 
}).then(console.log(data));
```

### Axios
> fetch 이후 기능적으로 요청을 취소하거나 타임아웃이나 json 변환을 기본으로 제공을 해주게 개발했다.
> 자바스크립트 기반으로 개발한 라이브러리
> fetch와 차이점은 promise를 반환하지만 json변환은 자동으로 추가적으로 타임아웃 설정, 요청, 취소, 요청 응답의 인터셉터

```js
npm i axios

axios.get("http://127.0.0.1:3000/post").then((res) => console.log(res.data));

const res = await axios.get("http://127.0.0.1:3000/post");
console.log(res.data);
```

1. AJAX : XMLhttpRequest 객체의 기반, 콜백 지옥의 문제가 있다.
2. Fetch : Promise 기반, 코드가 간결하고 직관적으로 작성할 수 있다. http 응답 내용 파싱작업은 해줘야 한다.
3. Axios : Promise 기반, 파싱된 json 데이터를 기본을 제공, 추가 기능 등등 제공 nodejs 라이브러리

