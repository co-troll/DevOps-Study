import React from "react";
import Link from "next/link";

export const LinkTheme = {
  LOGIN: '',
  ASK: '',
} as const;
type LinkThemeKeys = (typeof LinkTheme)[keyof typeof LinkTheme];

interface Props {
  children: React.ReactNode;
  className?: string;
  href: string;
  theme: LinkThemeKeys;
}

const LinkText = (props: Props) => {
  const style = `${props.theme} ${props.className}`;
  return (
    <Link href={props.href} className={style}>
      {props.children}
    </Link>
  )
}

export default LinkText;