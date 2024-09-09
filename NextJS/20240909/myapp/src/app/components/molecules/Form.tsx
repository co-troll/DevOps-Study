import React from "react";
import Input, { InputTheme, InputType } from "../atoms/Input";
import Checkbox from "../atoms/Checkbox";
import Eye from "../atoms/Eye";

export const FormAction = {
  LOGIN: '',
  SiGNUP: '',
} as const;
type FormActionKeys = (typeof FormAction)[keyof typeof FormAction];

export const FormChildren = {
  LOGIN: (
    <>
      <Input type={InputType.TEXT} theme={InputTheme.DEFAULT} placeholder="아이디 또는 이메일" />
      <Input type={InputType.PASSWORD} theme={InputTheme.DEFAULT} placeholder="비밀번호" />
      <Eye />
      <Checkbox text={"아이디 저장"} />
    </>
  ),
  SiGNUP: '',
} as const;
type FormChildrenKeys = (typeof FormChildren)[keyof typeof FormChildren];

export const FormTheme = {
  DEFAULT: '',
  WARNING: ''
} as const;
type FormThemeKeys = (typeof FormTheme)[keyof typeof FormTheme];

interface Props {
  formChildren: FormChildrenKeys;
  children: React.ReactNode;
  action: FormActionKeys;
  className?: string;
  theme: FormThemeKeys;
}

const Form = (props: Props) => {
  const style = `${props.theme} ${props.className}`;
  return (
    <form action={props.action} className={style}>
      {props.formChildren}
      {props.children}
    </form>
  )
}

export default Form;