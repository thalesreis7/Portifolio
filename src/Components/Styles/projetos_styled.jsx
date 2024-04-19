import styled, { css } from "styled-components";

export const Center = css`
    display: flex;
    justify-content:center;
    align-items: center;
`
export const BoxCard = styled.div`
    border: solid 1px blue;
    /* width: 80%; */
    ${Center}
    img{
        border: solid 1px green;
        width: 80%;
        /* ${Center} */
    }
`
