import { createContext, useState } from 'react';
import A from './A';

// context 객체를 생성
// Store 전역상태를 관리할 인스턴스
export const Store = createContext();

// props 드릴링
export const Context = () => {
  const [login, setLogin] = useState(false);

  // 전역 상태로 관리
  const obj = {
    login, setLogin
  }

  // <Store.Provide> 전역상태를 고유할 부모 컴포넌트를 감싸준다.
  // 전역 상태로 관리할 값을 value 키로 props로 전달
  return (
    <Store.Provider value={obj}>
      <A />  
    </Store.Provider>
  )
}