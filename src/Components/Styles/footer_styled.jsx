import styled, { css } from "styled-components";

export const Center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const FontColor = css`
     font-weight: 200;
     color: #fcfcfc;
`
export const Footer = styled.footer`
    /* border: solid 1px green; */
    height: 9vh;
    ${Center}
    flex-direction:column;
    justify-content: space-evenly;
    background-color: #0D1821;
    border-top: solid 1px #fcfcfc;
`
export const BoxCop = styled.div`
    /* border: solid 1px red; */
    p{
        ${FontColor}
    }
    span{
        color: #9A2135;
        font-weight: bold;
    }
`
export const BoxCop2 = styled.div`
    /* border: solid 1px red; */
    p{
        ${FontColor}
    }
    span{
        font-weight:200;
        color: #9A2135;
    }
`
