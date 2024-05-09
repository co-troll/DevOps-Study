# 시간 날짜 Date 객체

javascript에 기본적으로 내장되어있는 생성자

```js
new Date(); // 현재 날짜 출력
```

```js
new Date(1000);
// 한국 표준시 1970년 1월 1일 0시
// 컴퓨팅 시스템에서 시간을 추적하는 시스템 유닉스 시간의 시작점
.// 1000 밀리초 1초가 지난 시간
```

```js
new Date(24 * 3600 * 1000);
// 24시간 후의 시간을 나타내는 Date객체 생성
```

```js
new Date("2024-04-18");
// Date객체가 전달된 문자영을 인자로 연도, 월, 일
```

```js
const _date = new Date("2024-04-18");
_date.getFUllYear(); // 년도를 반환
_date.getMonth(); // 월을 숫자로 반환 0 ~ 11
_date.getDate(); // 일을 반환 일을 그대로 사용하면 되고
_date.getDay(); // 요일을 반환 0 ~ 6
```

# comment

> 댓글 구현 CRUD


### 작업의 내용

1. 댓글을 입력 할수 있다. (Create)
    - 댓글을 입력폼에 입력하고 작성버튼을 누르면 리스트에 댓글이 추가
    - 댓글을 성공적으로 추가하면 입력폼을  reset시켜야한다.

2. 댓글을 리스트로 조회해서 출력해준다. (Read)
    - 댓글의 내용은 `아이디` `댓글 내용` `날짜` 로 표현
    - 댓글 리스트는 최신순으로 나타낸다.
    - 댓글의 총 갯수를 표현
    - 수정 버튼이 존재한다.
    - 삭제 버튼이 존재한다.

3. 댓글을 수정할수 있다. (Update)
    - 댓글 리스트에서 내용을 클릭하면 inputbox가 생기고
    - input에 값을 입력받고
    - .엔터를 누르면 input에 입력한 수정되게

4. 댓글을 삭제할수 있다. (Delete)
    - 해당 리스트의 삭제버튼을 클릭하면 안내를 한번 하고 정말 삭제할거야?
    - 확인을 누르면 삭제 진행
    - 취소를 누르면 삭제 진행 x

### Create 단계 데이터르 저장할 때

### REad
데이터를 어떻게 출력할건지
```js
    const list = [
        { uid: "soon", comment: "내용1", date: "2024-04-18" },
        { uid: "soon", comment: "내용2", date: "2024-04-18" },
        { uid: "soon", comment: "내용3", date: "2024-04-18" },
        { uid: "soon", comment: "내용4", date: "2024-04-18" },
    ]
```
이 리스트의 데이터를 요소로 표현

```html
<ul class="comment-row">
    <li class="comment-id">soon</li>
    <li class="comment-content">내용1</li>
    <li class="comment-date">2024-04-18</li>
</ul>    
```

```js
const ul = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");

ul.append(li1, li2, li3);

ul.classList.add("comment-row");
li1.classList.add("comment-id");
li2.classList.add("comment-content");
li3.classList.add("comment-date");

// 내용
// 출력하고싶은 위치의 요소에 append
```



