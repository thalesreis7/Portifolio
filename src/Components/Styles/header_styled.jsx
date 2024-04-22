import styled, { css } from "styled-components";

export const Center = css`
    display:flex;
    justify-content: center;
    align-items: center;
`
export const Hover = css`
    :hover{
        color:  #A6B3C5;
    }
`
export const Header = styled.header`
    /* border: solid 1px red; */
    border-bottom: solid  1px #fcfcfc;
    background-color: #0D1821;
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
    width: 12%;
    ${Center}
    justify-content: space-between;
    font-size: 0.8rem;
    color: #d7263d;
    cursor: pointer;
    ${Hover}
    img{
        width: 28%;
    }

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
    a{
        text-decoration:none;
        font-weight: bold;
        color: #d7263d;
        ${Hover}
        cursor: pointer;
    }
`
