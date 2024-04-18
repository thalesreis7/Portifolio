import styled, { css } from "styled-components";

export const Center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Footer = styled.footer`
    /* border: solid 1px green; */
    height: 7vh;
    ${Center}
    background-color: #151515;
    p{
        /* border: solid 1px red; */
        color: white;
    }
`