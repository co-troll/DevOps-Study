import React, { useEffect, useState } from 'react';
import { useRecoilValue, useRecoilValueLoadable, useResetRecoilState, useSetRecoilState } from 'recoil';
import { Login, LoginCheck } from '../recoil/countAtom';

const LoginForm = () => {
  const [uidInput, setUidInput] = useState("");
  const [upwInput, setUpwInput] = useState("");

  const loginState =useRecoilValue(Login);
  const setLoginState = useSetRecoilState(Login);
  const loadableLoginState = useRecoilValueLoadable(LoginCheck);
  const resetLoginState = useResetRecoilState(Login);

  const handleLogin = (e) => {
    e.preventDefault();
    const { uid, upw } = e.target;
    setLoginState({ uid: uidInput, upw: upwInput });
  }

  useEffect(() => {
    // console.log(loadableLoginState);
    const { state } = loadableLoginState;
    switch (state) {
      case "hasError":
        resetLoginState();
        console.log("로그인 실패");
        break;
      case 'hasValue':
        console.log("로그인 성공");
        break;
      case 'loading':
        console.log("로그인 중");
        break;
      default:
        break;
    }
  }, [loadableLoginState])

  useEffect(() => {
    console.log(loginState);
    setUidInput("");
    setUpwInput("");
  }, [loginState])

  const handleUidInput = (e) => {
    setUidInput(e.target.value);
  }

  const handleUpwInput = (e) => {
    setUpwInput(e.target.value);
  }

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="">아이디</label>
      <input type="text" name="uid" value={uidInput} onChange={handleUidInput} />
      <label htmlFor="">비밀번호</label>
      <input type="password" name='upw' value={upwInput} onChange={handleUpwInput}/>
      <button>로그인</button>
    </form>
  )
}

export default LoginForm