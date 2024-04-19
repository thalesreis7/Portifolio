import styled, { css } from "styled-components";

export const Center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Footer = styled.footer`
    /* border: solid 1px green; */
    height: 10vh;
    ${Center}
    flex-direction:column;
    justify-content: space-evenly;
    background-color: #D6DEEA;
    border-top: solid 1px #1161bc81;
    
`
export const BoxCop = styled.div`
    /* border: solid 1px red; */
    p{
        color: #000;
        font-weight: 200;
    }
    span{
        color: #F1742B;
        font-weight: bold;
    }
`
export const BoxCop2 = styled.div`
    /* border: solid 1px red; */
    p{
        font-weight: 200;
        color: #000;
    }
    span{
        font-weight:200;
        color: #F1742B;
    }
`
