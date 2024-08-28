import React from 'react'
import { Button } from '../atoms/Button'
import { Form } from './Form.styled'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../action';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { User } from '../recoil/loginAtom';

const MainForm = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(User);
  const resetUser = useResetRecoilState(User);
  
  const handleLogout = async () => {
    resetUser();
  }

  return (
  <Form>
    <h3>유저아이디 : {user.id}</h3>
    {!user.id? <Button onClick={() => navigate('/login')} style={{ marginBottom: "10px" }}>로그인하기</Button>: 
    <Button onClick={handleLogout} style={{ marginBottom: "10px" }}>로그아웃</Button> }
    <Button onClick={() => navigate('/signup')}>회원가입하기</Button>
  </Form>
  )
}

export default MainForm