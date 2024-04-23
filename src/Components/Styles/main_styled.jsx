import styled, { css } from "styled-components";

export const Center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Border = css`
    border: solid 2px #333;
    box-shadow: -3px 4px 0 #888, -5px 7px 0 #333;
    border-radius: 10px 2px 10px 2px;
`
export const Main = styled.main`
    /* border: solid 4px black; */
    height: 210vh;
    background-color: #0d1821;
    ${Center}
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
`
export const Section = styled.section`
    /* border: solid 1px green; */
    background-color: #0d1821;
    width: 100%;
    height: 30%;
    ${Center}
    justify-content: space-around;
    align-items: center;
`
export const BoxOne = styled.div`
    /* border: solid 1px red; */
    background-color: #a6b3c5;
    ${Border}
    width: 30vw;
    height: 40%;
    ${Center}
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 0.3rem;
    h1{
        /* border: solid 1px red; */
        width: 20vw;
        height: 70%;
        font-size: 2.5rem;
        color: #d7263d;
    }
    p{  
        /* border: solid 1px red; */
        padding-left: 0.5rem;
        width: 70%;
        font-size: 1.2rem;
        color: #0d1821;
    }
`
export const BoxTwo = styled.figure`
    /* border: solid 1px aqua; */
    width: 30vw;
    height: 70%;
    ${Center}
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap:0.1rem;
    width:20%;
    height:50%;
    ${Border}   
    position: relative;
    top: 4%; 
    img{
        width:100%;
        height:100%;
        border-radius: 10px 2px 10px 2px;
    }
    figcaption{
        /* border:solid 1px red; */
        width: 30vw;
        padding-top: 1rem;
        ${Center}
        color: #fcfcfc;
    }
`
export const SectionTwo = styled.section`
    /* border: solid 4px #5d0abb; */
    background-color: #d7263eb2;
    background-image: linear-gradient( to right, #c5253aaf, #d14a5c6c, #d7263eb2, #0d1821); 
    width: 100%;
    height: 30%;
    overflow-x: hidden;
    ${Center}
    flex-direction: column;
    justify-content: space-evenly;
`
export const BoxSobre = styled.div`
    /* border: solid 1px #0d1821; */
    ${Border}
    border-radius: 10px;
    background-color: #a6b3c5;
    width: 80%;
    height: 50%;
    ${Center}
    flex-direction: column;
    h2{
        /* border: solid 1px red; */
        align-items: end;
        font-size: 1.8rem;
        color: #D7263D;
    }
    p{
        /* border: solid 1px red; */
        width: 87%;
        height: 57%;
        text-align: justify;
        ${Center};
        font-size: 1.5rem;
        color: #0d1821;
    }
`
export const BoxIcons = styled.div`
    /* border: solid 1px purple; */
    width:20%;
    height: 15%;
    ${Center}
    justify-content: space-around;
    :hover{
        background-color: #A6B3C5;
    }
    div{
        box-shadow: -3px 4px 0 #888, -5px 7px 0 #0d1821;
        ${Center}
        background-color: #0d1821;
        border-radius: 10px;
        width: 30%;
        height: 8vh;
        &:hover{
            transition: 300ms linear;
            transform: scale(1.1);
        }
    }
`
export const SectionThree = styled.section`
    /* border: solid 1px white; */
    background-color: #d7263eb2;
    background-image: linear-gradient( to left, #c5253aaf, #d14a5c6c, #d7263eb2, #0d1821); 
    width: 100%;
    height: 20%;
    ${Center}
    flex-direction: column;
    font-size: 1.5rem;
    color: #0d1821;
`

export const BoxSkills = styled.div`
    /* border: solid 1px blue; */
    background-color: #a6b3c5;
    ${Border}
    border-radius: 10px;
    width: 40%;
    height: 70%;
    ${Center}
    justify-content: space-evenly;
`   
export const Skills = styled.div`
    /* border: solid green;  */
    width: 40%;
    ${Center}
    align-items: start;
    justify-content: space-between;
    flex-wrap: wrap;
    height:90%;
    /* position: absolute; */
    :hover{
         transition: 100ms linear;
         transform: scale(1.1);
         background-color: #bfbfc0;
         border: none;
        }
    figure{
        /* border: solid 1px red; */
        width: 28%;
        height: 35%;
        ${Center}
        background-color: #0d1821;
        ${Border}
        border-radius: 20px;
    }
    img{
        width: 50%;
        border-radius: 20px
        /* ${Center} */
    }
`   