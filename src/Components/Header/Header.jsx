import React, { useState } from 'react'
import * as S from '../Styles/header_styled'
import icon from "../../assets/img/icones/iconBar.png"
import {Link} from 'react-scroll'

export default function Header() {

  const [menu, setMenu] = useState(false);

  return (
    <S.Header>
      <S.BoxPrincipal>
        <S.BoxH1 data-aos="zoom-in">
            <img src={icon} alt="" />
            <Link to="about" spy={true} smooth={true} offset={-600} duration={500}>Thales</Link>
        </S.BoxH1>
          <S.Nav>
              <S.Ul data-aos="zoom-in">
<<<<<<< HEAD
                <Link to="about" spy={true} smooth={true} offset={-199} duration={80} >Sobre min</Link>
=======
                <Link to="about" spy={true} smooth={true} offset={-199} duration={500} >Sobre min</Link>
>>>>>>> 379ae3a561e6b17526268702cc4a3f752183399a
                <Link to="skills" spy={true} smooth={true} offset={-300} duration={500}>Minhas Skills</Link>
                <Link to="project" spy={true} smooth={true} offset={-200} duration={500}>Projetos</Link>
                {/* <a>Contato</a> */}
              </S.Ul>
          </S.Nav>
            <S.BoxMenu>
              <button onClick={()=> setMenu(!menu)}>{menu ? "X" : "☰"}</button>
              {menu &&(
                <S.UlMenu>
                  <Link to="about" spy={true} smooth={true} offset={-600} duration={500}>Início</Link>
                  <Link to="about" spy={true} smooth={true} offset={-199} duration={500} >Sobre min</Link>
                  <Link to="skills" spy={true} smooth={true} offset={-300} duration={500}>Minhas Skills</Link>
                  <Link to="project" spy={true} smooth={true} offset={-200} duration={500}>Projetos</Link>
                </S.UlMenu>
              )}
          </S.BoxMenu>
      </S.BoxPrincipal>
    </S.Header>
  )
}
