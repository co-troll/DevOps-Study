import React from 'react'
import { Input } from '../atoms/Login/Input';
import { Label } from '../atoms/Login/Label';
import { Button } from '../atoms/Login/Button';

const Form = () => {
  const handlerLogin = (e) => {
    e.preventDefault();
    const { uid: { value: uidValue }, upw: { value: upwValue } } = e.target;
    console.log(uidValue, upwValue);
  }
  return (
    <form onSubmit={handlerLogin}>
      <Label>아이디</Label>
      <Input name="uid" />
      <Label>비밀번호</Label>
      <Input name="upw" />
      <Button>로그인 하기</Button>
    </form>
  )
}

export default Form