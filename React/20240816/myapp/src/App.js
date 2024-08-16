import React, { useEffect, useState } from 'react'
import Game from './page/Game'
import { Routes, Route } from 'react-router-dom'
import Boom from './page/Boom'
import Main from './page/Main'

const App = () => {

  // 생명주기
  // `react hook` : 기능을 가져온다(자주사용하는 유용한 기능들을 hook 만들어뒀음) 접두ㅏ로 use가 꼭 붙는다 (규칙)

  // 상태 변수는 값을 가지고 있는 변수가 하나 상태 변수 전환 하뭇 두가지르 가지고 있어야 한다

  // useState의 반환 데이터 타입은 배열의 타입을 반환한다. (첫번째가 상태 변수, 두번째가 setState 함수) 함수 호출할때 매개변수로 전달하는 값이 초기값
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState("");

  // const increment = () => {
  //   setCount(count + 1);
  // }

  // useEffect : 첫번째 매개변수로 함수를 전달 두번째 매개변수로 배열의 요소로 주시할 값을 전달 배열이 빈배열이면 mount의 생명주기 함수
  // useEffect(() => {
  //   console.log(count);
  // }, []);

  // 생명주기 update
  // useEffect(() => {
  //   console.log("나는 마운트와 업데이트");
  //   console.log(count);
  // }, [count]);

  // 생명주기 willUnmount
  // useEffect(() => {
  //   return () => {
  //     // 반환한 함수를 컴포넌트가 사라졌을때 호출
  //     console.log("컴포넌드가 사라졌다.");
  //   }
  // }, [])

  return (
    <div>
      {/* 안녕하세요
      count : {count}
      <button onClick={increment}>증가</button>
      name : {name}

      <button onClick={() => { setName("newName")} }>이름 변경</button> */}
      <div>gnb</div> {/* gnb footer */}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/boomGame' element={<Boom />} />
        <Route path='/rockGame' element={<Game />} />
      </Routes>
      <div>footer</div>
    </div>
  )
}

export default App