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
    @media (max-width:412px) {
        /* border: solid 4px black; */
        justify-content: none;
        height: 198vh;
        /* justify-content: center; */
    }
    /* @media (max-width:320px) {
        border: solid black;
        height:298vh;
    } */
`
export const Section = styled.section`
    /* border: solid 1px green; */
    background-color: #0d1821;
    width: 100%;
    height: 20%;
    ${Center}
    justify-content: space-around;
    align-items: center;
    button{
        width: 10%;
        height: 13%;
        background-color: #D7263D;
        ${Border}
        border-radius: 10px;
        font-weight: bold;
        color: #a6b3c5;
        position: relative;
        right:45%;
        top: 38%;
        cursor: pointer;
        &:hover{
            transition: 300ms linear;
            transform: scale(1.1);
            background-color: #0d1821;
            color: #D7263D;
        }
        &:active{
            font-size: 0.7rem;
        }
        @media (max-width: 412px){
            position: relative;
            right: 35%;
            top: 57%;
            width: 37%;
        }
        @media (max-width:375px) {
            /* border: solid red; */
            width: 77%;
            height: 18%;
            position: relative;
            right: 36%;
        }
        @media (max-width:360px) {
            position: relative;
            top: 65%;
        }
        @media (max-width:320px){
            height: 22%;
            position: relative;
            top: 80%;
            right: 33%;
        }
    }
    @media (max-width: 412px) {
        /* border: solid green; */
        width: 92%;
        height: 18%;
        align-items: flex-start;
        justify-content: space-between;
    }
    @media (max-width: 320px) {
        /* border: solid green; */
        width: 94%;
    }
`
export const BoxOne = styled.div`
    /* border: solid 1px red; */
    background-color: #a6b3c5;
    ${Border}
    width: 30vw;
    height: 50%;
    ${Center}
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 0.3rem;
    @media (max-width:412px) {
        /* border: solid purple; */
        width: 43%;
        height: 44%;
        justify-content: space-evenly;
        position: relative;
        top: 5%;
    }
    @media (max-width:375px) {
        /* border: solid purple; */
        width: 100%;
    }
    @media (max-width:360px) {
        width: 100%;
        height: 52%;
    }
    @media (max-width:320px){
        width: 100%;
        height: 69%;
    }
    h1{
        /* border: solid 1px red; */
        width: 20vw;
        height: 70%;
        font-size: 2.5rem;
        color: #d7263d;
        @media (max-width:412px) {
            /* border: solid 1px red; */
            width: 95%;
            align-items: center;
            height: 44%;
            font-size: 1.1rem;  
        }
    }
    p{  
        /* border: solid 1px red; */
        padding-left: 0.5rem;
        width: 70%;
        font-size: 1.2rem;
        color: #0d1821;
        @media (max-width:412px){
            /* border:solid 1px blue; */
            width: 100%;
            font-size: 0.8rem;
        }
    }
`
export const BoxTwo = styled.figure`
    /* border: solid 1px aqua; */
    ${Center}
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap:0.1rem;
    ${Border}   
    position: relative;
    top: 4%; 
    width:15%;
    height:70%;
    ${Border}   
    position: relative;
    top: 4%; 
    @media (max-width: 412px) {
        /* border: solid aqua; */
        width: 40%;
        height: 53%;
    }
    @media (max-width: 320px){
        height: 70%;
    }
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
        @media (max-width: 412px){
            /* border: solid red; */
            width: 133%;
            height: 44%;
            /* padding-top:1rem; */
            text-align: right;
            font-size: 1rem;
            font-weight: 400;
            position:relative;
            right: 15%;
        }
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
    @media (max-width: 412px) {
        /* border: solid purple; */
        height: 30%;    
    }
`
export const BoxSobre = styled.div`
    border: solid 1px #0d1821;
    ${Border}
    border-radius: 10px;
    background-color: #a6b3c5;
    width: 80%;
    height: 50%;
    ${Center}
    flex-direction: column;
    @media (max-width: 412px) {
        /* border: solid red; */
        width: 90%;
        height: 57%;
        justify-content: space-evenly;
    }
    h2{
        /* border: solid 1px red; */
        align-items: end;
        font-size: 1.8rem;
        color: #D7263D;
        @media (max-width: 412px) {
            /* border: solid red; */
            font-size: 2rem;
        }
    }
    p{
        /* border: solid 1px red; */
        width: 87%;
        height: 57%;
        text-align: justify;
        ${Center};
        font-size: 1.5rem;
        color: #0d1821;
        @media (max-width: 412px) {
            /* border: solid red; */
            font-size: 100%;
            width: 90%;
            height: 55%;
            text-align: justify;
        }
        @media (max-width:320px){
            font-size: 75%;
        }
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
    @media (max-width: 412px) {
        /* border: solid 1px purple; */
        width: 75%;
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
    @media (max-width:320px) {
        /* border:solid black; */
        margin-bottom: 20%;
    }
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
    @media (max-width: 412px) {
        width: 85%;
    }
`   
export const Skills = styled.div`
    /* border: solid green;  */
    width: 40%;
    ${Center}
    align-items: start;
    justify-content: space-between;
    flex-wrap: wrap;
    height:90%;
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
    @media (max-width: 412px) {
        width: 45%;
    }
    }
    img{
        width: 50%;
        border-radius: 20px
        /* ${Center} */
    }
`   
