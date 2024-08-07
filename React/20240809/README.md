# React란?

## 탄생 배경
> react는 프론트 엔드 라이브러리
> 공식 홈페이지에서도 라이브러리라고 한다.

## 라이브러리 프레임워크의 차이
1. 프레임워크
  - 디렉터리의 구성이 있다.
2. 라이브러리
  - 디렉터리의 구성이 없다.

## 프론트 엔드의 3대장
Angular, Vue(nuxt), React(next) 3대장

- SPA의 이전 세대
> 자바스크립트의 dom제어를 어떻게 편하게 할 수 있을까?
> jquery를 사용하던 시대(코드가 간결하고 막쓰면 다됨)(자바스크립트 모르는 사람도 제이쿼리를 외워서 씀)
> 제이쿼리의 문제점 막쓰면 된다고생각하기 때문에 자바스크립트를 모르고 사용하는 사람들이 발생 제일 큰 문제점 가독성 다떨어지고 최적화가 아예 안됨 엄청 무거운 프로젝트가 탄생

> 2006년에 john Resig가 제이쿼를 발표
> DOM 제어가 무척 쉬웠다. 제이쿼리가 표준이라는 말이 나올 정도 였음
> 크로스 브라우징
> 초기 시절에는 인기가 많았다

> SPA 싱글 페이지 어플리케이션
> 웹페이지를 사용하는데 마치 앱을 사용하는것 같은 사용감
> SPA의 초기사례 Goolge의 gmail(인기가 만점)(웹페이지에서 앱처럼 동작)'
> Backbone, AngularJS를 사용한 SPA 환경을 구축했고 DOM을 다루는 방식은 제이쿼리
> React가 탄생
> React의 개념은 탄생 했을때 11년 이상은 가지고 놀수 있는 기술이 될것 같다.
> React도 많은 플랫폼 중에 에어비엔비, 넷플릭스
> React는 많은 개발자들 사이에서 자연스럽게 생태계가 커지게 됨
> 제이쿼리의 dom제어를 사용할 필요가 없다.
> React의 가상돔을 사용해서 제어
> 부분 렌더링이 가능하다.

# React
- 싱글 페이지 어플리케이션(SPA)
- 보여주는 하나의 페이지를 중심으로 view가 중심인 어플리케이션
- react router dom 페이지가 이동한 것 같으 느낌을 줄 수 있다.

## 특징
1. 데이터의 흐름
2. 컴포넌트의 구조
3. 가상돔
4. props와 state
5. JSX

- 데이터의 흐름 : 리액트는 단방향 데이터의 흐름 vue angular는 양방향 데이터의 바인딩을 가지고 있다.

- 컴포넌트의 구조 : 컴포넌트는 하나의 객체 페이지의 구성 요소의 UI 단위, UI 여러개로 나눠놓은것, 

- 가상돔
> DOM은 html과 css의 내용을 트리구조로 가지고 있고
> 브라우저는 DOM이 변경되면 화면을 다시 그리는데 
> DOM이 변경된 비용이 비싼게 아니고 변경이 되고 난 뒤에 동작이 비싸다.
> 페인팅을 할때 무겁다 css 살을 입힐때
> 이 비싼 동작을 최소화 시켜준다. === 가상돔
> DOM이 1000번을 리렌더링을 해야하는 순간이 탄생할 수 있다. 
> 1번으로 줄여서 렌더링 해준다.
> 작업을 모아서 처리를 한번에 해준다.

- props 
> 데이터 전달이 목적
> 함수의 변수처럼 사용하는 느낌
> 자식이 부모에게 전달 받을 수 있는 값
> 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달하는 것
> props 를 전달할때 `props 드릴링`을 최대한 피해서 잘 작성해야한다.
```js
function a (props) {
    console.log(props);
}
```

- state
> 상태를 관리하기 위한 값
> 관리할 데이터를 유지 시키는게 목적
> UI를 나눠놓은 다누이 객체 컴포넌트의 내부에 값을 선언하고 페이지가 동작하는 동안 유지되고 변경될 데이터
> 예) 사용자가 입력값을 입력하면 가지고 있다가 사용할때 사용되는 변수 
> 리액트는 상태값을 주시고하 있다가 상태가 변경되면 반응한다.

- JSX
> javascript XML 자바스크립트내에서 html과 유사한 코드를 작성할수 있다.
```js
const a = () => {
    reutrn (
        <div>
            // 여기 부분이 바로 react의 컴포넌트에서 그려주는 UI
        </div>
    )
}
// 코드르 그대로 실행시키는냐? ㄴㄴ
// 트랜스파일해서 변경된 파일을 실행해서 사용하는것
// JSX => js === 자바스크립틀 변환된다.
```
> react를 사용할때 사용할 새로운 문법
> html파일과 구문의 가독성을 높히고 내용을 줄여서 사용할 수 있다.
> `webpack`이 jsx문법으로 작성한 파일을 js로 변환하고 번들링도 하기위한 속성을 관리한다. `webpack`이 중요 모르면 react사용하지 마라라는 말도 잇을 정도

```sh
# 바로 사용 x
# 보기만 할것
npx create-react-app myapp
```