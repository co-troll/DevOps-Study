import styled from 'styled-components';

const ButtonStyle = styled.button`
  font-size: 16px;
  padding: 3px 6px;
  box-sizing: border-box;
  width: 250px;
  height: 40px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`

export const Button = (props) => {
  return <ButtonStyle {...props}>{props.children}</ButtonStyle>
}