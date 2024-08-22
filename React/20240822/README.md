# redux react-redux
> react의 전역 상태 관리를 redux로 사용할때 유용한 hook을 라이브러리가 제공해준다.

## redux
> 스토렁를 전역 상태 관리로 하나의 메모리 공간에 별개로 저장한다.
> 컴포넌트에서 전역의 상태값이 필요할때 store에 접근해서 데이터를 참조 혹은 수정 
1. 스토어
2. 액션
3. 리듀서

> 액션은 스토어에 전달할 데이터의 값 액션을 보내서 데이터의 상태를 업데이트한다.
> dispatch 함수를 실행해서 dispatch({ 액션객체의 내용 }) 리듀서 함수를 실행시키고 반환값으로 상태를 업데이트

## redux 동작
- 컴포넌트 => dispatch => action => reducer => store

```sh
npm install redux
npm install react-redux
npm install redux-thunk
```

## action create
> 미들웨어 함수를 추가해서 비동기 처리를 하기위한 함수를 작성

### 로그인 페이지 만들기 실습
> 데이터 베이스 사용해서 mysql 사용해서
> 액션 크리에이터 함수 만들고
> redux store 만들고
> 회원가입 로그인 구현

## recoil