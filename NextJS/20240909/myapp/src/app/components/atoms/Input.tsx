import React from "react";

export const InputType = {
  TEXT: 'text',
  PASSWORD: 'password'
} as const;
type InputTypeKeys = (typeof InputType)[keyof typeof InputType];

export const InputTheme = {
  DEFAULT: '',
  WARNING: ''
} as const;
type InputThemeKeys = (typeof InputTheme)[keyof typeof InputTheme];

interface Props {
  value?: string;
  placeholder?: string;
  className?: string;
  type: InputTypeKeys;
  theme: InputThemeKeys;
}

const Input = (props: Props) => {
  const style = `${props.theme} ${props.className}`;
  return (
    <input className={style} type={props.type} value={props.value} placeholder={props.placeholder} />
  )
}

export default Input;
