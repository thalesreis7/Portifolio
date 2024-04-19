import styled, { css } from "styled-components";

export const Center = css`
    display:flex;
    justify-content: center;
    align-items: center;
`
export const Hover = css`
    :hover{
        color:  #F1742B;
    }
`
export const Header = styled.header`
    /* border: solid 1px red; */
    background-color: #D6DEEA;
    height: 9vh;
    ${Center}
`

export const BoxPrincipal = styled.div`
    /* border:solid 1px blue; */
    width: 79%;
    ${Center}
    justify-content: space-between;
`

export const BoxH1= styled.div`
    /* border: solid 1px green;  */
    width: 20%;
    /* ${Center} */
    font-size: 0.8rem;
    color: #000;
    cursor: pointer;
    ${Hover}

`

export const Nav = styled.nav`
    /* border:solid 1px orange; */
    width: 40%;
    ${Center}
`
export const Ul = styled.ul`
    /* border: solid 1px yellowgreen; */
    width: 100%;
    ${Center}
    justify-content: space-between;
    ${Hover}
    li{
        list-style: none;
        font-size: 1rem;
        font-weight: bold;
        color: #000;
        cursor: pointer;
    }
    a{
        text-decoration:none;
        font-weight: bold;
        color: #000;
        ${Hover}
    }
`
