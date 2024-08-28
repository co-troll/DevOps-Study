import styled from 'styled-components';

const LabelStyle = styled.label`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
`

export const Label = ({ children }) => {
  return <LabelStyle>{children}</LabelStyle>
}