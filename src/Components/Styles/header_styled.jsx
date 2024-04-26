import styled, { css } from "styled-components";

export const Center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ColorCursor = css`
  color: #d7263d;
  cursor: pointer;
`;
export const Hover = css`
  :hover {
    color: #a6b3c5;
  }
`;
export const Header = styled.header`
  /* border: solid 1px red; */
  border-bottom: solid 1px #fcfcfc;
  background-color: #0d1821dd;
  height: 9vh;
  ${Center}
  position: sticky;
  top: 0;
  z-index: 3;
  backdrop-filter: blur(3px);
  @media (max-width: 412px) {
    height: 15vh;
  }
`;
export const BoxPrincipal = styled.div`
  /* border:solid 1px blue; */
  width: 79%;
  ${Center}
  justify-content: space-between;
  @media (max-width: 412px) {
    width: 95%;
    height: 80%;
    /* justify-content: space-evenly; */
  }
`;
export const BoxH1 = styled.div`
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
    img {
    width: 25%;
    position: relative;
    bottom: 7%;
  }
  @media (max-width: 412px) {
    width: 30%;
    height: 20%;
    font-size: 1.8rem;
    img {
      width: 38%;
    }
  }
`;
export const Nav = styled.nav`
  /* border:solid 1px orange; */
  width: 40%;
  ${Center}
  @media (max-width: 412px) {
    /* width: 65%; */
    display: none;
  }
`;
export const Ul = styled.ul`
  /* border: solid 1px yellowgreen; */
  width: 100%;
  ${Center}
  justify-content: space-between;
  ${Hover}
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
    ${Hover}
    ${ColorCursor}
    @media (max-width: 412px) {
      font-size: 0.9rem;
      
    }
    @media (max-width: 360px) {
      font-size: 0.7rem;
    }
  }
`;

     // MENU HAMBURGUER

export const BoxMenu = styled.div`
  display: none;
  @media (max-width: 412px) {
    /* border: solid green; */
    ${Center}
    flex-direction: column;
    justify-content: start;
    align-items: end;
    width: 95%;
    height: 50vh;
    position: absolute;
    top: 20%;
    button {
      background-color: #a6b3c5;
      width: 15%;
      height: 5vh;
      font-size: 1rem;
      border: solid 2px #333;
      border-radius: 10px;
      position: relative;
      top: 4%;
      &:hover {
        transition: 300ms linear;
        transform: scale(1.1);
        background-color: #0d1821;
        color: #d7263eb2;
        border: solid 1px #d7263eb2;
      }
    }
  }
`;
export const UlMenu = styled.ul`
  @media (max-width: 412px) {
      border: solid  #a6b3c5d6;
      position: relative;
      top: 4%;
      background-image: linear-gradient( to right, #1e384d45, #12202c45, #0d1821, #0d1821);
      backdrop-filter: blur(3px);
      border-radius: 10px;
      height: 80%;
      width: 80%;
      background-color: #0d1821;
      ${Center}
      flex-direction:column;
      align-items:center;
      justify-content: space-around;
      a{
        font-size: 1.5rem;
        font-weight: bold;
        color:#d7263eb2;
        &:hover{
        color: #a6b3c5;
        }
      }
    }
`;

