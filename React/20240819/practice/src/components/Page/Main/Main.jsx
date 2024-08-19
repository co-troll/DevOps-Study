import React, { useState } from 'react'
import { Body, Button, Footer, Header } from './Main.styled'
import { Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';



const Main = () => {

  const [users, setUsers] = useState([]);
  const [loginUser, setLoginUser] = useState(null);

  const navigate = useNavigate();

  const LoginButton = () => {
    navigate('/login');
  }

  const LogoutButton = () => {
    if (!loginUser)
      return
    setLoginUser(null);
  }


  return (
    <>
      <Header />
      <Body>
        <Routes>
          <Route path='/' element={<>
            <div>유저 아이디 : {loginUser?.id}</div>
            <Button onClick={LoginButton}>로그인하기</Button>
            <Button onClick={LogoutButton}>로그아웃</Button>
          </>} />
          <Route path='/login' element={<Login userInfo={{ users, setUsers }}/>} />
          <Route path='/signup' element={<Login userInfo={{ users, setUsers }}/>} />
        </Routes>
      </Body>
      <Footer />
    </>
  )
}

export default Main