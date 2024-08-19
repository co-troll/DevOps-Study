import styled from 'styled-components';

// styled.생성할태그명`css의 구문`
// &는 부모 & > 선택자 : 부모 바로 아래 있는 자식요소
export const Body = styled.div`
    width: 100%;
    min-height: 500px;
    background-color: blue;

    & > form {
        display: block;
        width: 500px;
        min-height: 400px;
        margin: auto;
    }
    
    .name {

    }
`

export const Header = styled.div`
    width: 100%;
    min-height: 80px;
    background-color: ${props => props.color || 'rebeccapurple'};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Footer = styled.div`
    width: 100%;
    min-height: 150px;
    background-color: red;
`