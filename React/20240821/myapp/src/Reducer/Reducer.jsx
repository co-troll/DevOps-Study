import React, { useReducer } from 'react';
import { INCREMENT, DECREMENT } from './Const';

const Reducer = () => {
  const initialState = {
    count: 0,
    login: false
  }

  // 메뉴판
  const reducer = (state, action) => {
    const { type, payload } = action;
    // type 어떤 행동을 취할건지
    // payload 상태를 업데이트할때 필요한 값
    switch (type) {
      case INCREMENT:
        return { ...state, count: state.count + payload.count }
      case DECREMENT:
        return { ...state, count: state.count - 1 }
      default: 
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: INCREMENT, payload: { count: 2 } });
  }
  
  const handleDecrement = () => {
    dispatch({ type: DECREMENT });
  }

  return (
    <div>
      count : {state.count}
      login : {state.login? "로그인 됨": "로그인 안됨"}
      <button onClick={handleIncrement}>증가</button>
      <button onClick={handleDecrement}>감소</button>
    </div>
  )
}

export default Reducer;