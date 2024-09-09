import React from "react";

export const ButtonType = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit'
} as const;
type ButtonTypeKeys = (typeof ButtonType)[keyof typeof ButtonType];

export const ButtonTheme = {
  LOGIN: '',
  KAKAO: '',
  OTHER: '',
} as const;
type ButtonThemeKeys = (typeof ButtonTheme)[keyof typeof ButtonTheme];

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  type: ButtonTypeKeys;
  theme: ButtonThemeKeys;
}

const Button = (props: Props) => {
  const style = `${props.theme} ${props.className}`;
  return (
    <button onClick={props.onClick} className={style} type={props.type}>
      {props.children}
    </button>
  )
}

export default Button;