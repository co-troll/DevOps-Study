import styled from 'styled-components';
import useInput from '../../hooks/useInput';

const InputStyle = styled.input`
  font-size: 16px;
  padding: 3px 6px;
  box-sizing: border-box;
  width: 250px;
  height: 30px;
  border-radius: 2px;
  border: none;

  &:focus {
      outline: none;
  }
`

export const Input = (props) => {
  const inputText = useInput("");
  return <InputStyle {...props} {...inputText} />
}