import styled, { css } from "styled-components";

export const Center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Main = styled.main`
    /* border: solid 1px red; */
    height: 160vh;
    background-color: #B9C8DD;
    ${Center}
    flex-direction: column;
    /* align-items: start; */
    /* justify-content: space-evenly; */
    flex-wrap: wrap;
`
export const Section = styled.section`
    /* border: solid 1px green; */
    background-color: #B9C8DD;
    width: 100%;
    height: 47vh;
    ${Center}
    justify-content: space-around;
    /* align-items: ; */
    
`
export const BoxOne = styled.div`
    /* background-color: #a6b3c5; */
    /* border-radius: 10px 3px 10px 3px; */
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
        color: #000;
    }
    p{  
        /* border: solid 1px red; */
        font-size: 1.2rem;
        color: #F1742B;
    }
`
export const BoxTwo = styled.figure`
    /* border: solid 1px aqua; */
    width: 30vw;
    height: 70%;
    ${Center}
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
    gap:0.1rem;
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
        color: #F1742B;
    }
`
export const SectionTwo = styled.section`
    /* border: solid 1px #535353; */
    background-color: #1160BC;
    margin-top: 0.2rem;
    border-top: solid 1px white;
    width: 100%;
    height: 40%;
    ${Center}
    flex-direction: column;
    /* justify-content: space-evenly; */
  
`
export const BoxSobre = styled.div`
    border: solid 1px white;
    border-radius: 10px;
    background-color: #B9C8DD;
    width: 79vw;
    height: 50%;
    ${Center}
    flex-direction: column;
    h2{
        /* border: solid 1px red; */
        font-size: 1.8rem;
        color: #F1742B;
    }
    p{
        /* border: solid 1px red; */
        width: 69vw;
        height: 20vh;
        text-align: justify;
        ${Center};
        font-size: 1.5rem;
        color: #000;
    }
`
export const BoxIcons = styled.div`
    /* border: solid 1px purple; */
    width:20vw;
    height: 15vh;
    ${Center}
    justify-content: space-around;
    div{
        border: solid 1px white;
        ${Center}
        background-color: #B9C8DD;
        border-radius: 20px;
        width: 20%;
        height: 8vh;
    }
`
export const SectionThree = styled.section`
    /* border: solid 1px red; */
    background-color: #1161bc transparent 50%;

    width: 100%;
    height: 40vh;
    ${Center}
    flex-direction: column;
    font-size: 1.5rem;
    color: #F1742B;
`
export const BoxSkills = styled.div`
    /* border: solid 1px blue; */
    width: 80%;
    height: 20vh;
    ${Center}

`   