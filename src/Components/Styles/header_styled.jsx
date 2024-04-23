import styled, { css } from "styled-components";

export const Center = css`
    display:flex;
    justify-content: center;
    align-items: center;
`
export const ColorCursor = css`
    color: #d7263d;
    cursor: pointer;
`
export const Hover = css`
    :hover{
        color:  #A6B3C5;
    }
`
export const Header = styled.header`
    /* border: solid 1px red; */
    border-bottom: solid  1px #fcfcfc;
    background-color: #0d1821dd;
    height: 9vh;
    ${Center}
    position: sticky;
    top: 0;
    z-index: 3;
    backdrop-filter: blur(3px);

    @media (max-width: 884px){
        border: solid green;
    }
`
export const BoxPrincipal = styled.div`
    /* border:solid 1px blue; */
    width: 79%;
    ${Center}
    justify-content: space-between;
`
export const BoxH1= styled.div`
    /* border: solid 1px green;  */
    width: 10.7%;
    height: 8vh;
    ${Center}
    justify-content: space-between;
    /* align-items: end; */
    font-size: 1.4rem;
    font-weight: bold;
    ${ColorCursor}
    ${Hover}
    img{
        width: 25%;
        position: relative;
        bottom: 7%;
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
        font-size: 1rem;
        ${Hover}
        ${ColorCursor}
    }
`
