import React from 'react'
import * as S from '../Styles/header_styled'
import icon from "../../assets/img/icones/iconBar.png"
import {Link} from 'react-scroll'

export default function Header() {
  return (
    <S.Header>
      <S.BoxPrincipal>
        <S.BoxH1 data-aos="zoom-in">
            <img src={icon} alt="" />
            <Link to="about" spy={true} smooth={true} offset={-600} duration={500}>Thales</Link>
        </S.BoxH1>
          <S.Nav>
              <S.Ul data-aos="zoom-in">
                <Link to="about" spy={true} smooth={true} offset={-199} duration={500} >Sobre min</Link>
                <Link to="skills" spy={true} smooth={true} offset={-300} duration={500}>Minhas Skills</Link>
                <Link to="project" spy={true} smooth={true} offset={-200} duration={500}>Projetos</Link>
                {/* <a>Contato</a> */}
              </S.Ul>
          </S.Nav>
      </S.BoxPrincipal>
    </S.Header>
  )
}
