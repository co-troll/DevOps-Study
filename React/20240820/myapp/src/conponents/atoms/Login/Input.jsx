import useInput from '../../../hooks/useInput';

export const Input = (props) => {
    const userInput = useInput("");
    return (<input {...props} {...userInput}></input>)
}