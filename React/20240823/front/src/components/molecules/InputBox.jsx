import styled from 'styled-components';
import { Label } from '../atoms/Label';
import { Input } from '../atoms/Input';

const DivStyle = styled.div`
  display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`

export const InputBox = ({ inputProps, labelText }) => {
  return <DivStyle>
    <Label>{labelText}</Label>
    <Input {...inputProps}/>
  </DivStyle>
}