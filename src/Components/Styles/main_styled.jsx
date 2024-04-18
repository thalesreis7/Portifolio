import styled, { css } from "styled-components";

export const Center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Main = styled.main`
    /* border: solid 1px red; */
    height: 130vh;
    background-color: #111111;;
    ${Center}
    flex-direction: column;
    /* align-items: start; */
    justify-content: space-around;
    flex-wrap: wrap;
`
export const Section = styled.section`
    /* border: solid 1px green; */
    width: 78vw;
    height: 47vh;
    ${Center}
    justify-content: space-between;
`
export const BoxOne = styled.div`
    /* border: solid 1px aqua; */
    width: 30vw;
    height: 70%;
    ${Center}
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 0.3rem;
    h1{
        /* border: solid 1px red; */
        width: 20vw;
        height: 40%;
        font-size: 2.5rem;
        color: white;
    }
    p{  
        /* border: solid 1px red; */
        font-size: 1.2rem;
        color: #8A8A8A;
    }
`
export const BoxTwo = styled.figure`
    /* border: solid 1px aqua;
    width: 30vw; */
    height: 70%;
    ${Center}
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
    img{
        /* border: solid 1px green; */
        background-color: #2320bd;
        /* width:99%;
        height:90%; */
        border-radius: 70px;
    }
    figcaption{
        /* border:solid 1px red; */
        width: 30vw;
        ${Center}
        color: #8a8a8a;
    }
`
export const SectionTwo = styled.section`
    border: solid 1px #535353;
    background-color: #151515;
    border-radius: 10px;
    width: 77vw;
    height: 40%;
    ${Center}
    flex-direction: column;
    justify-content: space-evenly;
  
`
export const BoxSobre = styled.div`
    /* border: solid 1px blue; */
    width: 79vw;
    height: 35vh;
    ${Center}
    flex-direction: column;
    justify-content: space-between;
    h2{
        /* border: solid 1px red; */
        font-size: 2rem;
        color: white;
    }
    p{
        /* border: solid 1px red; */
        width: 69vw;
        height: 60vh;
        text-align: justify;
        ${Center};
        font-size: 1.5rem;
        color: #8a8a8a;
    }
`
export const BoxIcons = styled.div`
    /* border: solid 1px purple; */
    width:20vw;
    height: 10vh;
    ${Center}
    justify-content: space-around;
`

