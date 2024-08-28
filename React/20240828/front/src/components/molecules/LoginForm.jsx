import React from 'react'
import { Form } from './Form.styled'
import { InputBox } from './InputBox'
import { Button } from '../atoms/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { User } from '../recoil/loginAtom'

const LoginForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(User);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { id: { value: id }, pw: { value: pw } } = e.target;

    console.log(id, pw);
    if (!id || !pw) 
      return alert("입력하지 않은 값이 있습니다");
    const { data: idCheck } = await axios.get(`http://localhost:4000/user/idCheck/${id}`);
    if (idCheck)
      return alert("존재하지 않는 아이디입니다.");
    const { data: check } = await axios.post(`http://localhost:4000/user/login`, { loginId: id, password: pw });
    if (!check) 
      return alert("비밀번호가 틀립니다.");

    alert("로그인 성공");
    setUser({ id });
    navigate('/main');
  }

  return (
    <Form onSubmit={handleLogin}>
      <h1>로그인</h1>
      <InputBox inputProps={{ type: "text", name: "id" }} labelText={"아이디"} />
      <InputBox inputProps={{ type: "password", name: "pw" }} labelText={"비밀번호"} />
      <Button>로그인</Button>
    </Form>
  )
}

export default LoginForm;