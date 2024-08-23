import React from 'react'
import { Button } from '../atoms/Button'
import { Form } from './Form.styled'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../action';

const MainForm = () => {
  const user = useSelector(state => state.user );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
  <Form>
    <h3>유저아이디 : {user}</h3>
    {!user? <Button onClick={() => navigate('/login')} style={{ marginBottom: "10px" }}>로그인하기</Button>: 
    <Button onClick={() => dispatch(logout())} style={{ marginBottom: "10px" }}>로그아웃</Button> }
    <Button onClick={() => navigate('/signup')}>회원가입하기</Button>
  </Form>
  )
}

export default MainForm