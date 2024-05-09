# CSS

## 기초 이론
## 문법
## 선택자
## 결합자

### 1. 기초 이론
html이 구조를 위한 내용이면 CSS는 모양을 위한 시트
브라우저의 요소에 모양을 적용시킨다.

```css
    선택자 {
        속성 : 값
    }
```

선택자 : 어떤 요소에 스타일을 적용 시킨 건지.

폴더 구조에서 *을 사용하게 되면 
/* : 루트경로에 있는 모든 파일
/** : 루트경로에 있는 모든 폴더
```css
    * {} 모든 요소의 선택자
    div {} 유형 선택자 모든 div태그에 스타일을 적용 시키겠다.
    .class {} 클래스 선택자 그룹 
    #id {} 아이디 선택자 고유 식별 중복 불가
```

결합자 : 여러 선택자를 연결해서 스타일을 적용
```css
    div div {} 자손 결합자 
    .class .class2 {} 자손 결합자
    div > div 자식 결합자 바로 아래 자식만
    div + div 인접 결합자 옆에 있는 형제
```

의사 클래스/요소 : html 작성할 때 요소로 작성하지 않은 요소를 선택할 때

```css
    div:hover {} 의사 클래스
    div:after {} 의사 요소
```

### 스타일의 속성과 값
```css
    .box {
        display : block;
        /* block은 블록의 요소, 화면의 한줄을 다 차지한다. div의 기본값*/

        display : inline;
        /* 인라인 요소 span a 등등 요소가 인라인을 가지고 있다, 요소의 내용의 크기만큼 차지한다. */

        display : flex;
        /* 이 속성이 있는 자식의 요소의 정령의 방식을 정한다 */

        display : none;
        /* 화면에서 요소가 보이지 않게 지워 버린다. 나중에 자바스크립트에서 display 속성을 none으로 지워버리고 요소 선택을 하면 선택이 되지 않는다. */

        display : inherit;
        /* 부모의 속성을 가져와서 값을 적용한다. */

        display : initial;
        /* 태그가 원래 가지고 있던 속성으로 초기화 */
    }

    .wh {
        width : 100px;
        /* 태그의 너비 */
        hei :100px;
        /* 태그의 높이 */

        width : max-content;
        /* 자식 내용의 크기만큽 너비를 차지한다. */
        width : min-content;
        /* 자식 내용의 최소만큼 너비를 차지한다. */

        max-width : 100px;
        /* 설정한 너비 이상으로 태그의 너비가 넓어질수 없다. */
        min-width : 100px;
        /* 설정한 너비 이하로 태그의 너비의 크기가 줄어들기 않는다. 최소 너빌르 지정 */
    }

    .content {
        width : 100px;
        height : 100px;

        overflow : hidden;
        /* 자식 태그가 부모 영역 이상으로 넘어가면 보이지 않게 처리 */

        overflow : scroll;
        /* 자식의 태그가 부모의 영역 밖으로 나왔을때 스크롤 효과를 준다. */

        overflow-x : hidden;
        /* 좌우로 자식 태그가 넘어가면 안보이게 처리 */

        overflow-x : scroll;
        /* 좌우로 자식 태그가 넘어가면 스크롤 처리 */

        overflow-y : scroll;
        /* 자식태그가 아래로 넘어가면 안보이게 처리 */

        overflow-y : scroll;
        /* 자식태그가 아래로 넘어가면 스크롤 처리 */

        opacity ; 0.1;
        /* 태그에 투명도를 설정 할 수 있다. 1 == 100% 0.1 == 10% */

        /* text style ---------------------------- */

        font-size : 16px;
        /* 태그의 내용에서 글자의 크기를 지정 */

        font-weight :500;
        /* 태그의 글자의 굵기 지정 */

        color : red;
        /* 글자의 색 지정 */

        text-align : center;
        /* 글자의 정령을 가운데로 */

        text-align : end;
        /* 글자를 오른쪽으로 정렬 */

        text-align : start;
        /* 글자를 왼쪽으로 정렬 */

        text-decoration : overline;
        /* 텍스트에 위에 선을 추가 */

        text-decoration : underline;
        /* 텍스트에 밑줄을 추가한다. */

        text-decoration : none;
        /* 텍스트에 꾸밈 요소 제거 */

        letter-spacing : 10px;
        /* 글자의 간격 조절 */

        /* 요소 간격 조절 --------------------- */
        margin : 1px;
        /* 요소의 외부 간격 */
        /* top left right bottom */

        margin : 1px 2px;
        /* top bottom == 1px, left right == 2px */

        margin : 1px 2px 3px 4px;
        /* top == 1px left == 2px right == 3px bottom == 4px */

        padding : 1px;
        /* 요소의 내부 간격*/

        padding 1: 1px 2px;


    }
```

실습 : 할일 리스트 만든거를 표의 형태 flex 할일 리스트

과제 : 레이아웃 구성하고 회원가입 폼을 완성하기 
이름 입력 
성별 체크박스
나이 입력
이메일
전화번호 입력
회원가입 버튼