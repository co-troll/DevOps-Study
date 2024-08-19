import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    background-color: lightgray;
    border-radius: 20px;

    & > h2 {
        margin-bottom: 30px;
    }
`

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`

export const Label = styled.label`
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 5px;
`

export const Input = styled.input`
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

export const Button = styled.button`
    font-size: 16px;
    padding: 3px 6px;
    box-sizing: border-box;
    width: 250px;
    height: 40px;
    border-radius: 5px;
    border: none;
    cursor: pointer;

`