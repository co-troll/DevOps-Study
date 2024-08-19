import React, { useEffect, useState } from 'react'
import { Button, Form, Input, InputBox, Label } from './Login.styled'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

const Login = ({ userInfo: { users, setUsers } }) => {

  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useSearchParams();

  const [uidInput, setUid] = useState("");
  const [upwInput, setUpw] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    if (location.pathname === "/signup") {
      const userList = users || [];
      console.log(userList);
      const user = { uidInput, upwInput };
      userList.push(user);
      
      setUsers(userList);
      navigate('/login');
    }
    else if (location.pathname === "/login") {
      users.filter()
    }
  }

  const signupButton = () => {
    navigate('/signup');
  }

  return (
    <>
      <Form onSubmit={loginHandler}>
        <h2>{location.pathname === "/login"? "로그인": "회원가입"}</h2>
        <InputBox>
          <Label>아이디</Label>
          <Input value={uidInput} onChange={e => setUid(e.target.value)}/>
        </InputBox>
        <InputBox>
          <Label>비밀번호</Label>
          <Input value={upwInput} onChange={e => setUpw(e.target.value)}/>
        </InputBox>
        <Button>{location.pathname === "/login"? "로그인": "회원가입"}</Button>
      </Form>
      {location.pathname === "/login"? <Button onClick={signupButton}>회원가입하기</Button>: ""}
    </>
  )
}

export default Login