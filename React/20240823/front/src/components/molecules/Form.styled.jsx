import styled from 'styled-components';

const FormStyle = styled.form`
  display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
    padding: 20px;
    width: max-content;
    border-radius: 10px;
    margin: auto;
`

export const Form = ({ onSubmit, children }) => {
  return <FormStyle onSubmit={onSubmit}>{children}</FormStyle>
}