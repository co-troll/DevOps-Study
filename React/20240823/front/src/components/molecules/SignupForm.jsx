import React from 'react'
import { Form } from './Form.styled'
import { InputBox } from './InputBox'
import { Button } from '../atoms/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignupForm = () => {
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const { id: { value: id }, pw: { value: pw }, pwCheck: {value: pwCheck} } = e.target;

    console.log(id, pw, pwCheck);
    if (!id || !pw || !pwCheck) 
      return alert("입력하지 않은 값이 있습니다");
    if (pw !== pwCheck)
      return alert("비밀번호가 일치하지 않습니다.");
    const { data: idCheck } = await axios.get(`http://localhost:4000/user/idCheck/${id}`);
    if (!idCheck)
      return alert("이미 있는 아이디입니다.");
    await axios.post(`http://localhost:4000/user/signup`, { loginId: id, password: pw });
    alert("회원가입 성공");
    return navigate('/login');
  }

  return (
    <Form onSubmit={handleSignup}>
      <h1>회원가입</h1>
      <InputBox inputProps={{ type: "text", name: "id" }} labelText={"아이디"} />
      <InputBox inputProps={{ type: "password", name: "pw" }} labelText={"비밀번호"} />
      <InputBox inputProps={{ type: "password", name: "pwCheck" }} labelText={"비밀번호 확인"} />
      <Button>회원가입</Button>
    </Form>
  )
}

export default SignupForm